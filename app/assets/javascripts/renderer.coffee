class Renderer
  constructor: (@target, @wall) ->


  render: ->
    @target.empty()

    html = $('<table/>')

    _.forEach(@wall.tiles, (row) =>
      line = $('<tr/>')

      html.append line

      _.forEach(row, (tile) =>
        cell = $('<td/>')

        img = $(tile.image())

        img.bind 'click', (event) =>
          if event.metaKey
            tile.change()
          else
            tile.rotate()

          @render()

        cell.append(img)
        line.append(cell)
      )
    )

    @target.append html


@Renderer = Renderer