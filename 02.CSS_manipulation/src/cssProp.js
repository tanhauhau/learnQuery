function cssProp(element, prop, value) {
  'use strict';

  if(typeof prop === 'string'){
    if(typeof value === 'undefined'){
      return element.style[prop];
    }else{
      element.style[prop] = value;
    }
  }else if(typeof prop === 'object'){
    for (var p in prop) {
      if (prop.hasOwnProperty(p)) {
        element.style[p] = prop[p];
      }
    }
  }
}
