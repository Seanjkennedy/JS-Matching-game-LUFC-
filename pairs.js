var game = {

    "turns" : 0,
    "difficulty" : null,
    "guessesAllowed":10,
    "pick1" : [null,null],
    "pick2" : [null,null]

}


var positions = {
    
    "box0" : [1, "static/bielsa.jpg"],
    "box1" : [1, "static/bielsa.jpg"],
    "box2" : [2, "static/phillips.jpg"],
    "box3" : [2, "static/phillips.jpg"],
    "box4" : [3, "static/bamford.jpg"],
    "box5" : [3, "static/bamford.jpg"],
    "box6" : [4, "static/rafa.jpg"],
    "box7" : [4, "static/rafa.jpg"],
    "box8" : [5, "static/dallas.jpg"],
    "box9" : [5, "static/dallas.jpg"],
    "box10" : [6, "static/rodrigo.jpg"],
    "box11" : [6, "static/rodrigo.jpg"]
    }

var images = [
    
    "static/bielsa.jpg",
    "static/bielsa.jpg",
    "static/kalvin.jpg",
    "static/kalvin.jpg",
    "static/bamford2.jpg",
    "static/bamford2.jpg",
    "static/rafa2.jpg",
    "static/rafa2.jpg",
    "static/dallas.jpg",
    "static/dallas.jpg",
    "static/rodrigo2.jpg",
    "static/rodrigo2.jpg"
    ]


// Fisher–Yates Shuffle.  use this to randomise the images array
var shuffleArray = (images) => {
    
    console.log(images)
    console.log(images, "array")
    var m = images.length, t, i;
  
    while (m) {
  
        i = Math.floor(Math.random() * m--);
        t = images[m];
        images[m] = images[i];
        images[i] = t;
        }   
  
    return images;
    }

//   console.log(shuffleArray(images));

var numberOfTries = 0;
var imagesBoxes = {};

var setImageBoxes = (shuffleArray) => {

    for (i in shuffleArray){
        
        imagesBoxes[`box${i}`] = shuffleArray[i]
        }
    }

console.log(images)

setImageBoxes(shuffleArray(images));

console.log(images)
console.log("imagesBoxes", imagesBoxes)
  

var resetGame = () => {
    console.log(images);
    setImageBoxes(shuffleArray(images));
    resetPicks();
    numberOfTries = 0;
    updateTries(numberOfTries);
    for ( var i = 0; i< images.length; i++){

        var resestBox = document.getElementById(`box${i}`)
        resestBox.src="static/leedscrest.jpg";
        resestBox.disabled = false;

        }
    }   


var reveal = (id) => {

    console.log("reveal imagesBoxes[id]", imagesBoxes[id])
    revealedPicture = imagesBoxes[id];
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
    numberOfTries ++;
    updateTries(numberOfTries);
    }   

var getWhichCard = (id) => {

    if (game.pick1[0] && game.pick2[0]){

        resetPicks()
        }

    if (!game.pick1[0]){

        game.pick1[0] = imagesBoxes[id];
        game.pick1[1] = id;
        // disableBox();
        }

    else if (!game.pick2[0]){

        game.pick2[0] = imagesBoxes[id];
        game.pick2[1] = id;
        // disableBox();
        }
    }

var updateTries = (triesRemaining) => {

    var tries = document.getElementById("tries")
    tries.innerHTML = `Number of Tries - ${triesRemaining} `

    }
// if turns === guessesAllowed, game over

// if all cards revealed, win. else continues





