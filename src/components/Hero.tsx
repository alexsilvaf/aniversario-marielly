import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { EVENT, waLink } from "../lib/event";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0514] via-[#1a0f28] to-[#2d1b45] px-4 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#9b4dff] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#c084fc] rounded-full blur-[100px] opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e0b3ff] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Sparkles className="w-12 h-12 text-[#e0b3ff] mx-auto" />
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif-display italic text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] via-[#c084fc] to-[#9b4dff]"
            >
              {EVENT.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl text-[#e0b3ff] tracking-widest"
            >
              {EVENT.age} ANOS
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 pt-8"
          >
            <p className="text-xl md:text-2xl text-[#faf8fc] max-w-2xl mx-auto leading-relaxed">
              Você é nosso convidado para uma noite inesquecível
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[#c084fc] text-lg md:text-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9b4dff]" />
                <span>{EVENT.date}</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-[#9b4dff]" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9b4dff]" />
                <span>{EVENT.time}</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-[#9b4dff]" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9b4dff]" />
                <span>{EVENT.venue}</span>
              </div>
            </div>

            <p className="text-[#b8a8d4]">
              {EVENT.city}/{EVENT.state}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
              href={waLink(
                `Olá! Confirmo minha presença nos ${EVENT.age} anos de ${EVENT.name}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#9b4dff] to-[#c084fc] rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(155,77,255,0.5)]"
            >
              <span className="relative z-10 text-white">Confirmar Presença</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c084fc] to-[#9b4dff] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#location"
              className="px-8 py-4 border-2 border-[#9b4dff] text-[#e0b3ff] rounded-full hover:bg-[#9b4dff]/10 transition-all hover:scale-105"
            >
              Ver Local
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e0b3ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
