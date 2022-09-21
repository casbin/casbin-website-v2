import React from "react";
import {useEffect, useState} from "react";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";

export default function CustomNavbarItem(props) {
  const [link, setLink] = useState("");
  useEffect(() => {
    if(localStorage.getItem("mainland") === "true") {
      setLink(props.cn); // the link for china mainland users
    }else{
      setLink(props.int); // for international users
    }
  }, []);
  return (
    <NavbarNavLink
      href={link}
      {...props}
    />
  );
}
