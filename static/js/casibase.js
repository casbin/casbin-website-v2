(function(w, d, s, c, i) {
  const script = d.createElement(s);
  script.async = false;
  script.src = "https://tcdn.casibase.org/casibase.js";

  // Check if popup should be displayed
  function shouldShowPopup() {
    const visited = localStorage.getItem("casibase_visited");
    const closedTime = localStorage.getItem("casibase_closed");

    if (visited) {
      if (closedTime) {
        const hoursSinceClose = (Date.now() - closedTime) / (1000 * 60 * 60);
        if (hoursSinceClose < 24) {return false;} // Less than 24 hours since close
      }
      return false; // Already visited
    }

    // First visit, show popup
    localStorage.setItem("casibase_visited", "true");
    return true;
  }

  script.onload = function() {
    if (shouldShowPopup()) {
      w[c]("init", {
        endpoint: "https://ai.casbin.com",
        themeColor: "rgb(64,59,121)",
        popupTime: 5,
        onClose: () => localStorage.setItem("casibase_closed", Date.now()),
      });
    }
  };

  const firstScript = d.getElementsByTagName(s)[0];
  firstScript.parentNode.insertBefore(script, firstScript);
  w[c] = w[c] || function() {(w[c].q = w[c].q || []).push(arguments);};
})(window, document, "script", "casibaseChat");