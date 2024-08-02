export const chatButton = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#403B79",
  color: "white",
  border: "none",
  borderRadius: "50px",
  padding: "10px 20px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "all 0.3s ease",
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
};

export const chatIframeContainer = {
  position: "fixed",
  bottom: "80px",
  right: "20px",
  width: "min(400px, calc(100vw - 40px))",
  height: "min(600px, calc(100vh - 100px))",
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 1001,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

export const chatIframe = {
  flexGrow: 1,
  border: "none",
  width: "100%",
  height: "100%",
};
