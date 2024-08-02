import React, {useState} from "react";
import {chatButton, chatButtonOpen, chatIframe, chatIframeContainer, closeIcon} from "./chatStyles";

function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <button
        style={{
          ...chatButton,
          ...(isChatOpen ? chatButtonOpen : {}),
          ...(isHovered ? {backgroundColor: "#2E2A57"} : {}),
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isChatOpen ? (
          <span style={closeIcon}>×</span>
        ) : (
          <>
            <svg style={{marginRight: "5px"}} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g transform="scale(-1, 1) translate(-1024, 0)">
                <path
                  d="M1002.7 448C1002.7 212.4 783 21.3 512 21.3S21.3 212.4 21.3 448c0 194.7 149.9 358.9 354.8 410.1-21.1 66.9-77.4 123.2-77.4 123.2s548.8-34.3 677.6-395c17.1-43.4 26.4-89.9 26.4-138.3z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            Chat with AI
          </>
        )}
      </button>
      {isChatOpen && (
        <div style={chatIframeContainer}>
          <iframe
            src="https://ai.casbin.com/?isRaw=1"
            title="Chat with AI"
            style={chatIframe}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ChatButton;
