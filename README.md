# SVGBuilder
JavaScript SVG builder 


## usage example
```js
secondPath = new PathBuilder()
    .setD('M 1000 1000 L 10 10 L 10 10 L 100 10 L 1000 450 L 1100 450 L 1100 100');


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
  .addPath(secondPath.render())
  .render()
);

// dynamic update path
setTimeout(
  ()=>{
    secondPath.appendD(" L 1020 1090");
    setTimeout(()=>{
      secondPath
        .addLine(350, 700)
        .addLine(700, 350)
        .addLine(800, 350);
    }, 5000);
  }
  , 5000); 
```
