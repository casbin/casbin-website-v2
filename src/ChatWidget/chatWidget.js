import React from "react";
import ReactDOM from "react-dom";
import ChatButton from "./ChatButton";

export function initChatWidget(targetElement) {
  if (typeof window !== "undefined" && targetElement) {
    const chatContainer = document.createElement("div");
    targetElement.appendChild(chatContainer);
    ReactDOM.render(<ChatButton />, chatContainer);
  }
}

export {ChatButton};
