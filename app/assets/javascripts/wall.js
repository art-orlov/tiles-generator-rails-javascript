(function (window, undefined) {
    function Wall(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [];

        for (var y = 0; y < this.height; y++) {
            var line = this.tiles[y] = [];
            for (var x = 0; x < this.width; x++) {
                line[x] = null;
            }
        }

    }

    window['Wall'] = Wall;
})(window);
