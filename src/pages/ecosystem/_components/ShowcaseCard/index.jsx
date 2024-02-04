import React from "react";
import clsx from "clsx";

import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import {sortBy} from "@site/src/tableData/tableData";
import Tooltip from "@site/src/pages/ecosystem/_components/ShowcaseTooltip";
import FavoriteIcon from "@site/src/components/svgIcons/FavoriteIcon";
import {TagList, Tags} from "@site/src/tableData/tags";
import CustomMarkdown, {isExternalLink} from "@site/src/components/MarkdownToJsx/CustomMarkdown";
import {useHistory} from "@docusaurus/router";

const TagComp = React.forwardRef(({label, color, description, tag}, ref) => {

  //   note to refactor it
  const history = useHistory();

  const handleQueryParamChange = () => {
    const queryParams = new URLSearchParams();
    queryParams.set("tags", tag);
    history.push({
      search: queryParams.toString(),
    });
  };

  return <li onClick={() => {
    handleQueryParamChange();
  }} ref={ref} className={styles.tag} title={description}>
    <span className={styles.textLabel}>{label.slice(0, 1).toUpperCase() + label.slice(1)}</span>
    <span className={styles.colorLabel} style={{backgroundColor: color}} />
  </li>;
}
);

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

function getTitleURL(title) {
  const regex = /\]\((.+?)\)/;
  const match = title.match(regex);
  let url = "";
  if(match) {
    url = match[1];
  }
  return url;
}

function ShowcaseCard({item}) {
  const image = getCardImage(item);
  const titleURL = getTitleURL(item.title);

  return (
    <li key={item.title} className="card shadow--md">
      <a className={clsx(
        "card__image"
      )}
      target={isExternalLink(titleURL) ? "_blank" : "_self"}
      href={titleURL}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: "10px",
      }} rel="noreferrer"
      >
        <img
          style={{
            height: "130px",
          }}
          src={image}
          alt={item.title}
        />
      </a>
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
