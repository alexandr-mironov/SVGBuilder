class AbstractBuilder{
  setAttribute(key, value) {
    this._el.setAttribute(key, value);
    return this;
  }

  render() {
    return this._el;
  }
}

class SVGBuilder extends AbstractBuilder {
  constructor(ns) {
    ns = ns || 'http://www.w3.org/2000/svg';
    this.el = document.createElementNS(ns, svg);
  }
  
  setAttribute(key, value) {
    this.el.setAttribute('width', width);
    return this;
  }
  
  setWidth(width) {
    this.el.setAttribute('width', width);
    return this;
  }
  
  setHeight(height) {
    this.el.setAttribute('height', height);
    return this;
  }
  
  render() {
    return this.el;
  }
}

class PathBuilder {
  constructor(ns) {
    ns = ns || 'http://www.w3.org/2000/svg';
    this.el = document.createElementNS(ns, path);
  }
  
  
}
