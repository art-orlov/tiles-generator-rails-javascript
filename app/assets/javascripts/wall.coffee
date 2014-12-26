class Wall
  constructor: (@width, @height) ->
    @tiles = []

    [w, h] = [@width-1, @height-1]
    for i in [0..h]
      line = @tiles[i] = []
      for j in [0..w]
        line[j] = null

@Wall = Wall