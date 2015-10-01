window.sameHeights = (function() {

  var sameHeightElements = [], timeout = null;

  var whichElements = function() {
    for (var i = 0; i < sameHeightElements.length; i++){
      sameHeights(sameHeightElements[i]);
    }
  };

  var sameHeights = function (el) {

    var nodeList = document.getElementsByClassName(el);
    var elems = [].slice.call(nodeList);

    var tallest = Math.max.apply(Math, elems.map(function(elem, index) {
      elem.style.minHeight = ''; // clean first
      return elem.offsetHeight;
    }));

    elems.forEach(function(elem, index, arr){
      elem.style.minHeight = tallest + 'px';
    });

  };

  var refresh = function() {
    requestAnimationFrame(whichElements);
  	clearTimeout(timeout);
  	timeout = setTimeout( refresh, 100);
    resized = false;
  };

  // Add functions to sameHeightElements array
  var addItems = function(el) {

    sameHeightElements.push(el);

  };

  var resize = function() {
    resized = true;
    return resized;
  };

  // Polyfill for RequestAnimationFrame by Paul Irish
  // https://gist.github.com/paulirish/1579671
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x ) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }


  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
  }

  // Init
  var init = function() {

    whichElements();
    return this;

  };

  // Provide some public methods for access outside the module
  return {
    init: init,
    resize: resize,
    refresh: refresh,
    addItems: addItems
  };

})();

if (document.readyState != 'loading'){
  sameHeights.init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', sameHeights.init);
} else {
  document.attachEvent('onreadystatechange', function() {
    if (document.readyState != 'loading')
    sameHeights.init();
  });
}

if (window.addEventListener) {
  window.addEventListener('onresize', sameHeights.resize);
} else {
  window.attachEvent('onresize', function() {
    sameHeights.resize.call(window);
  });
}

sameHeights.refresh();
