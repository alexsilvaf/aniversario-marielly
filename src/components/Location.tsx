import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";
import PurpleMap from "./PurpleMap";
import { EVENT } from "../lib/event";

export default function Location() {
  const mapsQuery = `${EVENT.coords.lat},${EVENT.coords.lng}`;

  return (
    <section
      id="location"
      className="relative py-20 px-4 bg-gradient-to-b from-[#2d1b45] to-[#1a0f28]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#e0b3ff] to-[#c084fc] mb-4">
            Localização
          </h2>
          <p className="text-[#b8a8d4]">Nos encontramos neste lugar especial</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#2d1b45] to-[#1a0f28] rounded-3xl p-8 border border-[#9b4dff]/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9b4dff] to-[#c084fc] flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-[#e0b3ff] mb-2">
                    {EVENT.venue}
                  </h3>
                  <p className="text-[#c084fc]">
                    {EVENT.city}, {EVENT.state === "ES" ? "Espírito Santo" : EVENT.state}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-[#b8a8d4] leading-relaxed">
                  Um espaço elegante e sofisticado, perfeito para celebrar
                  momentos especiais com conforto e requinte.
                </p>
                <p className="text-sm text-[#b8a8d4]/80 leading-relaxed">
                  {EVENT.address}
                </p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9b4dff] to-[#c084fc] rounded-full text-white hover:scale-105 transition-transform duration-300"
              >
                <Navigation className="w-5 h-5" />
                Ver no Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-[#9b4dff]/20 shadow-[0_0_40px_rgba(155,77,255,0.15)]"
          >
            <PurpleMap />

            <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[65%] bg-[#1a0f28]/85 backdrop-blur-sm rounded-full py-1.5 pl-2.5 pr-3 border border-[#9b4dff]/30 shadow-[0_4px_18px_rgba(10,5,20,0.45)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9b4dff] animate-pulse shrink-0" />
                <div className="text-xs md:text-sm text-[#e0b3ff] truncate">
                  {EVENT.venue}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
