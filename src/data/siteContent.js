export const featuredLines = [
	{
		name: "Camo Raglan Series",
		tone: "Field-tested sleeves, clean body panels, and old-school athletic structure.",
		note: "Inspired by layered camo raglan references with a cleaner custom fit."
	},
	{
		name: "Corduroy Bomber Cut",
		tone: "Heavy wale texture, structured collar, and statement embroidery for cold-weather styling.",
		note: "Designed to feel archival and intentional, not mass-produced."
	},
	{
		name: "Utility Whites",
		tone: "Off-white outerwear with tailored volume and custom trims for modern smart wear.",
		note: "Minimal surface, strong silhouette, premium finishing."
	}
];

export const craftPillars = [
	"Pattern drafted in-house",
	"Tailoring built from scratch",
	"Unique material sourcing",
	"Wholesale and direct-to-consumer"
];

export const channels = [
	{
		title: "Retail Clients",
		description: "Limited drops, statement staples, and elevated everyday outerwear for men who want crafted pieces with backbone."
	},
	{
		title: "Wholesale Partners",
		description: "Small-batch production, original material stories, and distinctive silhouettes for stores that need more than generic inventory."
	}
];

export const contactDetails = [
	{ label: "Brand Position", value: "Hoodie, joggers, short nickers, cargo pants" },
	{ label: "Production Mindset", value: "Consistent. Durable. Controlled." },
	{ label: "Business Model", value: "Wholesale + consumer" },
	{ label: "Core Palette", value: "Deep emerald, neon mint, black" }
];

export const heroLooks = [
	{
		name: "Cargo Pants",
		label: "Cargo Pants",
		description: "Rugged style meets everyday functionality.",
		image: "Cargo_Pant.jpeg"
	},
	{
		name: "Hoodies and Joggers",
		label: "Hoodies and Joggers",
		description: "Built for movement, designed for impact.",
		image: "Woody&Jorgas.jpeg"
	},
	{
		name: "Short Nickers",
		label: "Short Nickers",
		description: "Lightweight comfort built for everyday movement.",
		image: "Short-Nickers.jpeg"
	}
];

export const navItems = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Wholesale", href: "#wholesale" },
	{ label: "Contact", href: "#contact" }
];

export const headerShopCta = {
	label: "Shop",
	phone: "2349160930071",
	message: "Hi Vector's Tag, I'm interested in shopping with you. Please share available pieces, prices, and how to place an order."
};

export function getWhatsAppHref(message = headerShopCta.message) {
	return `https://wa.me/${headerShopCta.phone}?text=${encodeURIComponent(message)}`;
}
