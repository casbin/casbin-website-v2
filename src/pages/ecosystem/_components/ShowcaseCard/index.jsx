/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";

import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import {sortBy} from "@site/src/utils/jsUtils";
import Tooltip from "@site/src/pages/ecosystem/_components/ShowcaseTooltip";
import FavoriteIcon from "@site/src/components/svgIcons/FavoriteIcon";
import Markdown from "markdown-to-jsx";
import {TagList, Tags} from "@site/src/data/tags";

const TagComp = React.forwardRef(({label, color, description}, ref) => (
  <li ref={ref} className={styles.tag} title={description}>
    <span className={styles.textLabel}>{label.toLowerCase()}</span>
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

function getCardImage(user) {
  return "http://localhost:3000/img/casbin.svg";
  // return (
  //   user.preview ??
  //   `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
  //     user.website
  //   )}/showcase`
  // );
}

function ShowcaseCard({user}) {
  const image = getCardImage(user);
  return (
    <li key={user.title} className="card shadow--md">
      <div className={clsx("card__image", styles.showcaseCardImage)}>
        <Image img={image} alt={user.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            {user.title && <Markdown>{user.title}</Markdown>}
          </Heading>
          {user.tags.includes("favorite") && (
            <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
          )}

          {user.author && (
            <div
              className={clsx(
                "button button--secondary button--sm",
                "styles.showcaseCardSrcBtn"
              )}
            >
              <Markdown>{user.author}</Markdown>
            </div>
          )}
        </div>
        {user.description && (
          <p className={styles.showcaseCardBody}>
            <Markdown>{user.description}</Markdown>
          </p>
        )}
      </div>
      <ul className={clsx("card__footer", styles.cardFooter)}>
        <ShowcaseCardTag tags={user.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
