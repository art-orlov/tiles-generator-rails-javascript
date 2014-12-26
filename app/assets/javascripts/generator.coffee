class Generator
  guess_01 = ->
    return Math.floor(Math.random() * 2)

  guess_03 = ->
    return Math.floor(Math.random() * 4)


  magic: (wall) ->
    get_tile = (y, x) ->
      return if (y >= 0 && x >= 0) then wall.tiles[y][x] else null

    clash_detected = (tile1, tile2, rotation) ->
      return tile1? && tile2 && tile1.vh == tile2.vh && tile1.vh == (rotation % 2)

    clash_detected_pos = (y, x, rotation) ->
      return clash_detected(get_tile(y-2, x), get_tile(y-1, x), rotation) || clash_detected(get_tile(y, x-2), get_tile(y, x-1), rotation)


    find_rotation = (y, x) ->
      guess = guess_03()

      if clash_detected_pos(y, x, guess)
        guess = (guess + 1) % 4

      return if clash_detected_pos(y, x, guess) then undefined else guess


    find_tile = (y, x) ->
      # it cannot be 3 horizontal or 3 vertical tiles in a row or column

      direction = guess_01()
      sharpness = guess_01()

      rotation = find_rotation(y, x)

      if rotation != undefined
        wall.tiles[y][x] = new Tile(direction, sharpness, rotation)

        # find next tile
        if x < (wall.width - 1)
          x++
        else if y < (wall.height - 1)
          y++
          x = 0
        else
          return true

        return find_tile(y, x)
      else
        wall.tiles[y][x] = null
        return undefined

    console.log('Generating...') until find_tile(0, 0)


@Generator = Generator