import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  LayoutTemplate, ShoppingCart, Briefcase, Newspaper, Building, MonitorSmartphone, Smartphone,
  Image, Megaphone, FileText, PenTool, BadgePercent, Tag, UserSquare,
  Video, Film, VideoOff, MonitorPlay, CalendarClock,
  Layers, Home, MoveRight, Box,
} from "lucide-react";

const services = [
  {
    title: "Website Design",
    items: [
      { icon: <LayoutTemplate size={16} />, text: "Landing Pages" },
      { icon: <ShoppingCart size={16} />, text: "E-commerce" },
      { icon: <Briefcase size={16} />, text: "Portfolio" },
      { icon: <Newspaper size={16} />, text: "Blogs" },
      { icon: <Building size={16} />, text: "Corporate Websites" },
      { icon: <MonitorSmartphone size={16} />, text: "UI/UX Design" },
      { icon: <Smartphone size={16} />, text: "Responsive Design" },
    ],
  },
  {
    title: "Graphic Design",
    items: [
      { icon: <Image size={16} />, text: "Posters" },
      { icon: <Megaphone size={16} />, text: "Banners" },
      { icon: <FileText size={16} />, text: "Brochure & Flyers" },
      { icon: <PenTool size={16} />, text: "Post Design" },
      { icon: <BadgePercent size={16} />, text: "Logo Designs" },
      { icon: <Tag size={16} />, text: "Brand Guidelines" },
      { icon: <UserSquare size={16} />, text: "Packaging Designs" },
      { icon: <UserSquare size={16} />, text: "Business Cards" },
    ],
  },
  {
    title: "Video Editing",
    items: [
      { icon: <Video size={16} />, text: "Promotional Videos" },
      { icon: <Film size={16} />, text: "Corporate Videos" },
      { icon: <VideoOff size={16} />, text: "Social Media Clips" },
      { icon: <MonitorPlay size={16} />, text: "Product Demos" },
      { icon: <CalendarClock size={16} />, text: "Event Videos" },
    ],
  },
  {
    title: "3D Modeling",
    items: [
      { icon: <Box size={16} />, text: "Product Design" },
      { icon: <Layers size={16} />, text: "Product Visualization" },
      { icon: <Home size={16} />, text: "Interior & Exterior Designs" },
      { icon: <MoveRight size={16} />, text: "Motion Graphics" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-black text-white pt-28 pb-40 px-6 overflow-hidden">
      {/* Texto SERVICES no fundo */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-0 pointer-events-none">
  <h1 className="text-[240px] md:text-[300px] font-bold text-white/5 tracking-tight leading-none select-none">
    SERVICES
  </h1>
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
</div>

      {/* Grid de cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {services.map((category, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <Card className="bg-black border border-white/10 rounded-2xl text-white w-full relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-white/10 mt-3 rounded-full" />
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="font-semibold text-white text-lg mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Worked With */}
      <div className="mt-32 text-center group relative z-10">
        <h4 className="text-sm uppercase text-white font-semibold tracking-widest group-hover:opacity-0 transition-opacity duration-300">
          Worked With
        </h4>
        <div className="relative overflow-hidden h-20 mt-4">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex justify-center items-center gap-12 absolute whitespace-nowrap blur-sm group-hover:blur-0 transition-all duration-300"
          >
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center text-xs text-white/30"
              >
                Logo {i % 8 + 1}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
