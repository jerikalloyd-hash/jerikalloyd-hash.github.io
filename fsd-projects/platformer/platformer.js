$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     //TODO 1 - Enable the Grid
     toggleGrid(window);
     


    // TODO 2 - creatplatfroms 
    createPlatform(320, 620, 50, 10,"blue");
    createPlatform(1100, 320, 50, 20, "hotpink" );
    createPlatform(900, 300, 60, 20,"white");
    createPlatform(1100, 100, 200, 20, "yellow");
    createPlatform(600, 500, 100, 20, "brown");
    

     





   // TODO 3 - Create Collectables
   createCollectable("kennedi", 1350, 20);
   createCollectable("diamond", 300, 120, 0.6, 0.7);
   createCollectable("database", 1250, 0.6);
   



    
    // TODO 4 - Create Cannons
   createCannon("right", 200, 1000);
   createCannon("right", 600 , 2000);
   createCannon("top", 500, 4000,);


    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
