function CreateSession(req , res) {
    const name = req.body.name ;

    //TODO : use this name

    res.json({
        id: "123",
        livesLeft : 6,
        result: false ,
        maskedWord: ["_","_"]
    })
}


function PlaySession(req , res) {
    const gameId = req.params.id ;
    const letter = req.body.letter ;

    //TODO : use this letter
    console.log(gameId) ;
    console.log(letter) ;

    res.json({
        id: gameId,
        livesLeft : 6,
        result: false ,
        maskedWord: ["_","_"]
    })
}

module.exports = {
    CreateSession,
    PlaySession
}