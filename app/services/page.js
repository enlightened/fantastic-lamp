import Header from "../Header";
import Footer from "../Footer";
import styles from "./page.module.css";


const SERVICES = [
  {
    title: "Safety Inspection",
    description:
      "Ensure your vehicle meets all safety standards with our comprehensive inspection, covering all critical components.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5ovVYhU807XIDssnSY30CA4aPHbwDmp-8xOPJqZ4hq5TWJBhclScpFCTh_oU8Va4UID9Q4Y1IQR6htOoRRLSXQHICvbynidCqmFoqlaDbtErh4WgJCqvG-qVbdeNZYx-4BeCy3-OSRODZSncxYqdOU3c4s2J8NGKiei08_gNxSFBHMtx3mfMk2fYu4wDTWHbwx9PkBXs1SkffYu0XbBuw_TrFWAbxIoZAdxUbYWAq4CCUnDwutPKReZHMV4cmf9mmFVdgL0TQ2etO",
  },
  {
    title: "Engine Diagnostics",
    description:
      "Utilizing advanced diagnostic tools, we accurately identify and resolve engine issues, ensuring optimal performance and longevity.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXwGnX7PAvcb2jReDkq2ZXLfFn1pJ02-GISph_y3VOczdE0oDNJ3g_eI3WcfpyzJFue7_7xRB80ij19gN7vcI37cP2sADnFzvD7NAcnuDu8l7XbeqnqSXbaD-YfOH-T2fJHcy628IcpGfq6GwJHFE-AzkIOzLaJAtUAJ0WGwTosvEd8F-6IgDBS4NSrk9f0djOi5Z70EtQA0AvVtX8QLs-8RkCHDVkiv9eVvXAN5By19IR4BHYVxiFLSrY0Ef1VFM0tsaMTfCZHvXb",
  },
  {
    title: "Window Replacement",
    description:
      "Ensure clear visibility and structural integrity with our professional glass replacement service, using high-quality materials and expert installation.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWhYzHVqGVaEFEyT2oQu7k6tKL-SzWd0zVwOE-YMgSrymHhuVeXwnTweHGKKoTEIoAUn1nylEeQnrjKDWE1eCTnbRjDMOcvaxRBQADrLEvtpUec9zBx1NB7vYR1-mFqhHZED0tcvPojt4HOJ58_nZs56knxjBrL6GriGPF_TnLlRGEt2q7nA2AXlkeEAvlHWbFcrPNwJ5teITGFBh6w7tgBAMP8ICg7ds-mkFnpu_xzIy4WpMW3pwrkLf7li9-r_s-rgVrCPfo92Vp",
  },
  {
    title: "Routine Maintenance",
    description:
      "From oil changes to fluid checks, our comprehensive maintenance services keep your vehicle running smoothly and efficiently.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzO79Q-izMWcBHjt0gkOpi50q0TgACO1ZqjPuhip0ebnqoCFmoovg4shCNeRLf9-ktRHENOnuQ5kVBF6HScNYW5T8MBRiw2IsNkTMMa3GwW8O5T84thRQqodNWVOOWi-yi62MDSVru4T1eALHBsWTdnvNxdU6Toxwh4xgal9-K0jMAGQinwjDj24ehThr4kcN3axrZbsP_P9I0xY86npN5Z_jiVpsHtSnJ21Z24HJOUchfevWpubIVJkUtIvHJrDehEuTXs_HQ5qp7",
  },
  {
    title: "Oil Change",
    description:
      "Quick and professional oil changes to keep your engine running smoothly and extend its lifespan.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT9FdWtkzoWbc0GUQEkqfhaANaf2A0LWxlI2tgv6DW23OXllZA1sqFtjw_Zl-kCYted9e7d7KxfumfobOOWd1RCfcH_33YJfpoJ-bFDSA2geHiZx3gd1TCCyVIUrH795zkihNdoWINL-OOqjUtlat-cBIA7IYvPPPPCreQWCX5TYNNK3DsltzwBq6w3B0MzCSLpCMAUfEq6U_uCp7KZyJ1cDu_lS0MB5EW-lqIQyRCaJhXsW_TpMzLDjRrsNZ8c0-_MbX6xPLVOB7i",
  },
  {
    title:"Brake Services",
    description:"Our expert technicians provide thorough brake inspections, repairs, and replacements, ensuring your safety on the road.",
    imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuAvdRm7vTkXkZCY0L-mdkIdAcyhwL67OqxZIVrwYQ_PtSFmeBWfZHThl3Yd-QksWfcevtwa2j_bmQ2nCjtcFFxpEV5fiYyw3WTBBAbSnEgidrpMzuNlOFVAZmGqCToRD8nsDMcLZ60VtMEq6XOzAcZzA-pVJ7tSyAhp0z28t8x60h-nqHvxJs8ncrapO4aNnJE9lczwnx1pLq8N-mYUzbX2nyjUDeMqjhwQTHf9r2ZF-zkuNoh6ftZgosLCETDwf10y8-rPoF4eUTgc"
  },
  {
    title:"Tire Services",
    description:"We offer tire rotations, balancing, and replacements, ensuring optimal handling and safety for your vehicle.",
    imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuD5iG1PXzFwaeepxr0t_rbK8gZkyGJWJ-6UawEmIbRDmsDvs7lPhN72Vd9nTAekpKJ6VSkgajyE8KD7wDFc93EoH-GIBAZIfwLz9aQJdVtwqV5y9nBhKT3eahfZIhI9Fot3HbdXuH7SY6794r4dE5nqEa5TNlgcDAeZKhHx5AiMYOeH9WsDhRsg_jBZNiGTSobYL7xOhm6l91-RTtXpkrxIjwVDAOAEByspiWfbCY3N8aDqc92xE9D_9L-UUnxASnogwfeAKcsfFvab",
  },
  {
    title:"Air Conditioning Service",
    description:"Keep cool with our air conditioning service, including system checks, refrigerant refills, and repairs.",
    imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuBTWGRPWsWiSzyh5WdhA4z04LUz7UbEbDG0dakTsz8GWjpnq2zevmAWibu5j0THwVvRXFYOg5C8qaJgU5JvA_xIXWidBxa5218hO6f5g-Dthq9eTVpcfODV5gJtDIw6PUSb70GoXqHuOpxZDzM4E3jicL_sWJpcV5jiYJot3pzzIIkaxp5foZGT0sWJtd17sRxAMVy0hiRjBO0uetoSalbz7UQB54bano1OVWDGyTkwJ81AbVh6pXZU36Zz_EhCMFXLRCDiBwFKBxKX",
  },
  {
    title:"Audio System Installation",
    description:"Enhance your driving experience with our audio system upgrade service, featuring top-of-the-line components and expert installation.",
    imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuBLEbiEa_jUD9cqGXOvOyqYSPq2edkiSBFr16_r6hQt5nByx7eJh3-oUQHvdMT3T1w9s-6m8P2bTtVC_DfwqZkwtu9gD7EdTFblWvuQnlfBcKX3dmuydVXLf4dwkM8zOLma4Aq_L4rIxyY1snf9-BxEia6r2aclz1AjWYg7QgkzagynixekptPfQbsR4t7ak_UfefIjqAMUGSRhNVZcss1znNcPsxfYj5wghrG3eGfaXD5Ved_UCUnVznigmF8V1mouRQtvPytemdw9",
  },

];

export default function ServicesPage() {
  return (
		<div className={styles.page}>
			<Header />
            <div className={styles.servicesHeader}>
              <h1 className={styles.servicesTitle}>Our Services</h1>
              <p className={styles.servicesSubtitle}>
                Explore our range of services designed to keep your vehicle in top condition.
              </p>
            </div>
            <div className={styles.servicesList}>
                {SERVICES.map((service, idx) => (
                <div key={idx} className={styles.card}>
                    <img src={service.imageUrl} alt={service.title} className={styles.cardImage} />
                    <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{service.title}</h2>
                    <p className={styles.cardDescription}>{service.description}</p>
                    <a href="/booking" className={styles.bookButton}>
                        Book Appointment
                    </a>
                    </div>
                </div>
                ))}
            </div>
			<Footer />
		</div>
	);
}