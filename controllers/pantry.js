const Pantry = require("../models/pantry");

const PantriesController = { 

  Create: (req, res) => {
    
    const pantry = new Pantry;
    
      pantry.save((err) => {
        if (err) {
          throw err;
        }
        res.status(201).redirect("/");
      });



    

}