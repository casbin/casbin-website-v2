import React from "react";

export default function BenchMarkPreview(props) {
  return (
    <iframe
      src={props.src}
      width={props.width}
      height={props.height}
      style={{borderRadius: "20px"}}
    ></iframe>
  );
}

BenchMarkPreview.defaultProps = {
  src: "https://v1.casbin.org/casbin/benchmark-monitoring",
  width: "1000",
  height: "700",
};
