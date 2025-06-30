(function(w, d, s, c, i) {
  // 读写关闭时间戳，localStorage 不可用时用 cookie 兜底
  function setPopupClosedTime(ts) {
    try {
      localStorage.setItem("casibaseChatClosedTime", ts);
    } catch (e) {
      document.cookie = "casibaseChatClosedTime=" + ts + ";max-age=86400;path=/";
    }
  }
  // 获取上次关闭的时间戳，localStorage不可用时用 cookie 兜底
  function getPopupClosedTime() {
    try {
      return localStorage.getItem("casibaseChatClosedTime");
    } catch (e) {
      let match = document.cookie.match(/(?:^|; )casibaseChatClosedTime=(\d+)/);
      return match ? match[1] : null;
    }
  }

  // 默认不弹出聊天窗口
  let chatClosed = false;
  let lastClosed = 0;
  // 获取上次关闭弹窗的时间戳，支持 localStorage 和 cookie
  lastClosed = parseInt(getPopupClosedTime(), 10) || 0;
  const now = Date.now();
  // 如果上次关闭时间在24h内，则不自动弹出聊天窗口
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
      // 24小时内只弹一次，chatClosed为true时不自动弹出
      popupTime: chatClosed ? -1 : 5,
      onClose: function() {
        // 关闭时记录当前时间戳，24小时内不再弹出
        setPopupClosedTime(Date.now().toString());
      },
    });

    // 兼容远程脚本不支持 onClose 的情况，监听 DOM 变化
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (
          mutation.type === "attributes" &&
          mutation.target.classList.contains("chat-container")
        ) {
          // 关闭弹窗时记录时间戳
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