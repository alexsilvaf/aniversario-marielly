import { motion } from "motion/react";
import { Heart, MessageCircle } from "lucide-react";
import { EVENT, waLink } from "../lib/event";

export default function RSVP() {
  const message = `Olá! Confirmo minha presença nos ${EVENT.age} anos de ${EVENT.name} em ${EVENT.date} às ${EVENT.time} no ${EVENT.venue}.`;

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#1a0f28] via-[#2d1b45] to-[#1a0f28] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9b4dff] rounded-full blur-[150px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-20 h-20 text-[#e0b3ff] fill-[#e0b3ff]/30 mx-auto" />
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] via-[#c084fc] to-[#9b4dff] leading-tight">
              Confirme sua Presença
            </h2>
            <p className="text-xl md:text-2xl text-[#faf8fc] max-w-2xl mx-auto leading-relaxed">
              Sua presença vai tornar esse momento ainda mais especial
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#9b4dff] to-[#c084fc] rounded-full text-white text-lg md:text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(155,77,255,0.4)] hover:shadow-[0_0_60px_rgba(155,77,255,0.6)]"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Confirmar pelo WhatsApp
            </a>
          </motion.div>

          <div className="pt-8 space-y-4">
            <p className="text-[#b8a8d4]">
              Por favor, confirme até{" "}
              <span className="text-[#c084fc]">{EVENT.rsvpDeadline}</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-[#9b4dff]">
              <div className="w-2 h-2 rounded-full bg-[#9b4dff] animate-pulse" />
              <span className="text-sm">Contamos com você!</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#e0b3ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}
