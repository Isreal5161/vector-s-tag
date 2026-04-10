import { useEffect, useState } from "react";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WholesalePage from "./pages/WholesalePage";
import ContactPage from "./pages/ContactPage";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/pages.css";

const pageMap = {
	home: HomePage,
	about: AboutPage,
	wholesale: WholesalePage,
	contact: ContactPage
};

function getCurrentPage() {
	if (typeof window === "undefined") {
		return "home";
	}

	const hash = window.location.hash.replace("#", "");
	return pageMap[hash] ? hash : "home";
}

export default function App() {
	const [currentPage, setCurrentPage] = useState(getCurrentPage);
	const [isHeaderCondensed, setIsHeaderCondensed] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const ActivePage = pageMap[currentPage];

	useEffect(() => {
		const handleHashChange = () => {
			setCurrentPage(getCurrentPage());
			window.scrollTo({ top: 0, behavior: "smooth" });
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
			setIsHeaderCondensed(scrollTop > 36);
			setScrollProgress(maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const elements = document.querySelectorAll("[data-reveal]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
		);

		elements.forEach((element) => observer.observe(element));

		return () => {
			observer.disconnect();
		};
	}, [currentPage]);

	return (
		<SiteLayout currentPage={currentPage} isHeaderCondensed={isHeaderCondensed} scrollProgress={scrollProgress}>
			<ActivePage />
		</SiteLayout>
	);
}