import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { EVENT, waLink } from "../lib/event";

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 bg-gradient-to-b from-[#1a0f28] to-[#0a0514] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#9b4dff] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Sparkles className="w-12 h-12 text-[#e0b3ff] mx-auto" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] to-[#c084fc]">
              Será uma honra ter você conosco
            </h3>

            <p className="text-lg md:text-xl text-[#b8a8d4] max-w-2xl mx-auto leading-relaxed">
              Venha fazer parte dessa celebração especial e ajudar a criar
              memórias que durarão para sempre.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={waLink(
                `Olá! Confirmo minha presença nos ${EVENT.age} anos de ${EVENT.name}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9b4dff] to-[#c084fc] rounded-full text-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(155,77,255,0.3)]"
            >
              <Heart className="w-5 h-5" />
              Confirmar Presença
            </a>
          </motion.div>

          <div className="pt-12 border-t border-[#9b4dff]/20">
            <div className="space-y-3">
              <div className="font-serif-display italic text-2xl md:text-3xl text-[#e0b3ff]">
                {EVENT.name} • {EVENT.age} Anos
              </div>
              <div className="text-[#c084fc]">
                {EVENT.date} • {EVENT.time} • {EVENT.venue}
              </div>
              <div className="text-[#b8a8d4]">
                {EVENT.city}/{EVENT.state}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#9b4dff]" />
            <Heart className="w-4 h-4 text-[#9b4dff] fill-[#9b4dff]" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#9b4dff]" />
          </div>

          <p className="text-sm text-[#b8a8d4]/60 pt-8">
            Com amor, esperamos por você
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e0b3ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
