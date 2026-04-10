import { getWhatsAppHref, headerShopCta, navItems } from "../data/siteContent";

export default function SiteLayout({ currentPage, isHeaderCondensed, scrollProgress, children }) {
	const shopHref = getWhatsAppHref();

	return (
		<div className="page-shell">
			<div className="container">
				<div className="nav-wrap">
					<header
						className={isHeaderCondensed ? "nav nav-scrolled" : "nav"}
						style={{ "--scroll-progress": scrollProgress }}
					>
						<div className="nav-left">
							<a className="header-shop-button" href={shopHref} rel="noreferrer" target="_blank">
								<span className="header-shop-button-dot" aria-hidden="true" />
								{headerShopCta.label}
							</a>

							<div className="brand">
								<span className="brand-mark">Hoodies Joggers Atelier</span>
								<a className="brand-name" href="#home">Vector's Tag</a>
							</div>
						</div>

						<div className="nav-actions">
							<nav className="nav-links" aria-label="Primary">
								{navItems.map((item) => {
									const isActive = currentPage === item.href.replace("#", "");

									return (
										<a
											className={isActive ? "nav-link-active" : ""}
											href={item.href}
											key={item.href}
										>
											{item.label}
										</a>
									);
								})}
							</nav>
						</div>
					</header>
				</div>

				<div aria-hidden="true" className="nav-spacer" />

				<main>{children}</main>

				<footer className="footer">
					<span>Vector's Tag</span>
					<span>Copyright @ Vector's Tag 2026 </span>
				</footer>
			</div>
		</div>
	);
}
