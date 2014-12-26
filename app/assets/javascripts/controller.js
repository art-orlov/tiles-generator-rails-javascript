$(function () {
    function init(w, h) {
        var wall = new Wall(w, h),
            gen  = new Generator(),
            rnd  = new Renderer($('#result'), wall);

        gen.magic(wall);

        console.log(wall);

        rnd.render();
    }

    $('#area button#generate').bind('click', function () {
        var w = parseInt($('#area input[name=width]').val()),
            h = parseInt($('#area input[name=height]').val());

        init(w, h);

        return false;
    });

    $('#area button#save').bind('click', function () {
        html2canvas($('#result'), {
          onrendered: function (canvas) {
              console.log(canvas);

              var image = canvas.toDataURL("image/png");

              $('#save_image').html($('<img/>').attr('src', image));
          }
        });

        return false;
    });

    init(8, 8);
});

