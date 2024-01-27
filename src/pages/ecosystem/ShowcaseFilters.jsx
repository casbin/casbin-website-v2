import {useFilteredUsers} from "@site/src/pages/ecosystem/useFilteredUsers";
import {useSiteCountPlural} from "@site/src/pages/ecosystem/useSiteCountPlural";
import clsx from "clsx";
import styles from "@site/src/pages/ecosystem/styles.module.css";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import ShowcaseFilterToggle from "@site/src/pages/ecosystem/_components/ShowcaseFilterToggle";
import ShowcaseTooltip from "@site/src/pages/ecosystem/_components/ShowcaseTooltip";
import ShowcaseTagSelect from "@site/src/pages/ecosystem/_components/ShowcaseTagSelect";
import FavoriteIcon from "@site/src/components/svgIcons/FavoriteIcon";
import React from "react";
import {TagList, Tags} from "@site/src/data/tags";

export default function ShowcaseFilters() {
  const filteredUsers = useFilteredUsers();
  const siteCountPlural = useSiteCountPlural();
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <div className={clsx("margin-bottom--sm", styles.filterCheckbox)}>
        <div>
          <Heading as="h2">
            <Translate id="showcase.filters.title">Filters</Translate>
          </Heading>
          <span>{siteCountPlural(filteredUsers.length)}</span>
        </div>
        <ShowcaseFilterToggle />
      </div>
      <ul className={clsx("clean-list", styles.checkboxList)}>
        {TagList.map((tag, i) => {
          const {label, description, color} = Tags[tag];
          const id = `showcase_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <ShowcaseTooltip
                id={id}
                text={description}
                anchorEl="#__docusaurus"
              >
                <ShowcaseTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    tag === "favorite" ? (
                      <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
              </ShowcaseTooltip>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
