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
    let rpcNames = Object.keys(rpc)
    let index = Math.floor(Math.random() * rpcNames.length);
    let comp = rpcNames[index]
    let choice = rpc[plyr]
    let compPic = rpc[comp]
    document.getElementById("player-choice").innerHTML =
        `<h2>You picked ${choice.name}</h2>
       <img src="${choice.img}" alt="animal image">`
    document.getElementById("comp-choice").innerHTML =
        `<h2>The computer picked ${compPic.name}</h2>
       <img src="${compPic.img}" alt="animal image">`
    if (comp == plyr){
       document.getElementById("results").innerHTML =
       `<h1>It's a TIE!!!</h1>`
    } else if (choice.win == comp){
        document.getElementById("results").innerHTML =
        `<h1>You WIN!!!</h1>`
    } else {
        document.getElementById("results").innerHTML =
        `<h1>You LOSE!!!</h1>`
    }
 
}

