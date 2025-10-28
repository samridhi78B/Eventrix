import NavBar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import Booking from "./Booking";

export default function BookingPage() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <section className="pt-20" />
      <Booking />
      <Footer />
      <Chatbot />
    </main>
  );
}
