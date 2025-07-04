(function(w, d, s, c) {
  const key = "casibaseChatClosedTime";
  const lastClosed = parseInt(localStorage.getItem(key) || "0", 10) || 0;
  const chatClosed = Date.now() - lastClosed < 86400000;

  const j = d.createElement(s);
  j.async = false;
  j.src = "https://tcdn.casibase.org/casibase.js";
  j.onload = function() {
    w[c]("init", {
      endpoint: "https://ai.casbin.com",
      themeColor: "rgb(64,59,121)",
      popupTime: chatClosed ? -1 : 5,
      onClose: function() {
        localStorage.setItem(key, Date.now().toString());
      },
    });
  };
  d.getElementsByTagName(s)[0].parentNode.insertBefore(j, d.getElementsByTagName(s)[0]);
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
})(window, document, "script", "casibaseChat");
