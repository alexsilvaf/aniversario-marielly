import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import EmotionalSection from "./components/EmotionalSection";
import Timeline from "./components/Timeline";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0514] overflow-x-hidden">
      <Hero />
      <Countdown />
      <EventDetails />
      <EmotionalSection />
      <Timeline />
      <Location />
      <RSVP />
      <Footer />
    </div>
  );
}
