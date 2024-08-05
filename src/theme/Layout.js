import React, {useEffect} from "react";
import Layout from "@theme-original/Layout";

function CustomLayout(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/casibase-tracker.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof window.initCasibaseChat === "function") {
        window.initCasibaseChat({
          endpoint: "https://ai.casbin.com",
          themeColor: "rgb(64,59,121)",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <Layout {...props} />;
}

export default CustomLayout;
