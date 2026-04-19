export const EVENT = {
  name: "Marielly",
  age: 15,
  date: "08 de Agosto",
  time: "20h",
  targetDate: "2026-08-08T20:00:00",
  venue: "Cerimonial du Porto",
  city: "Piúma",
  state: "ES",
  address: "Rua das Orquídeas, s/n - Lot. Portinho, Piúma - ES, 29285-000",
  coords: { lat: -20.83447555757373, lng: -40.70945338746673 },
  rsvpDeadline: "01 de agosto",
};

export const PHONE = {
  display: "+55 27 99847-7850",
  e164: "5527998477850",
};

export const waLink = (text: string) =>
  `https://wa.me/${PHONE.e164}?text=${encodeURIComponent(text)}`;
