import { useEffect, useState } from "react";

const LightOverlay = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-[60px] left-1/2 transform -translate-x-1/2 w-[60vw] h-[250px] z-20 pointer-events-none transition-opacity duration-700 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full bg-blue-500/15 blur-[90px] rounded-full" />
    </div>
  );
};

export default LightOverlay;
