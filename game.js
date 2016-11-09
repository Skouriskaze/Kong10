Game = {

    map_grid: {
        width: 24,
        height: 16,
        tile: {
            width: 16,
            height: 16
        }
    },

    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },

    height: function() {
        return this.map_grid.height* this.map_grid.tile.height;
    },


    start: function() {
        Crafty.init(480, 320);
        Crafty.background('green');
    }
}
