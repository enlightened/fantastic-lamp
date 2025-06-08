"use client";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "../../Header";
import Footer from "../../Footer";
import styles from "./page.module.css";

function ConfirmedContent() {
  const params = useSearchParams();
  const router = useRouter();

  const service = params.get("service") || "—";
  const date = params.get("date") || "—";
  const time = params.get("time") || "—";

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Booking Confirmed</h1>
      <div className={styles.heroImgWrap}>
        {/* Animated Checkmark */}
        <svg
          className={styles.animatedCheck}
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle
            className={styles.checkCircle}
            cx="60"
            cy="60"
            r="54"
            stroke="#7ecbff"
            strokeWidth="6"
            fill="#232b3a"
          />
          <path
            className={styles.checkMark}
            d="M38 64l16 16 28-36"
            stroke="#7ecbff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      <div className={styles.confirmText}>
        Your appointment has been successfully booked! May the Force be with your vehicle.
      </div>
      <hr className={styles.hr} />
      <section className={styles.detailsSection}>
        <h2 className={styles.detailsHeading}>Appointment Details</h2>
        <div className={styles.detailsCard}>
          <div className={styles.label}>
            {/* Service Icon */}
            <svg fill="none" stroke="#7ecbff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            Service:
          </div>
          <div className={styles.value}>{service}</div>
          <div className={styles.label}>
            {/* Calendar Icon */}
            <svg fill="none" stroke="#7ecbff" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Date:
          </div>
          <div className={styles.value}>{date}</div>
          <div className={styles.label}>
            {/* Clock Icon */}
            <svg fill="none" stroke="#7ecbff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Time:
          </div>
          <div className={styles.value}>{time}</div>
        </div>
      </section>
      <div className={styles.actions}>
        <button
          className={styles.secondaryBtn}
          type="button"
          onClick={() => alert("Feature coming soon!")}
        >
          View/Manage Booking
        </button>
        <button
          className={styles.primaryBtn}
          type="button"
          onClick={() => router.push("/")}
        >
          Return to Homepage
        </button>
      </div>
    </main>
  );
}

export default function BookingConfirmed() {
  return (
    <div className={styles.page}>
      <Header />
      <Suspense fallback={<div className={styles.main}>Loading...</div>}>
        <ConfirmedContent />
      </Suspense>
      <Footer />
    </div>
  );
}