import React from "react";
import clsx from "clsx";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import {useEffect, useState} from "react";

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}) {
  const element = (
    <NavbarNavLink
      className={clsx(
        isDropdownItem ? "dropdown__link" : "navbar__item navbar__link",
        className
      )}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );
  if (isDropdownItem) {
    return <li>{element}</li>;
  }
  return element;
}
function DefaultNavbarItemMobile({className, isDropdownItem, ...props}) {
  return (
    <li className="menu__list-item">
      <NavbarNavLink className={clsx("menu__link", className)} {...props} />
    </li>
  );
}
export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  const [mainland, setMainland] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mainland") === "true") {
      setMainland(true);
    }
  }, []);
  if (mainland) {
    return (
      <>
        <Comp
          href="https://shang.qq.com/wpa/qunwpa?idkey=8ac8b91fc97ace3d383d0035f7aa06f7d670fd8e8d4837347354a31c18fac885"
          className="header-community-qq"
          {...props}
          activeClassName={
            props.activeClassName ??
            (mobile ? "menu__link--active" : "navbar__link--active")
          }
        />
        <Comp
          href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg"
          target="_blank"
          className="header-community-wechat"
          {...props}
          activeClassName={
            props.activeClassName ??
            (mobile ? "menu__link--active" : "navbar__link--active")
          }
        />
      </>
    );
  } else {
    return (
      <Comp
        href="https://discord.gg/S5UjpzGZjN"
        className="header-community-discord"
        {...props}
        activeClassName={
          props.activeClassName ??
          (mobile ? "menu__link--active" : "navbar__link--active")
        }
      />
    );
  }

}
