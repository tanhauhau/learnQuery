var eventListener = (function() {
  'use strict';
  return {
    on: on,
    off: off,
    trigger: trigger,
    delegate: delegate,
  }
  function on(element, name, fn){
    var listener;
    if(element._listener && element._listener[name]){
      listener = element._listener[name];
    }else{
      listener = createListener();
    }
    listener.add(fn);
    element._listener = element._listener || {};
    element._listener[name] = listener;
    element.addEventListener(name, listener.notify);
  }
  function off(element, name, fn){
    if(name){
      var listener = element._listener[name];
      if(listener){
        if(fn){
          listener.remove(fn);
        }else{
          listener.listener = [];
        }
        if(listener.listener.length === 0){
          element.removeEventListener(name, listener.notify);
          delete element._listener[name];
        }
      }
    } else {
      var listener = element._listener || {};
      for (var l in listener) {
        if (listener.hasOwnProperty(l)) {
          element.removeEventListener(l, listener[l].notify);
        }
      }
      delete element._listener;
    }
  }
  function trigger(element, name){
    element.dispatchEvent(new Event(name));
  }
  function delegate(element, name, fn){

  }
  function createListener(){
    var listener = {};
    listener.listener = [];
    listener.add = add;
    listener.remove = remove;
    listener.notify = notify;
    return listener;
    function add(fn) {
      listener.listener.push(fn);
      return listener;
    }
    function remove(fn){
      listener.listener.splice(listener.listener.indexOf(fn), 1);
      return listener;
    }
    function notify(){
      for (var i = listener.listener.length - 1; i >= 0 ; i--) {
        listener.listener[i].apply(arguments, arguments);
      }
    }
  }
})();
