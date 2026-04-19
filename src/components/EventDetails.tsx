import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { EVENT } from "../lib/event";

export default function EventDetails() {
  const details = [
    {
      icon: Sparkles,
      title: "Aniversariante",
      value: EVENT.name,
      subtitle: "A estrela da noite",
    },
    {
      icon: Calendar,
      title: "Data",
      value: EVENT.date,
      subtitle: "Uma data para lembrar",
    },
    {
      icon: Clock,
      title: "Horário",
      value: EVENT.time,
      subtitle: "Pontualidade é glamour",
    },
    {
      icon: MapPin,
      title: "Local",
      value: EVENT.venue,
      subtitle: `${EVENT.city}/${EVENT.state}`,
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-[#1a0f28]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] to-[#c084fc] mb-4">
            Detalhes do Evento
          </h2>
          <p className="text-[#b8a8d4] max-w-2xl mx-auto">
            Anote essas informações e prepare-se para uma celebração inesquecível
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-[#2d1b45] to-[#1a0f28] rounded-3xl p-8 border border-[#9b4dff]/20 hover:border-[#9b4dff]/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9b4dff] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9b4dff] to-[#c084fc] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-[#b8a8d4] mb-2 uppercase tracking-wider">
                        {detail.title}
                      </div>
                      <div className="text-2xl md:text-3xl text-[#e0b3ff] mb-2">
                        {detail.value}
                      </div>
                      <div className="text-[#c084fc]">{detail.subtitle}</div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-[#9b4dff]/10 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
