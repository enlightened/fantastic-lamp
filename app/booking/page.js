"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./page.module.css";

const SERVICES = [
	{
		label: "General Maintenance",
		subtext: "Comprehensive check-up and maintenance for your vehicle.",
	},
	{
		label: "Oil Change",
		subtext: "Routine oil change service to keep your engine running smoothly.",
	},
	{
		label: "Tire Replacement/Repair",
		subtext: "Replacement or repair of tires for optimal performance and safety.",
	},
	{
		label: "Window Replacement",
		subtext: "Replacement of damaged or broken windows.",
	},
	{
		label: "Car Safety Inspection",
		subtext: "Thorough inspection to ensure your vehicle meets safety standards.",
	},
];

const TIMES = [
	"09:00 AM",
	"10:00 AM",
	"11:00 AM",
	"01:00 PM",
	"02:00 PM",
	"03:00 PM",
];

export default function BookingPage() {
	const [selectedService, setSelectedService] = useState(0); // General Maintenance default
	const [selectedDate, setSelectedDate] = useState("2024-07-20");
	const [selectedTime, setSelectedTime] = useState("");
	const router = useRouter();

	// Calendar logic for July 2024
	const daysInMonth = 31;
	const firstDay = new Date(2024, 6, 1).getDay(); // July is month 6 (0-indexed)
	const today = new Date();
	const isToday = (d) =>
		today.getFullYear() === 2024 &&
		today.getMonth() === 6 &&
		today.getDate() === d;

	function handleSubmit(e) {
		e.preventDefault();
		const params = new URLSearchParams({
			service: SERVICES[selectedService].label,
			date: selectedDate,
			time: selectedTime,
		}).toString();
		router.push(`/booking/confirmed?${params}`);
	}

	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.heading}>Book an Appointment</h1>
				<form onSubmit={handleSubmit}>
					{/* Step 1: Service */}
					<section className={styles.section}>
						<h2 className={styles.stepTitle}>1. Select a Service</h2>
						<div className={styles.radioCardList}>
							{SERVICES.map((service, idx) => (
								<label
									key={service.label}
									className={`${styles.radioCard} ${
										selectedService === idx ? styles.selected : ""
									}`}
								>
									<input
										type="radio"
										name="service"
										checked={selectedService === idx}
										onChange={() => setSelectedService(idx)}
										className={styles.radioInput}
									/>
									<span className={styles.radioCircle} />
									<span>
										<span className={styles.radioLabel}>{service.label}</span>
										<span className={styles.radioSubtext}>
											{service.subtext}
										</span>
									</span>
								</label>
							))}
						</div>
					</section>

					{/* Step 2: Date */}
					<section className={styles.section}>
						<h2 className={styles.stepTitle}>2. Select Date</h2>
						<div className={styles.calendar}>
							<div className={styles.calendarHeader}>
								<button className={styles.calendarNav} disabled>
									&lt;
								</button>
								<span>July 2024</span>
								<button className={styles.calendarNav} disabled>
									&gt;
								</button>
							</div>
							<div className={styles.calendarDays}>
								{["S", "M", "T", "W", "T", "F", "S"].map((d) => (
									<div key={d} className={styles.calendarDayName}>
										{d}
									</div>
								))}
								{Array(firstDay)
									.fill(null)
									.map((_, i) => <div key={`empty-${i}`} />)}
								{Array(daysInMonth)
									.fill(null)
									.map((_, i) => {
										const day = i + 1;
										const dateStr = `2024-07-${String(day).padStart(2, "0")}`;
										return (
											<button
												key={day}
												className={`${styles.calendarDate} ${
													selectedDate === dateStr ? styles.selectedDate : ""
												} ${isToday(day) ? styles.today : ""}`}
												onClick={() => setSelectedDate(dateStr)}
												type="button"
											>
												{day}
											</button>
										);
									})}
							</div>
						</div>
					</section>

					{/* Step 3: Time */}
					<section className={styles.section}>
						<h2 className={styles.stepTitle}>3. Select Time Slot</h2>
						<select
							className={styles.timeSelect}
							value={selectedTime}
							onChange={(e) => setSelectedTime(e.target.value)}
						>
							<option value="">Select</option>
							{TIMES.map((t) => (
								<option key={t} value={t}>
									{t}
								</option>
							))}
						</select>
					</section>

					{/* Step 4: Submit */}
					<section className={styles.section}>
						<button
							className={styles.submitBtn}
							disabled={!selectedTime}
							type="submit"
						>
							Book Appointment
						</button>
					</section>
				</form>
			</main>
			<Footer />
		</div>
	);
}