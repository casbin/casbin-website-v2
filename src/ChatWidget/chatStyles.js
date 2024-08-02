export const chatButton = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#403B79",
  color: "white",
  border: "none",
  borderRadius: "50px",
  padding: "10px 20px",
  cursor: "pointer",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

export const chatButtonHover = {
  backgroundColor: "#2E2A57",
  boxShadow: "0 6px 100px rgba(0, 0, 0, 0.5)",
};

export const chatButtonOpen = {
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  padding: 0,
  justifyContent: "center",
};

export const closeIcon = {
  fontSize: "50px",
  fontWeight: "100",
  lineHeight: 1,
  transition: "transform 0.3s ease",
};

export const chatIframeContainer = {
  position: "fixed",
  bottom: "80px",
  right: "20px",
  width: "min(500px, calc(100vw - 40px))",
  height: "min(600px, calc(100vh - 100px))",
  borderRadius: "10px",
  zIndex: 1001,
  flexDirection: "column",
  overflow: "hidden",
  transition: "all 0.3s ease",
  transform: "translateY(30px)",
  opacity: 1,
  boxShadow: "0 5px 60px rgba(0, 0, 0, 0.6)",
};

export const chatIframeContainerOpen = {
  transform: "translateY(0)",
  opacity: 1,
};

export const chatIframe = {
  width: "100%",
  height: "100%",
  marginLeft: "-5px",
};
