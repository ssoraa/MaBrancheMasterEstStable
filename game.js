const Game = require("game.js")
const fortnite = new Game("BattleRoyal")

fortnite.on("ready", () => {
  fortnite.game.send("BIENVENUE SUR CE SUPERBE BATTLE ROYAL")
})

fortnite.on("memberJoin", (players, game) => {
  if(players.size === 100) {
    game.start()
  }
})

fortnite.on("finalKill", (player, game) => {
  player.send("GG, t'es le gagnant, le chomage est fier de toi pour t'être entraîner autant de temps à ce jeu")
  game.restart()
})
