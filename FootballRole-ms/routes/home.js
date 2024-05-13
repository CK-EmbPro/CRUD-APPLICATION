const express=require('express')
const FootBall= require('../models/football');

const router=express.Router();

//TOUTE TO HANDLE THE HOMEPAGE REQUEST

router.get('/', (req,res)=>{
    FootBall.find({})
    .then((response)=>{
        res.render("home", {footballs: response})
    })
    .catch((err)=>{
        console.log(err);
    })
}
)

//ROUTE TO POST DATA TO MY DB
router.post('/add', (req, res, next)=>{
    const name = req.body.name
    const players= req.body.players
    const coach = req.body.coach

    const newFoot= new FootBall({
        name: name,
        players: players,
        coach: coach
    })

    newFoot.save()
    console.log(name, players, coach);
    res.redirect('/users')
})


//ROUTE TO SHOW THE UPDATED DATA 
router.get('/edit/:id', (req, res, next)=>{
    console.log(req.params.id)
    FootBall.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((docs)=>{
       res.render('edit', {foot:docs})
    })
    .catch((err)=>{
        console.log(err)
        next(err)
    })
})


//ROUTE TO UPDATE THE POSTED DATA

router.post('/edit/:id', (req,res, next)=>{
    FootBall.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then((docs)=>{
        res.redirect('/users')
    })
    .catch((err)=>{
        console.log(err)
        next(err)
    })
})

//ROUTE TO DELETE THE DATA

router.get('/delete/:id', (req,res, next)=>{

    FootBall.findByIdAndDelete({_id: req.params.id}, {projections: {__v:0, _id:0}})
    .then(()=>{
        console.log("Deleted successfully")
    })
    
    .catch((err)=>{
        console.log("Failed to delete the document")
        next(err)
    })
})


module.exports = router
