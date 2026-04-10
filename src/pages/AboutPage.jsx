import { craftPillars } from "../data/siteContent";

export default function AboutPage() {
	return (
		<section className="page-section page-stack" data-reveal>
			<div className="section-heading">
				<div>
					<span className="eyebrow">The Brand</span>
					<h2>Crafted to feel lived-in, finished to feel elevated.</h2>
				</div>
				<p>
					Vector&apos;s Tag stands between vintage influence and modern tailoring, with a focus on menswear that
					looks individual before it even gets styled.
				</p>
			</div>

			<div className="split-layout">
				<div className="content-card story-card">
					<h3>More atelier than storefront.</h3>
					<p>
						The brand was built around a simple idea: men deserve pieces with memory, depth, and structure. That
						means drafting patterns, refining proportions, and building garments that do not feel disposable.
					</p>
					<p>
						Instead of chasing temporary trends, Vector&apos;s Tag works on silhouettes that can hold their own season
						after season, from statement outerwear to sharp casual staples.
					</p>

					<div className="pillar-list">
						{craftPillars.map((pillar) => (
							<div className="pillar-item" key={pillar}>{pillar}</div>
						))}
					</div>
				</div>

				<div className="story-column">
					<div className="tailoring-block">
						<p>Vintage references. Modern proportions. Tailoring discipline. Original construction.</p>
					</div>
					<div className="quote-card">
						<span>Vector Standard</span>
						Built for stores, stylists, and private clients who want garments with story, not commodity stock.
					</div>
				</div>
			</div>
		</section>
	);
}
