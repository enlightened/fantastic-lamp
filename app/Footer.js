import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerDivider} />
      <div className={styles.footerRow}>
        <div className={styles.footerColLeft}>
          <span className={styles.footerIcon} aria-hidden="true">
            {/* Map Pin Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="#7ecbff" strokeWidth="1.5" d="M12 21c-4.5-4.5-7-7.5-7-11A7 7 0 0 1 19 10c0 3.5-2.5 6.5-7 11z"/>
              <circle cx="12" cy="10" r="3" stroke="#7ecbff" strokeWidth="1.5"/>
            </svg>
          </span>
          7 Millenium Falcon Drive, Ottawa, ON, R2D 2D1
        </div>
        <div className={styles.footerColCenter}>
          <a href="tel:+18888738434" className={styles.footerLink}>
            <span className={styles.footerIcon} aria-hidden="true">
              {/* Phone Icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="#7ecbff" strokeWidth="1.5" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5V7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5.5zM14 17a7 7 0 0 1-7-7"/>
                <path stroke="#7ecbff" strokeWidth="1.5" d="M21 19v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"/>
              </svg>
            </span>
            +1 (888) USE-THE4
          </a>
        </div>
        <div className={styles.footerColRight}>
          <a href="mailto:luke@skywalker.shop" className={styles.footerLink}>
            <span className={styles.footerIcon} aria-hidden="true">
              {/* Envelope Icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="10" rx="2" stroke="#7ecbff" strokeWidth="1.5"/>
                <path stroke="#7ecbff" strokeWidth="1.5" d="M3 7l9 6 9-6"/>
              </svg>
            </span>
            luke@skywalker.shop
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        © 2024 Lube Skywalker Mechanic Shop Ltd
      </div>
    </footer>
  );
}