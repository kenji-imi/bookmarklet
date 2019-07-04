// 本文抽出

(function() {
  var _d = document;
  var array = _d.getElementsByClassName("content");
  if (!array) return;
  _d.body.innerHTML = array[0].innerHTML;
  _d.body.removeAttribute("onmousedown");
  _d.body.removeAttribute("onselectstart");
  _d.body.removeAttribute("oncontextmenu");
  var c_array = _d.getElementsByTagName("center");
  for (var i = 0; i < c_array.length; i++) {
    c_array[i].innerHTML = "";
  }
  var a_array = _d.getElementsByTagName("a");
  for (var i = 0; i < a_array.length; i++) {
    a_array[i].innerHTML = "";
  }
  _d.close();
})();
