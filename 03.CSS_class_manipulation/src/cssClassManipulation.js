var cssClass = (function() {
  'use strict';

  return {
    add: add,
    remove: remove,
    toggle: toggle,
    has: has
  };

  function add(element, clz){
    return element.classList.add(clz);
  }
  function remove(element, clz){
    return element.classList.remove(clz);
  }
  function toggle(element, clz){
    return element.classList.toggle(clz);
  }
  function has(element, clz){
    return element.classList.contains(clz);
  }
})();
