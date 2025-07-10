(function (window, document, scriptTag, casibaseKey) {
  'use strict'; 

  const script = document.createElement(scriptTag);
  script.async = false;
  script.src = 'https://tcdn.casibase.org/casibase.js';


  function shouldShowPopup() {
    const lastVisitTime = localStorage.getItem('casibase_visited');
    if (lastVisitTime) {
      const timeDiff = Date.now() - parseInt(lastVisitTime, 10);
      if (timeDiff < 24 * 60 * 60 * 1000) {
        return false;
      }
    }
    localStorage.setItem('casibase_visited', Date.now().toString());
    return true;
  }

  script.onload = function () {
    if (!shouldShowPopup()) {
      return; 
    }

    window[casibaseKey]('init', {
      endpoint: 'https://ai.casbin.com',
      themeColor: 'rgb(64, 59, 121)', 
      popupTime: 5,
      onClose: () => {
        localStorage.setItem('casibase_visited', Date.now().toString());
      }
    });
  };

  const firstScript = document.getElementsByTagName(scriptTag)[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  if (typeof window[casibaseKey] !== 'function') {
    window[casibaseKey] = function (...args) { 
      (window[casibaseKey].q = window[casibaseKey].q || []).push(args);
    };
  }
})(window, document, 'script', 'casibaseChat');