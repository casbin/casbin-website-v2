(function(w, d, s, c, i) {
  const script = d.createElement(s);
  script.async = false;
  script.src = "https://tcdn.casibase.org/casibase.js";

  // Determine whether to show the popup: first visit or more than 24 hours since last visit
  function shouldShowPopup() {
    const lastVisitTime = localStorage.getItem("casibase_visited");
    
    // If visited before, check if within 24 hours
    if (lastVisitTime && Date.now() - lastVisitTime < 24 * 60 * 60 * 1000) {
      return false;
    }
    
    // First visit or more than 24 hours have passed, update visit time and show popup
    localStorage.setItem("casibase_visited", Date.now());
    return true;
  }

  script.onload = function() {
    // Reverse conditional check to reduce indentation
    if (!shouldShowPopup()) return;

    // Initialize popup component
    w[c]("init", {
      endpoint: "https://ai.casbin.com",
      themeColor: "rgb(64,59,121)",
      popupTime: 5,
      onClose: () => localStorage.setItem("casibase_visited", Date.now())
    });
  };

  // Insert script into document
  const f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(script, f);
  
  // Initialize global function
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || [])?.push(arguments);
  };
})(window, document, "script", "casibaseChat");