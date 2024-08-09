(function(w, d, s, c, i) {
  const j = d.createElement(s);
  j.async = false;
  j.src = "https://tcdn.casibase.org/casibase.js";
  j.onload = function() {
    w[c]("init", {
      endpoint: "https://ai.casbin.com",
      themeColor: "rgb(64,59,121)",
      popupTime: 5,
    });
  };
  const f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(j, f);
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
})(window, document, "script", "casibaseChat");
