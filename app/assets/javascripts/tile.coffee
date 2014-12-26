class Tile
  angles = ['angle_0', 'angle_90', 'angle_180', 'angle_270']

  constructor: (@direction, @sharpness, @rotation) ->
    @vh = @rotation % 2

  image_path: ->
    d = (@direction > 0) && 'lr' || 'rl'
    s = (@sharpness > 0) && 's' || 'f'

    image_path("#{d}#{s}.png")


  image: ->
    "<img src=#{@image_path()} class='#{angles[@rotation]}'/>"

  rotate: ->
    @rotation = (@rotation + 1) % 4


  change: ->
    type = @direction * 2 + @sharpness
    type = (type + 1) % 4

    @sharpness = type % 2
    @direction = type >> 1


@Tile = Tile