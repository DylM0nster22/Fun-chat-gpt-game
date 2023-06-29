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
        // Other properties like position, speed, etc.
    },

    // The enemies that the player must avoid
    enemies: [
        {
            spriteLeft: 'Enemy1_left.png',
            spriteRight: 'Enemy1_right.png',
            // Other properties like position, speed, etc.
        },
        {
            spriteLeft: 'Enemy2_left.png',
            spriteRight: 'Enemy2_right.png',
            // Other properties like position, speed, etc.
        }
    ],

    // The items that the player must collect
    items: [
        {
            sprite: 'Coin.png',
            // Other properties like position, value, etc.
        },
        {
            sprite: 'Power_orb.png',
            // Other properties like position, effect, etc.
        }
    ],

    // This function will be called when the game starts
    start: function() {
        // Todo
    },

    // This function will be called when the game is updated
    update: function() {
        // Todo
    },

    // This function will be called when the game is drawn
    draw: function() {
        // Todo
    }
};   
