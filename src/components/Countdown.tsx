import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { EVENT } from "../lib/event";

function diff(target: number) {
  const distance = target - Date.now();
  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export default function Countdown() {
  const target = new Date(EVENT.targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#2d1b45] to-[#1a0f28] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#9b4dff] rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] to-[#c084fc] mb-4">
            Contagem Regressiva
          </h2>
          <p className="text-[#b8a8d4]">para a noite mais especial</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-[#1a0f28] to-[#2d1b45] rounded-2xl p-6 md:p-8 border border-[#9b4dff]/20 hover:border-[#9b4dff]/40 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9b4dff]/0 to-[#c084fc]/0 group-hover:from-[#9b4dff]/10 group-hover:to-[#c084fc]/10 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#e0b3ff] to-[#9b4dff] mb-2">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base text-[#c084fc] uppercase tracking-wider">
                    {unit.label}
                  </div>
                </div>

                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#9b4dff] opacity-50" />
                <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#c084fc] opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
