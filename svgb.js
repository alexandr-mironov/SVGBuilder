class AbstractBuilder{
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
    ns = ns || 'http://www.w3.org/2000/svg';
    _createNode('svg', ns)
  }
  
  setWidth(width) {
     return _setAttribute('width', width);
  }
  
  setHeight(height) {
    return _setAttribute('height', height);
  }
  
  render() {
    return this._el;
  }
}

class PathBuilder extends AbstractBuilder {
  constructor(ns) {
    ns = ns || 'http://www.w3.org/2000/svg';
    _createNode('path', ns);
  }
}
