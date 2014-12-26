(function (window, undefined) {
    function Renderer(target, wall) {
        this.target = target;
        this.wall = wall;
    }

    Renderer.prototype.render = function () {
        this.target.empty();

        var self = this;

        var html = $('<table/>');

        _.forEach(this.wall.tiles, function (row) {
            var line = $('<tr/>');

            html.append(line);

            _.forEach(row, function (tile) {
                var cell = $('<td/>'),
                    img  = $(tile.image());

                img.bind('click', function (event) {
                    if (event.metaKey) {
                        tile.change();
                    } else {
                        tile.rotate();
                    }

                    self.render();
                });

                cell.append(img);
                line.append(cell);
            });
        });

        this.target.append(html);
    };

    window['Renderer'] = Renderer;
})(window);
