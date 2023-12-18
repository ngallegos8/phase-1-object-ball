function gameObject(){
    const obj = {
        home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
            "Alan Anderson": {
              number: 0,
              shoe: 16,
              points: 22,
              rebounds: 12,
              assits: 12,
              steals: 3,
              blocks: 1,
              slamDunks: 1,
            },
            "Reggie Evens": {
              number: 30,
              shoe: 14,
              points: 12,
              rebounds: 12,
              assits: 12,
              steals: 12,
              blocks: 12,
              slamDunks: 7,
            },
            "Brook Lopez": {
              number: 11,
              shoe: 17,
              points: 17,
              rebounds: 19,
              assits: 10,
              steals: 3,
              blocks: 1,
              slamDunks: 15,
            },
            "Mason Plumlee": {
              number: 1,
              shoe: 19,
              points: 26,
              rebounds: 12,
              assits: 6,
              steals: 3,
              blocks: 8,
              slamDunks: 5,
            },
            "Jason Terry": {
              number: 31,
              shoe: 15,
              points: 19,
              rebounds: 2,
              assits: 2,
              steals: 4,
              blocks: 11,
              slamDunks: 1,
            },
          },
        },
        away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
            "Jeff Adrien": {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assits: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2,
            },
            "Bismack Biyombo": {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assits: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10,
            },
            "DeSagna Diop": {
              number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assits: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5,
            },
            "Ben Gordon": {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assits: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0,
            },
            "Brendan Hayword": {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assits: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12,
            },
          },
        },
      };
      return obj;
}

console.log(gameObject())
const game = gameObject()

function playersObject(){
    return {...game.home.players, ...game.away.players}
}
console.log(playersObject())
const players = playersObject()
function numPointsScored(name){
    return players[name].points
}

console.log(numPointsScored("Alan Anderson"))

function shoeSize(name){
    return players[name].shoe
}

console.log(shoeSize("Alan Anderson"))
const teams = Object.values(game)
console.log(teams)
function findTeamByName(name){
    return teams.find((team) => team.teamName == name)
}
function teamColors(name){
    return findTeamByName(name).colors
}

console.log(teamColors("Brooklyn Nets"))

function teamNames(){
    return teams.map((team)=> team.teamName)
}
console.log(teamNames())

function playerNumbers(name){
    for(const team of teams){
        if(team.teamName == name){
            let playerNumber = Object.values(team.players)
            console.log(playerNumber)
            return playerNumber.map((stat) => stat.number)
        }
    }
}
console.log(playerNumbers("Brooklyn Nets"))

function playerStats(name){
    return players[name]
}
console.log(playerStats("Alan Anderson"))

function bigShoeRebounds(){
    const largest = Object.values(players).sort((a,b)=> {
        if(a.shoe > b.shoe) return -1;
        if(a.shoe < b.shoe) return 1;
        if(a.shoe === b.shoe) return 0;
    })[0]
    console.log(largest)

    return largest.rebounds;
}
console.log(bigShoeRebounds())

function mostPointsScored(){
    const sorted = Object.entries(players).sort((a,b)=> {
        console.log(a)
        console.log(b)
        if(a[1].points > b[1].points) return -1;
        if(a[1].points < b[1].points) return 1;
        if(a[1].points == b[1].points) return 0;
    })
    console.log(sorted)
    return sorted[0][0]
}

console.log(mostPointsScored())

function winningTeam(){
    const homeStats = Object.values(game.home.players)
    const awayStats = Object.values(game.away.players)
    console.log(homeStats)
    console.log(awayStats)
    const homeScore = homeStats.reduce((total, stat) => total + stat.points, 0)
    const awayScore = awayStats.reduce((total, stat) => total + stat.points, 0)
    console.log(homeScore)
    console.log(awayScore)

    // if(homeScore > awayScore){
    //     return game.home.teamName
    // }
    // else if(awayScore > homeScore){
    //     return game.away.teamName
    // }
    // else{
    //     return "Teams are tied"
    // }

   return  homeScore > awayScore ? game.home.teamName : awayScore > homeScore ? game.away.teamName : "teams are tied"
}
winningTeam()

function playerWithLongestName(){
    return Object.keys(players).sort((a,b)=> {
        if(a.length > b.length) return -1;
        if(a.length < b.length) return 1;
        if(a.length == b.length) return 0;
    })[0]
}
console.log(playerWithLongestName())

function doesLongNameSteal(){
    const allStats = Object.values(players)
    const maxSteals = Math.max(allStats.map((s) => s.steals))
    const longestSteals = playerStats(playerWithLongestName()).steals;
    return longestSteals === maxSteals;
}

console.log(doesLongNameSteal())

