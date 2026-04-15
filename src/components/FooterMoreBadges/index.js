import React from "react";
import styles from "./styles.module.css";
import githubBadges from "./badges.json";
import starsData from "./stars.json";

const GITHUB_BADGES = githubBadges;
const STAR_COUNTS = starsData.stars ?? {};
const STAR_FORMATTER = new Intl.NumberFormat("en-US", {
  notation: "compact",
  compactDisplay: "short",
  maximumFractionDigits: 1,
});

function getRepoKey(owner, repo) {
  return `${owner}/${repo}`;
}

function formatStars(count) {
  return STAR_FORMATTER.format(count).replace(/\.0(?=[A-Za-z])/u, "").toLowerCase();
}

function BadgeLink({href, ariaLabel, children}) {
  return (
    <a
      className={`footer__link-item ${styles.badgeLink}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function GitHubStarBadge({label, stars}) {
  const safeStars = Number.isFinite(stars) ? stars : 0;
  const formattedStars = formatStars(safeStars);

  return (
    <span className={styles.badgeSurface} aria-hidden="true">
      <span className={styles.badgeLabelSection}>
        <img className={styles.badgeIcon} src="/img/footer/github.svg" alt="" />
        <span className={styles.badgeText}>{label}</span>
      </span>
      <span className={styles.badgeDivider} />
      <span className={styles.badgeCountSection}>{formattedStars}</span>
    </span>
  );
}

function XFollowBadge() {
  return (
    <span className={`${styles.badgeSurface} ${styles.followBadge}`} aria-hidden="true">
      <img className={styles.badgeIcon} src="/img/footer/x.svg" alt="" />
      <span className={styles.badgeText}>Follow @casbinHQ</span>
    </span>
  );
}

function GitHubBadgeLink({badge, stars}) {
  const {label, href} = badge;

  return (
    <BadgeLink href={href} ariaLabel={`${label} GitHub repository`}>
      <GitHubStarBadge label={label} stars={stars} />
    </BadgeLink>
  );
}

function XBadgeLink() {
  return (
    <BadgeLink href="https://twitter.com/casbinHQ" ariaLabel="Follow @casbinHQ on X">
      <XFollowBadge />
    </BadgeLink>
  );
}

export default function FooterMoreBadges() {
  return (
    <div className={styles.badgesGrid}>
      {GITHUB_BADGES.map((badge) => {
        const repoKey = getRepoKey(badge.owner, badge.repo);

        return <GitHubBadgeLink key={repoKey} badge={badge} stars={STAR_COUNTS[repoKey]} />;
      })}
      <XBadgeLink />
    </div>
  );
}
