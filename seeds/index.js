const mongoose = require('mongoose');
const Lawyer = require('../models/lawyers')


const dbUrl = 'mongodb+srv://rohangoyal991:rohan@cluster0.g0dd65h.mongodb.net/wow'


mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

async function saveLawyer()
{
  const law = new Lawyer({FirstName : 'Rohan Goyal' , Specialization : 'Family Lawyer', Image: 'https://drive.google.com/file/d/13Zl_qNVkoR4UTAa_VeOh_lUXV1XDV0U_/view?usp=sharing'})
  await law.save();
}

saveLawyer() ; 
