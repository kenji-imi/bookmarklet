(function() {
  var _d = document;
  var array = _d.body.getElementsByClassName("escaped");
  if (!array) return;
  for (var i = 0; i < array.length; i++) {
    _d.write(i + 1 + ". " + array[i].innerHTML + "<br/>");
  }
  _d.close();
})();
