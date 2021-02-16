const express = require('express')

const router = express.Router()

const playermodule = require('playermodule')
router.get('/search', async (req, res ) => {
    const { name } = req.query
    
    try{
        
        const playerResponse = await playermodule.search(name)
        
        //console.log(`${playerResponseID.first_name} ${playerResponseID.last_name} plays for the ${playerResponseID.team.full_name} who are in the ${playerResponseID.team.conference}ern Conference.He is ${playerResponseID.height_feet} feet and ${playerResponseID.height_inches} inches tall. He weighs ${playerResponseID.weight_pounds} pounds and plays at the ${playerResponseID.position} position.`)

       console.log(playerResponse.data)
       res.json(playerResponse.data)
    }catch(err){
        res.json(`${err}`)
    }
})
router.get('/fetch', async (req,res) =>{

    const { playerId } = req.query
    console.log(playerId)
    try{
        const playerResponseID = await playermodule.fetch(playerId)
         console.log("this id")
       console.log(playerResponseID)
        res.json(playerResponseID)
    }
    catch(err){
        res.json(`${err}`)
    }
})

module.exports = router;