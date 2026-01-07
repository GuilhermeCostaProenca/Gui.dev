import { motion } from "framer-motion";
import { Box, Monitor, Palette, Video } from "lucide-react";

const serviceCards = [
  {
    title: "Website Design",
    icon: Monitor,
    items: [
      "Landing Pages",
      "E-commerce",
      "Portfolio",
      "Blogs",
      "Corporate Websites",
      "UI/UX Design",
      "Responsive Design",
    ],
  },
  {
    title: "Graphic Design",
    icon: Palette,
    items: [
      "Posters",
      "Banners",
      "Brochures & Flyers",
      "Post Design",
      "Logo Designs",
      "Brand Guides",
      "Packaging",
      "Business Cards",
    ],
  },
  {
    title: "Video Editing",
    icon: Video,
    items: [
      "Promotional Videos",
      "Corporate Videos",
      "Social Media Clips",
      "Product Demos",
      "Event Videos",
      "Motion Graphics",
    ],
  },
  {
    title: "3D Modeling",
    icon: Box,
    items: [
      "Product Design",
      "Product Visualization",
      "Interior & Exterior Designs",
      "Motion Graphics",
    ],
  },
];

const partners = [
  { name: "Wix", logo: "https://cdn.simpleicons.org/wix/ffffff" },
  { name: "Framer", logo: "https://cdn.simpleicons.org/framer/ffffff" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/ffffff" },
  { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow/ffffff" },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/ffffff" },
];

export default function Services() {
  return (
    <section id="servicos" className="w-full bg-black px-6 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title text-white">SERVIÇOS</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Estruturo soluções completas para web, branding e mídia digital,
            sempre com visual premium e foco em conversão.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-shadow hover:shadow-lg hover:shadow-black/10 md:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200">
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Parcerias
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-6 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
