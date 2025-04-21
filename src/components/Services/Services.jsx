// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Layout, ImageIcon, FileVideo, Box, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Website Design",
    icon: Layout,
    items: [
      "Landing Pages", "E-commerce", "Portfolio", "Blogs", 
      "Corporate Websites", "UI/UX Design", "Responsive Design"
    ],
  },
  {
    title: "Graphic Design",
    icon: ImageIcon,
    items: [
      "Posters", "Banners", "Brochure & Flyers", "Post Design", 
      "Logo Designs", "Brand Guidelines", "Packaging Designs", "Business Cards"
    ],
  },
  {
    title: "Video Editing",
    icon: FileVideo,
    items: [
      "Promotional Videos", "Corporate Videos", "Social Media Clips", 
      "Product Demos", "Event Videos"
    ],
  },
  {
    title: "3D Modeling",
    icon: Box,
    items: [
      "Product Design", "Product Visualization", 
      "Interior & Exterior Designs", "Motion Graphics"
    ],
  },
];

// Substitua pelas logos corretas na sua pasta "public"
const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png"
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden">
      {/* SERVICES gigante atrás */}
      <h2 className="
        absolute left-1/2 top-[20%] transform -translate-x-1/2 -translate-y-1/2
        text-[15rem] font-bold text-white/5 tracking-tight select-none pointer-events-none
      ">
        SERVICES
      </h2>

      {/* Container central */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map(({ title, icon: Icon, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="
                bg-white/5 backdrop-blur-md border border-white/10
                rounded-3xl p-8 transition-all duration-300
                hover:bg-white/10 hover:scale-[1.03] hover:border-white/20
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-7 h-7 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-white/70">
                    <ChevronRight className="w-4 h-4 text-white/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Worked With */}
        <div className="mt-32 flex flex-col items-center">
          <h3 className="text-xl font-bold tracking-widest uppercase text-white mb-10">
            Worked With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Logo parceiro ${idx + 1}`}
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
