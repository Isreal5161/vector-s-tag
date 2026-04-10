import { contactDetails, getWhatsAppHref } from "../data/siteContent";

export default function ContactPage() {
	const customerContactHref = getWhatsAppHref(
		"Hi Vector's Tag, I'm interested in your pieces. Please share what is available, the prices, and how I can order."
	);

	return (
		<section className="page-section page-stack" data-reveal>
			<div className="cta-card">
				<div>
					<span className="eyebrow">Contact Us</span>
					<h2>Bring Vector&apos;s Tag into stores, wardrobes, and editorials.</h2>
					<p>
						Whether you are buying for your shop or for yourself, the brand is positioned around originality,
						better materials, and a distinct vintage-smartwear identity.
					</p>

					<div className="hero-actions">
						<a className="button button-primary" href={customerContactHref} rel="noreferrer" target="_blank">Chat on WhatsApp</a>
						<a className="button button-secondary" href={customerContactHref} rel="noreferrer" target="_blank">Book a line review</a>
					</div>
				</div>

				<div className="cta-details">
					{contactDetails.map((item) => (
						<div className="detail-row" key={item.label}>
							<span>{item.label}</span>
							<strong>{item.value}</strong>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}