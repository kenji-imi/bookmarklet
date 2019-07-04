// Qiita

(function() {
  var a = document.getElementsByClassName("p-items_options");
  if (0 < a.length) {
    a[0].style.display = "none";
  }
  var b = document.getElementsByClassName("p-items_stickyMenu it-Actions");
  if (0 < b.length) {
    b[0].style.display = "none";
  }
  var c = document.getElementsByClassName("p-items_toc");
  if (0 < c.length) {
    c[0].style.display = "none";
  }
  var d = document.getElementsByClassName("p-items_main");
  if (0 < d.length) {
    d[0].style.width = "100%";
  }
  var e = document.getElementsByClassName("p-items_article");
  if (0 < e.length) {
    e[0].style.width = "100%";
  }
  var f = document.getElementsByClassName("p-items_main");
  if (0 < f.length) {
    f[0].style.gridColumn = "2/4";
    f[0].style.maxWidth = "none";
  }
})();
