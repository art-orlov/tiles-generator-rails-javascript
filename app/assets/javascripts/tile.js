(function (window, undefined) {
    var angles = ['angle_0', 'angle_90', 'angle_180', 'angle_270'];

    function Tile(direction, sharpness, rotation) {
        this.direction = direction;
        this.sharpness = sharpness;
        this.rotation = rotation;
        this.vh = this.rotation % 2;
    }

    Tile.prototype.image_path = function () {
        var d = this.direction > 0 ? 'lr' : 'rl',
            s = this.sharpness > 0 ? 's'  : 'f';

        return window.image_path(d + s + '.png');
    };

    Tile.prototype.image = function () {
        return '<img src="' + this.image_path() + '" class="' + angles[this.rotation] + '"/>';
    };


    Tile.prototype.rotate = function () {
        this.rotation = (this.rotation + 1) % 4;
    };

    Tile.prototype.change = function () {
        var type = this.direction * 2 + this.sharpness;

        type = (type + 1) % 4;

        this.sharpness = type % 2;
        this.direction = type >> 1;
    };

    window['Tile'] = Tile;
})(window);
