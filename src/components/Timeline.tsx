import { motion } from "motion/react";
import { Cake, Camera, Music, PartyPopper, Sparkles, Star } from "lucide-react";

export default function Timeline() {
  const moments = [
    {
      icon: Sparkles,
      time: "20h00",
      title: "Recepção",
      description: "Chegada dos convidados e boas-vindas",
    },
    {
      icon: Music,
      time: "20h30",
      title: "Início da Celebração",
      description: "A festa começa com muita música e energia",
    },
    {
      icon: Star,
      time: "21h00",
      title: "Momento Especial",
      description: "A entrada triunfal da debutante",
    },
    {
      icon: Cake,
      time: "22h00",
      title: "Parabéns",
      description: "Hora de cantar e celebrar os 15 anos",
    },
    {
      icon: Camera,
      time: "22h30",
      title: "Fotos e Confraternização",
      description: "Registrando momentos inesquecíveis",
    },
    {
      icon: PartyPopper,
      time: "00h00",
      title: "Encerramento",
      description: "Despedida com o coração cheio de alegria",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#1a0f28] to-[#2d1b45]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] to-[#c084fc] mb-4">
            Momentos da Festa
          </h2>
          <p className="text-[#b8a8d4] max-w-2xl mx-auto">
            Prepare-se para uma noite repleta de emoções e celebrações
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#9b4dff] via-[#c084fc] to-[#e0b3ff]" />

          <div className="space-y-12">
            {moments.map((moment, index) => {
              const Icon = moment.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row gap-8`}
                >
                  <div
                    className={`flex-1 ${
                      isEven ? "md:text-right" : "md:text-left"
                    } text-left md:pr-0 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    } pl-20 md:pl-0`}
                  >
                    <div className="inline-block">
                      <div className="bg-gradient-to-br from-[#2d1b45] to-[#1a0f28] rounded-2xl p-6 border border-[#9b4dff]/20 hover:border-[#9b4dff]/40 transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 bg-[#9b4dff]/20 rounded-full text-sm text-[#e0b3ff]">
                            {moment.time}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl text-[#e0b3ff] mb-2">
                          {moment.title}
                        </h3>
                        <p className="text-[#b8a8d4]">{moment.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b4dff] to-[#c084fc] flex items-center justify-center shadow-[0_0_30px_rgba(155,77,255,0.5)]">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-full border-2 border-[#9b4dff]"
                      />
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
