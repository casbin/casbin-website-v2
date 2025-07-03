(function(w, d, s, c, i) {
  // Set the close timestamp, fallback to cookie if localStorage is unavailable
  function setPopupClosedTime(ts) {
    try {
      localStorage.setItem("casibaseChatClosedTime", ts);
    } catch (e) {
      document.cookie = "casibaseChatClosedTime=" + ts + ";max-age=86400;path=/";
    }
  }
  // Get the last close timestamp, fallback to cookie if localStorage is unavailable
  function getPopupClosedTime() {
    try {
      const v = localStorage.getItem("casibaseChatClosedTime");
      return v !== null ? v : "0";
    } catch (e) {
      const match = document.cookie.match(/(?:^|; )casibaseChatClosedTime=(\d+)/);
      return match ? match[1] : "0";
    }
  }

  // By default, do not show the chat window
  let chatClosed = false;
  let lastClosed = 0;
  // Get the last closed timestamp, support both localStorage and cookie
  lastClosed = parseInt(getPopupClosedTime(), 10) || 0;
  const now = Date.now();
  // If the last close time is within 24 hours, do not auto popup chat window
  if (now - lastClosed < 86400000) {
    chatClosed = true;
  }

  const j = d.createElement(s);
  j.async = false;
  j.src = "https://tcdn.casibase.org/casibase.js";
  j.onload = function() {
    w[c]("init", {
      endpoint: "https://ai.casbin.com",
      themeColor: "rgb(64,59,121)",
      // Only popup once in 24 hours, if chatClosed is true do not auto popup
      popupTime: chatClosed ? -1 : 5,
      onClose: function() {
        // Record current timestamp when closed, do not popup again within 24 hours
        setPopupClosedTime(Date.now().toString());
      },
    });

    // For remote scripts that do not support onClose, listen to DOM changes
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (
          mutation.type === "attributes" &&
          mutation.target.classList.contains("chat-container")
        ) {
          // Record timestamp when chat window is closed
          if (!mutation.target.classList.contains("open") && mutation.oldValue && mutation.oldValue.includes("open")) {
            setPopupClosedTime(Date.now().toString());
          }
        }
      });
    });
    setTimeout(function() {
      const chat = document.querySelector(".chat-container");
      if (chat) {
        observer.observe(chat, {attributes: true, attributeOldValue: true, attributeFilter: ["class"]});
      }
    }, 2000);
  };
  const f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(j, f);
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
})(window, document, "script", "casibaseChat");
