import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function EmotionalSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#1a0f28] via-[#2d1b45] to-[#1a0f28] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9b4dff] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Heart className="w-16 h-16 text-[#e0b3ff] fill-[#e0b3ff]/20 mx-auto" />
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] via-[#c084fc] to-[#9b4dff] leading-tight">
              Um Momento Sonhado
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-[#faf8fc] leading-relaxed">
                Uma noite sonhada com carinho para celebrar os 15 anos de Marielly
                com brilho, alegria e memórias inesquecíveis.
              </p>

              <p className="text-lg md:text-xl text-[#c084fc] leading-relaxed">
                Venha fazer parte desse momento único e especial. Sua presença
                vai tornar essa celebração ainda mais memorável e cheia de amor.
              </p>

              <p className="text-[#b8a8d4] italic">
                Esperamos você para viver essa noite mágica conosco.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#9b4dff]" />
            <div className="w-2 h-2 rounded-full bg-[#9b4dff]" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#9b4dff]" />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e0b3ff] rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
