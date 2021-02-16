const superagent = require('superagent')

const config = require('./config.json')


const search = async (playerName) =>{

    const playerURL = `${config.url}/?search=${playerName}`

    try{
        const playerResponse = await superagent.get(playerURL)
        return playerResponse.body
    }catch(error){
        return error;
    }
        
}
const fetch = async (playerId) =>{

    const playerURLID = `${config.url}/${playerId}`
     
    try{
        const playerResponseID = await superagent.get(playerURLID)
        return playerResponseID.body

    }catch(error){
        return error;
    }

}



module.exports = {
    search,
    fetch
}