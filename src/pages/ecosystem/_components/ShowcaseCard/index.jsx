import React from "react";
import clsx from "clsx";

import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import {sortBy} from "@site/src/tableData/tableData";
import Tooltip from "@site/src/pages/ecosystem/_components/ShowcaseTooltip";
import FavoriteIcon from "@site/src/components/svgIcons/FavoriteIcon";
import {TagList, Tags} from "@site/src/tableData/tags";
import CustomMarkdown from "@site/src/components/MarkdownToJsx/CustomMarkdown";

const TagComp = React.forwardRef(({label, color, description}, ref) => (
  <li ref={ref} className={styles.tag} title={description}>
    <span className={styles.textLabel}>{label.slice(0, 1).toUpperCase() + label.slice(1)}</span>
    <span className={styles.colorLabel} style={{backgroundColor: color}} />
  </li>
));

function ShowcaseCardTag({tags}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));
  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag)
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}
          >
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function getCardImage(item) {
  return item.image || "/img/favicon.png";
}

function ShowcaseCard({item}) {
  const image = getCardImage(item);
  return (
    <li key={item.title} className="card shadow--md">
      <div className={clsx(
        "card__image"
      )}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: "10px",
      }}
      >
        <img
          style={{
            height: "90px",
          }}
          src={image}
          alt={item.title}
        />
      </div>
      <div className="card__body"
        style={{
          paddingTop: "0px",
        }}
      >
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            {item.title && <CustomMarkdown>{item.title}</CustomMarkdown>}
          </Heading>
          {item.tags.includes("favorite") && (
            <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
          )}

          {item.author && (
            <div
              className={clsx(
                "button button--secondary button--sm",
                "styles.showcaseCardSrcBtn"
              )}
            >
              <CustomMarkdown>{item.author}</CustomMarkdown>
            </div>
          )}
        </div>
        {item.description && (
          <p className={styles.showcaseCardBody}>
            <CustomMarkdown>{item.description}</CustomMarkdown>
          </p>
        )}
      </div>
      <ul className={clsx("card__footer", styles.cardFooter)}>
        <ShowcaseCardTag tags={item.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
