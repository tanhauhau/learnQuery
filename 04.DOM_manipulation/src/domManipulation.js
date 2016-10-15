var dom = (function(){
  return {
    remove: remove,
    append: append,
    prepend: prepend,
    after: after,
    before: before,
    val: val,
  };

  function remove(element){
    if(element.parentNode){
      element.parentNode.removeChild(element);
    }
  }
  function append(element, targetElem){
    element.appendChild(targetElem);
  }
  function prepend(element, targetElem){
    var child = element.firstChild;
    if(child){
      element.insertBefore(targetElem, child);
    }else{
      append(element, targetElem);
    }
  }
  function after(element, targetElem){
    if(element.parentNode){
      if(element.nextSibling){
        element.parentNode.insertBefore(targetElem, element.nextSibling);
      }else{
        append(element.parentNode, targetElem);
      }
    }
  }
  function before(element, targetElem){
    if(element.parentNode){
      element.parentNode.insertBefore(targetElem, element);
    }
  }
  function val(element){
    return element.value || element.getAttributeNode('value').nodeValue;
  }
})();
