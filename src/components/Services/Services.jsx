import { motion } from "framer-motion";

const services = [
  "Website Design",
  "Graphic Design",
  "Video Production",
  "3D Modeling",
  "All Designs",
];

const serviceCards = [
  {
    title: "Website Design",
    items: ["Landing Pages", "E-commerce", "Portfolio", "UI/UX Design"],
  },
  {
    title: "Graphic Design",
    items: ["Posters", "Banners", "Brand Guides", "Packaging"],
  },
  {
    title: "Video Editing",
    items: ["Promos", "Corporate", "Social Clips", "Motion"],
  },
  {
    title: "3D Modeling",
    items: ["Product Design", "Visualization", "Interior", "Motion 3D"],
  },
];

const partners = ["Wix", "Framer", "Figma", "Shopify", "Webflow", "WordPress"];

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
          <h2 className="section-title text-white">SERVICES</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Estruturo soluções completas para web, branding e mídia digital,
            sempre com visual premium e foco em conversão.
          </p>
        </motion.div>
        <div className="service-marquee text-xs uppercase tracking-[0.4em] text-white/50">
          <span>
            {services.map((service) => `${service} · `).join(" ")}
            {services.map((service) => `${service} · `).join(" ")}
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
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
            Worked With
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
