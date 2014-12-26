(function (window, undefined) {
    function Generator() {

    }

    function guess_01() {
        return Math.floor(Math.random() * 2);
    }

    function guess_03() {
        return Math.floor(Math.random() * 4);
    }

    function clash_detected(tile1, tile2, rotation) {
        return !!tile1 && !!tile2 && tile1.vh == tile2.vh && tile1.vh == (rotation % 2)
    }

    Generator.prototype.magic = function (wall) {
        function get_tile(y, x) {
            if (y >= 0 && x >= 0) {
                return wall.tiles[y][x];
            } else {
                return null;
            }
        }

        function clash_detected_pos(y, x, rotation) {
            return clash_detected(get_tile(y-2, x), get_tile(y-1, x), rotation) || clash_detected(get_tile(y, x-2), get_tile(y, x-1), rotation);
        }

        function find_rotation (y, x) {
            var guess = guess_03();

            if (clash_detected_pos(y, x, guess)) {
                guess = (guess + 1) % 4;
            }

            if (clash_detected_pos(y, x, guess)) {
                return undefined;
            } else {
                return guess;
            }

        }

        function find_tile (y, x) {
            // it cannot be 3 horizontal or 3 vertical tiles in a row or column

            var direction = guess_01(),
                sharpness = guess_01(),
                rotation  = find_rotation(y, x);


            if (rotation != undefined) {
                wall.tiles[y][x] = new Tile(direction, sharpness, rotation);

                // find next tile
                if (x < (wall.width - 1)) {
                    x++;
                } else if (y < (wall.height - 1)) {
                    y++;
                    x = 0;
                } else {
                    return true
                }

                return find_tile(y, x);
            } else {
                wall.tiles[y][x] = null;
                return undefined;
            }
        }

        do {
            console.log('Generating...')
        } while (!find_tile(0, 0));
    };



    window['Generator'] = Generator;
})(window);
