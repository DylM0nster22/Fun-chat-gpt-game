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
        this.state = 'running';
        this.player.position = { x: 0, y: 0 };
        this.enemies.forEach(function(enemy) {
            enemy.position = { x: Math.random() * 100, y: Math.random() * 100 };
        });
        this.items.forEach(function(item) {
            item.position = { x: Math.random() * 100, y: Math.random() * 100 };
        });
    },

    // This function will be called when the game is updated
    update: function() {
        // Move player
        this.player.position.x += this.player.speed;

        // Move enemies
        this.enemies.forEach(function(enemy) {
            enemy.position.x += enemy.speed;
        });

        // Check for collisions
        // If player collides with an enemy, decrease lives
        // If player collides with an item, increase score
    },

    // This function will be called when the game is drawn
    draw: function() {
        // Clear game area

        // Draw player
        // You'll need to replace this with actual drawing code
        console.log('Draw player at', this.player.position);

        // Draw enemies
        this.enemies.forEach(function(enemy) {
            // You'll need to replace this with actual drawing code
            console.log('Draw enemy at', enemy.position);
        });

        // Draw items
        this.items.forEach(function(item) {
            // You'll need to replace this with actual drawing code
            console.log('Draw item at', item.position);
        });
    }
};
