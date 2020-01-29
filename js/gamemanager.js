
let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFightMethod();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Cyclops":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Dwarf":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case "Lion":
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
            case "Rat":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
        };
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML =
         '<img src = "images/avatar_player/' + classType.toLowerCase()  + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: '+ player.health + '</p><p>Mana: '+ player.mana + '</p><p>Strength: '+ player.strength + '</p><p>Agility: '+ player.agility + '</p><p>Speed: '+ player.speed + '</p></div>';
    },
    setPreFightMethod: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an Enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Create Enemy
        let enemy0 = new Enemy("gremlin", 100, 0, 50, 100, 100);
        let enemy1 = new Enemy("demon", 200, 0, 150, 80, 150);
        chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy0;
                break;
        
            case 1:
                enemy= enemy1;
                break;
        };
        getHeader.innerHTML = '<p>Choose your Flavour!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves()">Attack!</a>';
        getEnemy.innerHTML = '<img src="images/avatar_enemy/' + enemy.enemyType +'.jpg" alt="'+ enemy.enemyType +'" class="img-avatar"><div><h3>'+ enemy.enemyType +'</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}

let select_player_buttons = document.querySelectorAll(".player-selection");
select_player_buttons.forEach(function(select_player_button) {
    select_player_button.addEventListener("click", function () {
        let classType = select_player_button.id;
        GameManager.setGameStart(classType);
    }); 
});



