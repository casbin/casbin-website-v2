(function(w, d, s, c) { 
  const script = d.createElement(s); 
  script.async = false;
  script.src = "https://tcdn.casibase.org/casibase.js";


  function shouldShowPopup() {
    const lastVisitTime = localStorage.getItem("casibase_visited");
    if (lastVisitTime && Date.now() - lastVisitTime < 24 * 60 * 60 * 1000) {
      return false;
    }
    localStorage.setItem("casibase_visited", Date.now());
    return true;
  }

  script.onload = function() {
    if (!shouldShowPopup()) return; 

    w[c]("init", {
      endpoint: "https://ai.casbin.com",
      themeColor: "rgb(64,59,121)",
      popupTime: 5,
      onClose: () => localStorage.setItem("casibase_visited", Date.now()) 
    });
  };

  const firstScript = d.getElementsByTagName(s)[0]; 
  firstScript.parentNode.insertBefore(script, firstScript);


  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
})(window, document, "script", "casibaseChat"); 