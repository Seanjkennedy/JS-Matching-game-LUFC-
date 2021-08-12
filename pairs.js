
var game = {

    "turns" : 0,
    "difficulty" : null,
    "guessesAllowed":10,
    "pick1" : [null,null],
    "pick2" : [null,null]

}



var positions = {
    "box1" : [1, "static/bielsa.jpg"],
   "box2" : [1, "static/bielsa.jpg"],
   "box3" : [2, "static/phillips.jpg"],
   "box4" : [2, "static/phillips.jpg"],
   "box5" : [3, "static/bamford.jpg"],
   "box6" : [3, "static/bamford.jpg"],
   "box7" : [4, "static/rafa.jpg"],
   "box8" : [4, "static/rafa.jpg"],
   "box9" : [5, "static/dallas.jpg"],
   "box10" : [5, "static/dallas.jpg"],
   "box11" : [6, "static/rodrigo.jpg"],
   "box12" : [6, "static/rodrigo.jpg"]
   }

// randomize positions.
// 

// var disableFirst = () => {

//     // if (game.pick1[1] && !game.pick2[1]) {
//     //     document.getElementById(game.pick1[1]).disabled = true;
//     // }
//     // else {
//     // document.getElementById(game.pick1[1]).disabled = false;
//     // }

// }


var reveal = (id) => {
    revealedPicture = positions[id][1];
    revealPicture = document.getElementById(id);
    revealPicture.src = revealedPicture;
    



}

var hide = (id) => {
    coverPicture = "static/leedscrest.jpg";
    hidePicture = document.getElementById(id);
    setTimeout(function() {hidePicture.src = coverPicture;}, 200);
}

var pickBox = (id) => {
    clearTimeout()
    reveal(id);
    getWhichCard(id);
    disableBox();
    console.log("before.......")
    console.log(game.pick1)
    console.log(game.pick2)

    if (game.pick1[0] === game.pick2[0] && !null) {
        reveal(game.pick2[1]);
        reveal(game.pick1[1]);
        document.getElementById(game.pick1[1]).disabled = true;
        document.getElementById(game.pick2[1]).disabled = true;
        resetPicks()
        disableBox();


    }
    else{
        hide(id);
        
    }
    
    console.log("after.......")

    console.log(game.pick1)
    console.log(game.pick2)

    // disableFirst();
}

var disableBox = () => {

    if (game.pick1[0] && !game.pick2[0]) {
        document.getElementById(game.pick1[1]).disabled = true;
    }
    else if (game.pick1[1] && game.pick2[1]) {
        document.getElementById(game.pick1[1]).disabled = true;
        document.getElementById(game.pick2[1]).disabled = true;

        if (game.pick1[0] === game.pick2[0]) {
            document.getElementById(game.pick1[1]).disabled = true;
            document.getElementById(game.pick2[1]).disabled = true;
        }
        else {
            document.getElementById(game.pick1[1]).disabled = false;
            document.getElementById(game.pick2[1]).disabled = false;
        }
}



}


var resetPicks = () => {
    
    game.pick1[0] = null;
    game.pick2[0] = null;
    game.pick1[1] = null;
    game.pick2[1] = null;
    
}

var getWhichCard = (id) => {

    if (game.pick1[0] && game.pick2[0]){
        resetPicks()
    }

    if (!game.pick1[0]){
        game.pick1[0] = positions[id][1];
        game.pick1[1] = id;
        // disableBox();

    }
    else if (!game.pick2[0]){
        game.pick2[0] = positions[id][1];
        game.pick2[1] = id;
        // disableBox();

    }
}


// } 




    // hideAgain = setTimeout((revealPicture.src = "static/leedscrest.jpg"), 1000)
        // var myVar;

        // function myFunction() {
        // myVar = setTimeout(alertFunc, 3000);
        // }

        // function alertFunc() {
        // alert("Hello!");


//   reveal card funtion
// if choice 1 + 2 is same, stay revealed else hide cards again (2 sec), both result in ++turn

// if turns === guessesAllowed, game over

// if all cards revealed, win. else continues



