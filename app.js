const rpc ={
    rock: {
        name: 'rock',
        win: 'scissors',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61m9jG%2Bjj-L._AC_SX679_.jpg'
    },
    paper: {
        name: 'paper',
        win: 'rock',
        img: 'https://rollandinc-production.s3.ca-central-1.amazonaws.com/app/uploads/2019/07/22145855/paper-digital-white.jpg'
    },
    scissors: {
        name: 'scissors',
        win: 'paper',
        img: 'https://m.media-amazon.com/images/I/810Tz4tXUyL._AC_SL1500_.jpg'
    }
}


function play(plyr){
   let comp = 'rock'
   let choice = rpc[plyr]
   document.getElementById("player-choice").innerHTML =
       `<img src="${choice.img}" alt="animal image">`
   if (comp == plyr){
       console.log("tie")
   } else if (choice.win == comp){
       console.log("win")
   } else {
       console.log("loser")
   }

}

