(function (window, document, scriptTag, casibaseKey) {
  'use strict';
  const script = document.createElement(scriptTag);
  script.async = false;
  script.src = 'https://tcdn.casibase.org/casibase.js';

  function shouldShowPopup() {
    const lastVisit = localStorage.getItem('casibase_visited');
    if (lastVisit && Date.now() - Number(lastVisit) < 86400000) return false;
    localStorage.setItem('casibase_visited', Date.now());
    return true;
  }

  script.onload = function () {
    if (!shouldShowPopup()) return;
    window[casibaseKey]('init', {
      endpoint: 'https://ai.casbin.com',
      themeColor: 'rgb(64, 59, 121)',
      popupTime: 5,
      onClose: () => localStorage.setItem('casibase_visited', Date.now())
    });
  };

  const firstScript = document.getElementsByTagName(scriptTag)[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);

  window[casibaseKey] = window[casibaseKey] || function (...args) {
    (window[casibaseKey].q = window[casibaseKey].q || []).push(args);
  };
})(window, document, 'script', 'casibaseChat');