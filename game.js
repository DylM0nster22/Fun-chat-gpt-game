var game = {
    // The game's state (running, paused, ended)
    state: 'ready',

    // The player's score
    score: 0,

    // The player's lives
    lives: 3,

    // The player
    player: {
        spriteLeft: 'Player_left.png',
        spriteRight: 'Player_right.png',
        position: { x: 0, y: 0 },
        speed: 5
    },

    // The enemies that the player must avoid
    enemies: [
        {
            spriteLeft: 'Enemy1_left.png',
            spriteRight: 'Enemy1_right.png',
            position: { x: 0, y: 0 },
            speed: 3
        },
        {
            spriteLeft: 'Enemy2_left.png',
            spriteRight: 'Enemy2_right.png',
            position: { x: 0, y: 0 },
            speed: 4
        }
    ],

    // The items that the player must collect
    items: [
        {
            sprite: 'Coin.png',
            position: { x: 0, y: 0 },
            value: 10
        },
        {
            sprite: 'Power_orb.png',
            position: { x: 0, y: 0 },
            effect: 'extra_life'
        }
    ],

    // This function will be called when the game starts
    start: function() {
        // Initialize game
        this.state = 'running';
    },

    // This function will be called when the game is updated
    update: function() {
        // Update game state
        // Move player and enemies
        // Check for collisions
        // Update score and lives
    },

    // This function will be called when the game is drawn
    draw: function() {
        // Draw game state
        // Draw player, enemies, and items
    }
};
