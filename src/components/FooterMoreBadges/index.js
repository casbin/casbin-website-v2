import React, {useId} from "react";
import styles from "./styles.module.css";
import githubBadges from "./badges.json";
import starsData from "./stars.json";

const STAR_FORMATTER = new Intl.NumberFormat("en-US", {
  notation: "compact",
  compactDisplay: "short",
  maximumFractionDigits: 1,
});

const GITHUB_BADGES = githubBadges;
const STAR_COUNTS = starsData.stars ?? {};

// github SVG path
const GITHUB_ICON_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
// X SVG path
const X_ICON_PATH =
  "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.186z";

function getRepoKey(owner, repo) {
  return `${owner}/${repo}`;
}

function formatStars(count) {
  return STAR_FORMATTER.format(count).replace(/\.0(?=[A-Za-z])/u, "").toLowerCase();
}

function getCountWidth(value) {
  return Math.max(27, 12 + value.length * 4);
}

function GitHubStarBadge({label, labelWidth, stars}) {
  const badgeId = useId().replace(/:/gu, "");
  const gradientId = `footer-badge-gradient-${badgeId}`;
  const safeStars = Number.isFinite(stars) ? stars : 0;
  const formattedStars = formatStars(safeStars);
  const countWidth = getCountWidth(formattedStars);
  const badgeWidth = labelWidth + countWidth + 7;
  const labelCenterX = labelWidth / 2 + 8.5;
  const countCenterX = labelWidth + 6 + countWidth / 2;

  return (
    <svg
      className={styles.badgeSvg}
      width={badgeWidth}
      height="20"
      viewBox={`0 0 ${badgeWidth} 20`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x2="0" y2="100%">
          <stop offset="0" stopColor="#fcfcfc" stopOpacity="0" />
          <stop offset="1" stopOpacity=".1" />
        </linearGradient>
      </defs>
      <g stroke="#d5d5d5">
        <rect stroke="none" fill="#fcfcfc" x=".5" y=".5" width={labelWidth} height="19" rx="2" />
        <rect x={labelWidth + 6.5} y=".5" width={countWidth} height="19" rx="2" fill="#fafafa" />
        <rect x={labelWidth + 6} y="7.5" width=".5" height="5" stroke="#fafafa" />
        <path d={`M${labelWidth + 6.5} 6.5l-3 3v1l3 3`} fill="#fafafa" />
      </g>
      <g transform="translate(5 3) scale(0.5833333333)" fill="#181717">
        <path d={GITHUB_ICON_PATH} />
      </g>
      <g
        fill="#333"
        textAnchor="middle"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="11"
      >
        <text x={labelCenterX} y="15" fill="#fff">
          {label}
        </text>
        <text x={labelCenterX} y="14">
          {label}
        </text>
        <text x={countCenterX} y="15" fill="#fff">
          {formattedStars}
        </text>
        <text x={countCenterX} y="14">
          {formattedStars}
        </text>
      </g>
      <rect x=".5" y=".5" width={labelWidth} height="19" rx="2" fill={`url(#${gradientId})`} />
    </svg>
  );
}

function XFollowBadge() {
  const badgeId = useId().replace(/:/gu, "");
  const gradientId = `footer-badge-x-gradient-${badgeId}`;

  return (
    <svg
      className={styles.badgeSvg}
      width="125"
      height="20"
      viewBox="0 0 125 20"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x2="0" y2="100%">
          <stop offset="0" stopColor="#fcfcfc" stopOpacity="0" />
          <stop offset="1" stopOpacity=".1" />
        </linearGradient>
      </defs>
      <g stroke="#d5d5d5">
        <rect stroke="none" fill="#fcfcfc" x=".5" y=".5" width="124" height="19" rx="2" />
      </g>
      <g transform="translate(5 3) scale(0.5833333333)" fill="#000">
        <path d={X_ICON_PATH} />
      </g>
      <g
        fill="#333"
        textAnchor="middle"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="11"
      >
        <text x="70.5" y="15" fill="#fff">
          Follow @casbinHQ
        </text>
        <text x="70.5" y="14">
          Follow @casbinHQ
        </text>
      </g>
      <rect x=".5" y=".5" width="124" height="19" rx="2" fill={`url(#${gradientId})`} />
    </svg>
  );
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

function GitHubBadgeLink({badge, stars}) {
  const {label, href, labelWidth} = badge;

  return (
    <BadgeLink href={href} ariaLabel={`${label} GitHub repository`}>
      <GitHubStarBadge label={label} labelWidth={labelWidth} stars={stars} />
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
