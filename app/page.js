import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero.png"
            alt="Star Wars themed background"
            fill
            style={{ objectFit: "cover" }}
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>May the Force of Maintenance Be With Your Ride</h1>
          <a href="/booking" className={styles.ctaHero}>
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            {/* Gear Icon */}
            <span className={styles.serviceIcon}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#7ecbff"
                  strokeWidth="2"
                />
                <path
                  stroke="#7ecbff"
                  strokeWidth="2"
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"
                />
              </svg>
            </span>
            <h3>General Maintenance</h3>
            <p>
              Comprehensive check-ups and repairs to keep your vehicle in top
              condition.
            </p>
          </div>
          <div className={styles.serviceCard}>
            {/* Oil Drop Icon */}
            <span className={styles.serviceIcon}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#7ecbff"
                  strokeWidth="2"
                  d="M12 3C12 3 7 9.5 7 14a5 5 0 0 0 10 0c0-4.5-5-11-5-11z"
                />
              </svg>
            </span>
            <h3>Oil Change</h3>
            <p>
              Quick and efficient oil changes using high-quality products.
            </p>
          </div>
          <div className={styles.serviceCard}>
            {/* Tire Icon */}
            <span className={styles.serviceIcon}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="#7ecbff"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#7ecbff"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h3>Tire Replacement/Repair</h3>
            <p>
              Expert tire services, including replacements and repairs for all
              vehicle types.
            </p>
          </div>
          <div className={styles.serviceCard}>
            {/* Window Icon */}
            <span className={styles.serviceIcon}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#7ecbff"
                  strokeWidth="2"
                />
                <path stroke="#7ecbff" strokeWidth="2" d="M3 9h18" />
              </svg>
            </span>
            <h3>Window Replacement</h3>
            <p>
              Professional window services ensuring safety and clarity.
            </p>
          </div>
          <div className={styles.serviceCard}>
            {/* Shield/Check Icon */}
            <span className={styles.serviceIcon}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#7ecbff"
                  strokeWidth="2"
                  d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"
                />
                <path
                  stroke="#7ecbff"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </span>
            <h3>Car Safety Inspection</h3>
            <p>
              Thorough safety inspections to ensure your vehicle meets all safety
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>
          Lube Skywalker Mechanic Shop Ltd has been a trusted name in the
          community for many years, providing top-notch automotive services with a
          commitment to quality and customer satisfaction. Our team of skilled
          mechanics is dedicated to ensuring your vehicle receives the best care
          possible.
        </p>
      </section>

      <Footer />
    </div>
  );
}