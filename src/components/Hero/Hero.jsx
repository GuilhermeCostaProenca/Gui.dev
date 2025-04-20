import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const canvas = document.getElementById("starfield-canvas");
    const ctx = canvas.getContext("2d");
  
    let w, h;
    let stars = [];
    const numStars = 2000;
  
    function resizeCanvas() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
  
    function initStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * w - w / 2,
          y: Math.random() * h - h / 2,
          z: Math.random() * w,
        });
      }
    }
  
    function draw() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "white";
      ctx.beginPath();
  
      for (let i = 0; i < numStars; i++) {
        let star = stars[i];
        star.z -= 2;
  
        if (star.z <= 0) {
          star.z = w;
          star.x = Math.random() * w - w / 2;
          star.y = Math.random() * h - h / 2;
        }
  
        let k = 128.0 / star.z;
        let x = star.x * k + w / 2;
        let y = star.y * k + h / 2;
  
        if (x >= 0 && x <= w && y >= 0 && y <= h) {
          let size = (1 - star.z / w) * 2;
          ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / w})`; 
          ctx.moveTo(x, y);
          ctx.arc(x, y, size, 0, Math.PI * 2);
        }
      }
  
      ctx.fill();
      requestAnimationFrame(draw);
    }
  
    resizeCanvas();
    initStars();
    draw();
    window.addEventListener("resize", () => {
      resizeCanvas();
      initStars();
    });
  }, []);
  return (
    <section
      id="inicio"
      className="h-screen w-full flex items-center justify-center text-center relative px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[clamp(3rem,15vw,9rem)] font-black tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
      >
        PORT
        <span className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
          F
        </span>
        OLIO
      </motion.h1>

      <canvas id="starfield-canvas" className="absolute inset-0 z-[-1] w-full h-full"></canvas>


    </section>
  );
}
