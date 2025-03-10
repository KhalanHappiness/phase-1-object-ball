function gameObject(){

    const teams = {
        home : {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1


                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7

                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15

                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5

                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1

                }

            }


        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2

                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10

                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5

                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0

                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12

                }

            }


        }
    }



    return teams
}

// function valueAccess(){
//     let object1 = gameObject()

//     // return object1["home"]["teamName"]

//     // return object1.home.colors[0]

//     for(let key in object1){
    
//        let value = object1[key]

//        return `key: ${key}, value: ${value}`
//     }

//     // return Object.keys(object1)
//     // return Object.values(object1)
//     // return Object.entries(object1)


// }

function numPointsScored(playerName){

    let object = gameObject()

    if(object.home.players[playerName]){
        return object.home.players[playerName].number
    }
    else if (object.away.players[playerName]){
        return object.away.players[playerName].number
    }
    else{
        return 'player not found'
    }

}
function shoeSize(playerName){

    let object1 = gameObject()

    if(object1.home.players[playerName]){
        return object1.home.players[playerName].shoe
    }
    else if (object1.away.players[playerName]){
        return object1.away.players[playerName].shoe
    }
    else{
        return 'player not found'
    }


}

function teamColors(teamName){

    let objName = gameObject()

    return objName[teamName].colors

    

}
function teamNames(){
    let objName = gameObject()

    return `${objName.home.teamName}, ${objName.away.teamName}`



}
function playerNumbers(teamName){

    let object2 = gameObject()

    for(let key in object2){
        if (object2[key].teamName === teamName){
            return Object.values(object2[key].players).map(player=>player.number)
        } else {

            return 'team not found'
        }
    }


}

function playerStats(playerName){
    const objName = gameObject()



    if(objName.home.players[playerName]){
        return objName.home.players[playerName]
    }
    else if(objName.away.players[playerName]){
        return objName.away.players[playerName]

    }else{
        return 'player not found'
    }
}
function bigShoeRebounds(){

    const objName = gameObject()

    let largestShoeSize = 0
    let rebounds = 0

    if(objName.home){
        for(const player in objName.home.players){
            debugger
            if(objName.home.players[player].shoe > largestShoeSize){
                largestShoeSize = objName.home.players[player].shoe
                rebounds = objName.home.players[player].rebounds
            }
        }



    }
    else if(objName.away ){
        if(objName.away){
            for(const player in objName.home.players){
                if(objName.home.players[player].shoe > largestShoeSize){
                    largestShoeSize = objName.away.players[player].shoe
                    rebounds = objName.away.players[player].rebounds
                }
            }
        }
    }
    return rebounds

}

function mostPointsScored(){
    const objName = gameObject()

    let highestPoints = 0
    let topplayer;

    if(objName.home) {
        for(let player in objName.home.players){
            if(objName.home.players[player].points > highestPoints){
                 highestPoints = objName.home.players[player].points
                 topplayer = player
            }
    }

}

if(objName.away) {
    for(let player in objName.away.players){
        if(objName.away.players[player].points > highestPoints){
            highestPoints = objName.away.players[player].points
            topplayer = player
        }
}

}
return topplayer
}

function winningTeam(){
    const objName = gameObject()

    let homeTeamPoints = 0
    let awayTeamPoints = 0

    

    

        for (let player in objName.home.players){
            let pointsPerplayer = objName.home.players[player].points
           
                homeTeamPoints += pointsPerplayer
               
            
        }


        for(let player in objName.away.players){
            let pointsPerplayer = objName.away.players[player].points
            

                awayTeamPoints += pointsPerplayer

            
        }

        if(homeTeamPoints>awayTeamPoints){
            return objName.home.teamName
        }
        else if(awayTeamPoints > homeTeamPoints){
            return objName.away.teamName
        } else{
            return "It is a tie"
        } 


}
function playerWithLongestName(){

   const objName = gameObject()
   let playerName=''

   
    for(let player in objName.home.players){
    

    if( player.length > playerName.length){
        playerName = player
    }
     
        
    }

    for(let player in objName.away.players){
    

        if( player.length > playerName.length){
            playerName = player
        }
         
            
        }
        
    return playerName
   
}
