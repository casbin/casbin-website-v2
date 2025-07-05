(function(w, d, s, c, i) {
  const j = d.createElement(s);
  j.async = false;
  j.src = "https://tcdn.casibase.org/casibase.js";

  
  function shouldShowPopup() {
    const lastVisitTime = localStorage.getItem("casibase_visited");
   
    if (lastVisitTime && Date.now() - lastVisitTime < 24 * 60 * 60 * 1000) {
      return false;
    }
    
    localStorage.setItem("casibase_visited", Date.now());
    return true;
  }

  j.onload = function() {
   
    if (!shouldShowPopup()) return;

   
    w[c]("init", {
      endpoint: "https://ai.casbin.com",
      themeColor: "rgb(64,59,121)",
      popupTime: 5,
      onClose: () => localStorage.setItem("casibase_visited", Date.now())
    });
  };
  const f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(j, f);
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
})(window,document,"script","casibaseChat");