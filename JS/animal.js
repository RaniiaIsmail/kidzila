//Race setup 
var gameArea = document.getElementById("start-race");
var raceTrack = document.getElementById("game-area");

// Animal race data
var animals = [
  { name: "Cheetah", speed: 10, top: 20, img: "../resources/cheetahrace.png" },
  { name: "Lion", speed: 7, top: 130, img: "../resources/lionrace.png" },
  { name: "Giraffe", speed: 5, top: 230, img: "../resources/girafferace.png" },
  { name: "Elephant", speed: 4, top: 330, img: "../resources/elephantrace.png" },
];

// Start race button
gameArea.addEventListener("click", function () {
  // Clear previous race
  raceTrack.innerHTML = "";
  
  // Remove any previous winner message
  var oldMessage = document.getElementById("winner-message");
  if (oldMessage) {
    oldMessage.remove();
  }

  // Track if we have a winner
  var hasWinner = false;
  var winnerName = "";

  // Create animals
  animals.forEach(function (animal) {
    // Create animal image
    var animalImg = document.createElement("img");
    animalImg.src = animal.img;
    animalImg.width = "100px";
    animalImg.height = "100px";
    animalImg.className = "animal";
    animalImg.style.left = "0px";
    animalImg.style.top = animal.top + "px";
    
    raceTrack.appendChild(animalImg);
    var race = setInterval(function () {
      // Get current position
      var position = parseInt(animalImg.style.left);
      
      // Move animal
      animalImg.style.left = position + animal.speed + "px";
      
      // Check if animal finished
      if (position >= 700) {
        clearInterval(race);
        
        //  highlight the first
        if (!hasWinner) {
          hasWinner = true;
          winnerName = animal.name;
          animalImg.style.border = "3px solid gold";
          
          // winer message
          if (animal.name === "Cheetah") {
            var winnerMessage = document.createElement("div");
            winnerMessage.id = "winner-message";
            winnerMessage.innerHTML = "🌟🎈 CHEETAH WINS!🎈🌟";
            winnerMessage.style.position = "absolute";
            winnerMessage.style.top = "10%";
            winnerMessage.style.left = "20%";
            winnerMessage.style.fontSize = "30px";
            winnerMessage.style.fontWeight = "bold";
            winnerMessage.style.textShadow = "2px 2px 4px #000";
            winnerMessage.style.color =" #51a860";
            winnerMessage.style.padding = "20px";
            winnerMessage.style.zIndex = "100";
            
            raceTrack.appendChild(winnerMessage);
          }
        }
      }
    }, 100);
  });
});
