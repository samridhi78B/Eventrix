import { useEffect, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Login from "./components/login";
import Chatbot from "./components/Chatbot";
import BookingPage from "./components/BookingPage";
import EventsPage from "./components/EventsPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    return typeof window !== "undefined" && sessionStorage.getItem("loggedIn") === "true";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("loggedIn", loggedIn ? "true" : "false");
    }
  }, [loggedIn]);

  const [route, setRoute] = useState(() => (typeof window !== "undefined" ? window.location.hash : ""));

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (!loggedIn) {
    return (
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <Login onSuccess={() => setLoggedIn(true)} />
      </div>
    );
  }

  if (route === "#/events") {
    return <EventsPage />;
  }

  if (route === "#/booking") {
    return <BookingPage />;
  }

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Footer />
      <Chatbot />
    </main>
  );
}

export default App;

