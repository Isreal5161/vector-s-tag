import { useEffect, useState } from "react";
import { channels, featuredLines, heroLooks } from "../data/siteContent";

export default function HomePage() {
	const [parallaxOffset, setParallaxOffset] = useState(0);
	const [activeLook, setActiveLook] = useState(0);

	useEffect(() => {
		let animationFrame = 0;

		const handleScroll = () => {
			cancelAnimationFrame(animationFrame);
			animationFrame = window.requestAnimationFrame(() => {
				setParallaxOffset(Math.min(window.scrollY * 0.08, 36));
			});
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setActiveLook((current) => (current + 1) % heroLooks.length);
		}, 4200);

		return () => {
			window.clearInterval(intervalId);
		};
	}, []);

	const showPreviousLook = () => {
		setActiveLook((current) => (current - 1 + heroLooks.length) % heroLooks.length);
	};

	const showNextLook = () => {
		setActiveLook((current) => (current + 1) % heroLooks.length);
	};

	return (
		<>
			<section className="hero-section">
				<div className="hero-copy panel hero-panel" data-reveal>
					<div className="hero-top-grid">
						<div className="hero-main-column">
							<span className="eyebrow">Defined by Design</span>
							<div className="hero-kicker-row">
								<span className="hero-chip">Atelier Menswear</span>
								<span className="hero-chip">Original Pattern Cuts</span>
								<span className="hero-chip">Wholesale + Consumer</span>
							</div>
							<h1>Pure design. No limits. A modern street wears crafted with precision.</h1>
							<p className="hero-intro-copy">
								Vector&apos;s Tag builds menswear the long way: drafting proportions in-house, selecting materials for
								texture and memory, and shaping garments that land somewhere between vintage discipline, street
								confidence, and smart tailoring.
							</p>

							<div className="hero-manifesto" data-reveal style={{ "--reveal-delay": "120ms" }}>
								<span>For men who want clothes with weight, story, and edge.</span>
								<span>Designed as wardrobe pieces, not disposable drops.</span>
								<span>Built to serve boutiques, stylists, and direct clients alike.</span>
							</div>

							<div className="hero-actions">
								<a className="button button-primary" href="#about">Explore the brand</a>
								<a className="button button-secondary" href="#wholesale">Wholesale inquiries</a>
							</div>

							<div className="hero-stats">
								<div className="stat-card">
									<span className="stat-value">01</span>
									<span className="stat-label">Original garments developed in-house from concept to cut.</span>
								</div>
								<div className="stat-card">
									<span className="stat-value">02</span>
									<span className="stat-label">Vintage codes reworked into contemporary menswear silhouettes.</span>
								</div>
								<div className="stat-card">
									<span className="stat-value">03</span>
									<span className="stat-label">Structured for both direct clients and wholesale partners.</span>
								</div>
							</div>
						</div>

						<div className="hero-swiper" data-reveal style={{ "--reveal-delay": "160ms" }}>
							<div className="hero-swiper-stage">
								{heroLooks.map((look, index) => (
									<article
										aria-hidden={activeLook !== index}
										className={activeLook === index ? "hero-swiper-slide is-active" : "hero-swiper-slide"}
										key={look.label}
									>
										<div className="hero-swiper-image-wrap">
											<img
												alt={look.name}
												className="hero-swiper-image"
												src={look.image}
												style={{ transform: `translateY(${parallaxOffset * (index % 2 === 0 ? -0.45 : -0.28)}px) scale(1.08)` }}
											/>
											<div className="hero-swiper-overlay">
												<span className="hero-swiper-index">0{index + 1}</span>
												<span className="hero-look-badge">{look.label}</span>
												<h3>{look.name}</h3>
												<p>{look.description}</p>
											</div>
										</div>
									</article>
								))}
							</div>

							<div className="hero-swiper-controls">
								<button className="hero-swiper-button" onClick={showPreviousLook} type="button">Prev</button>
								<div className="hero-swiper-dots">
									{heroLooks.map((look, index) => (
										<button
											aria-label={`Go to ${look.name}`}
											className={activeLook === index ? "hero-swiper-dot is-active" : "hero-swiper-dot"}
											onClick={() => setActiveLook(index)}
											key={look.label}
											type="button"
										/>
									))}
								</div>
								<button className="hero-swiper-button" onClick={showNextLook} type="button">Next</button>
							</div>
						</div>
					</div>

					<div className="hero-gallery" data-reveal>
						<div className="hero-gallery-header">
							<div>
								<span className="visual-tag">Vector Wardrobe Language</span>
								<h2>Tailored outerwear, heritage raglans, and utility layers with presence.</h2>
							</div>
							<p>
								Each category is built to market the brand with a stronger silhouette, cleaner styling story, and a more
								distinct retail identity.
							</p>
						</div>

						<div className="hero-lookbook-grid">
							{heroLooks.map((look, index) => (
								<article
									className="hero-look-card"
									data-reveal
									key={look.name}
									style={{ "--reveal-delay": `${index * 120}ms` }}
								>
									<div className="hero-look-image-wrap">
										<img
											alt={look.name}
											className="hero-look-image"
											src={look.image}
											style={{ transform: `translateY(${parallaxOffset * (index % 2 === 0 ? -0.45 : -0.28)}px) scale(1.05)` }}
										/>
										<span className="hero-look-badge">{look.label}</span>
									</div>
									<div className="hero-look-copy">
										<h3>{look.name}</h3>
										<p>{look.description}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="page-section" data-reveal>
				<div className="section-heading">
					<div>
						<span className="eyebrow">Signature Lines</span>
						<h2>Three directions shaping the first impression.</h2>
					</div>
					<p>
						The product language is inspired by camo raglan contrast, corduroy statement jackets, and refined
						white utility pieces.
					</p>
				</div>

				<div className="card-grid card-grid-three">
					{featuredLines.map((line, index) => (
						<article className="content-card" data-reveal key={line.name} style={{ "--reveal-delay": `${index * 120}ms` }}>
							<span className="line-index">0{index + 1}</span>
							<h3>{line.name}</h3>
							<p>{line.tone}</p>
							<span className="note">{line.note}</span>
						</article>
					))}
				</div>
			</section>

			<section className="page-section" data-reveal>
				<div className="section-heading">
					<div>
						<span className="eyebrow">Business Reach</span>
						<h2>Built for stores and individual wardrobes.</h2>
					</div>
					<p>
						The same design integrity carries across business clients and personal buyers. The difference is
						volume, not standards.
					</p>
				</div>

				<div className="card-grid card-grid-two">
					{channels.map((channel, index) => (
						<article className="content-card" data-reveal key={channel.title} style={{ "--reveal-delay": `${index * 140}ms` }}>
							<h3>{channel.title}</h3>
							<p>{channel.description}</p>
						</article>
					))}
				</div>
			</section>
		</>
	);
}