const NAMESPACE = 'http://www.w3.org/2000/svg';
class AbstractBuilder {
  _createNode(type, namespace) {
    this._el = document.createElementNS(namespace, type);
  }
  
  _setAttribute(key, value) {
    this._el.setAttribute(key, value);
    return this;
  }

  render() {
    return this._el;
  }
}

class SVGBuilder extends AbstractBuilder {
  constructor(ns) {
    ns = ns || NAMESPACE;
    super();
    this._createNode('svg', ns)
  }
  
  setWidth(width) {
     return this._setAttribute('width', width);
  }
  
  setHeight(height) {
    return this._setAttribute('height', height);
  }
  
  setViewBox(xmin, ymin, xmax, ymax) {
    return this._setAttribute('viewBox', `${xmin || 0} ${ymin || 0} ${xmax || 0} ${ymax || 0} `);
  }
  
  addPath(path) {
    this._el.appendChild(path);
    return this;
  }
}

class PathBuilder extends AbstractBuilder {
  constructor(ns) {
    ns = ns || NAMESPACE;
    super();
    this._createNode('path', ns);
    
    // replace to methods
    this._el.setAttribute('stroke', 'black');
    this._el.setAttribute('fill', 'transparent');
  }
  
  setD(data) {
    return this._setAttribute('d', data);
  }
  
  addMove(x, y) {
    return this.appendD([
      " ",
      "M",
      x,
      y
    ].join(" "))
  }
  
  addLine(x, y) {
    return this.appendD([
      " ",
      "L",
      x,
      y
    ].join(" "))
  }
  
  appendD(data) {
    data = this._el.getAttribute('d') + data;
    return this._setAttribute('d', data);
  }
}
