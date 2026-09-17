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
    createPlatform(100, 20, 10, 10,"blue");
    createPlatform(1200, 400, 70, 50, "hotpink" );
    createPlatform(200, 0, 20, 20,"white");
    createPlatform(1100, 100, 600, 50, "yellow");
    createPlatform(500, 0, 20, 200, "brown")
    createPlatform(1350, 400, 50, 50, "lime")
    createPlatform(100, 0, 300, 20, "black")
    createPlatform(130,  700, 100, 50, "red")
    createPlatform(100, 30, 20, 20, "gray")
    createPlatform(900, 450, 100, 20, "tan")


     





    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
