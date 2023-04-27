/*
    6a. Set up basic router settings
*/
const express = require("express");
const router = express.Router();
// Import the Model
const Snack = require("../models/snackModel");

/*
    9. Write a router method to GET from the database
*/
router.get("/", (req, res) => {
    Snack.find({}, (error, foundSnacks) => {
        if(!error){
            res.send(foundSnacks)
        } else {
            console.log(error)
            res.send("snacks not found")
        }
    })
});

/*
    8. Write a router method to post to the database
*/
router.post("/create-snack", (req, res) => {
    Snack.create(req.body)
         .then(() => {
            res.json({
                message: "success",
                payload: req.body
            });
         })
         .catch((error) => {
            console.log(`ERROR: ${error}`)
            res.json({
                message: "failure",
                payload: "Possible duplicate item"
            })
         });
});

/*
    10. Write a router method to PUT into the database
*/
router.put("/update-snack/:id", (req, res) => {
    Snack.updateOne(
        { _id: req.params.id },
        { $set: req.body },
        { upsert: true }
    ).then((data) => {
        res.json({ message: "success", payload: data });
    }).catch((error) => {
        res.json({ message: "failure", payload: error });
    })
});

/*
    11. Write a router method to DELETE from the database
*/
router.delete("/delete-snack/:id", (req, res) => {
    Snack.findByIdAndDelete({ _id: req.params.id })
        .then((data) => {
            res.json({ message: "success", payload: data });
        })
        .catch((error) => {
            res.json({ message: "failure", payload: error });
        })
});

/*
    6b. Export the router
*/
module.exports = router;