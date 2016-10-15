var domSelector = function(selectors) {
  'use strict';

  var classMatch = /^\.([a-zA-Z\-\_]+)$/;
  var tagMatch = /^([a-zA-Z\-\_]+)$/;
  var idMatch = /^\#([a-zA-Z\-\_]+)$/;

  return makeArray(find(selectors));

  function find(selector){
    if(classMatch.test(selector)){
      return document.getElementsByClassName(classMatch.exec(selector)[1]);
    }else if(tagMatch.test(selector)){
      return document.getElementsByTagName(tagMatch.exec(selector)[1]);
    }else if(idMatch.test(selector)){
      return [document.getElementById(idMatch.exec(selector)[1])];
    }else{
      throw new Error('Invalid selector');
    }
  }
  function makeArray(collection){
    var result = [];
    for (var i = collection.length - 1; i >= 0; i--) {
      result.push(collection[i]);
    }
    return result;
  }
};
