import React from "react";
import clsx from "clsx";
import {ThemeClassNames} from "@docusaurus/theme-common";
import LinkItem from "@theme/Footer/LinkItem";
import FooterMoreBadges from "@site/src/components/FooterMoreBadges";

function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className={clsx("footer__item", item.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}

function CustomColumnItem({item}) {
  return item.html ? (
    <div
      className={item.className}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <div className="footer__item">
      <LinkItem item={item} />
    </div>
  );
}

function Column({column}) {
  const isFooterMoreColumn = column.className?.split(/\s+/u).includes("footer-more-column");

  return (
    <div
      className={clsx(
        ThemeClassNames.layout.footer.column,
        "col footer__col",
        column.className
      )}
    >
      <div className="footer__title">{column.title}</div>
      {isFooterMoreColumn ? (
        <>
          <FooterMoreBadges />
          {column.items.map((item, index) => (
            <CustomColumnItem key={index} item={item} />
          ))}
        </>
      ) : (
        <ul className="footer__items clean-list">
          {column.items.map((item, index) => (
            <ColumnLinkItem key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default function FooterLinksMultiColumn({columns}) {
  return (
    <div className="row footer__links">
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
}
