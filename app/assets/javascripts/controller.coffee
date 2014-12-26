$( ->
  init = (w, h) ->
    wall = new Wall(w, h)

    gen = new Generator

    rnd = new Renderer $('#result'), wall

    gen.magic wall

    console.log wall

    rnd.render()


  $('#area button#generate').click( ->
    [w, h] = [parseInt($('#area input[name=width]').val()), parseInt($('#area input[name=height]').val())]

    init(w, h)

    return false
  )

  $('#area button#save').click( ->
    html2canvas($('#result'), {
      onrendered: (canvas) ->
        console.log(canvas)
        image = canvas.toDataURL("image/png")

        $('#save_image').html($('<img/>').attr('src', image))
    })

    return false
  )


  init(8, 8)
)