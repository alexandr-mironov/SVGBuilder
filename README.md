# SVGBuilder
JavaScript SVG builder 


## usage example
```js
document.body.appendChild(
  (new SVGBuilder())
  .setWidth('10cm')
  .setHeight('10cm')
  .setViewBox(0,0,1200,1200)
  .addPath(
    new PathBuilder()
    .setD('M 0 0 L 0 100 L 100 100 L 1000 100 L 1000 450 L 1100 450 L 1100 100')
    .render()
  )
  .addPath(
    new PathBuilder()
    .setD('M 1000 1000 L 10 10 L 10 10 L 100 10 L 1000 450 L 1100 450 L 1100 100')
    .render()
  )
  .render()
);
```
