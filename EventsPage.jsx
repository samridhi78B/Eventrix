import React, { useEffect, useState } from "react";
import "./book.css";

export default function EventsPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Sports Meet",
      date: "15th Sept 2025",
      location: "Gonerby Hill Foot Chruch England",
      description: "An electrifying night of live performances!",
      time: "7:00 AM - 1:00 PM",
      tickets: "₹2000",
      image:
        "https://www.gonerbyhillfoot.co.uk/_site/data/images/news/73/main-IMG1981.JPG",
    },
    {
      id: 2,
      title: "Avengers Movie Marathon",
      date: "Tue Nov 18 2025",
      location: "Delhi",
      description: "Watch all Avengers movies in one epic night!",
      time: "4:00 PM",
      tickets: "₹1500",
      image: "https://i.ytimg.com/vi/UozKx6u8P8I/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "TECHSPO Delhi NCR",
      date: "Sat Nov 15 2025",
      location: "Mumbai",
      description: "An electrifying night of live performances!",
      time: "6:00 PM",
      tickets: "₹2000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSevWlNIVMTOpS1Pw8QvrBNW_IJfez2B1Vg&s",
    },
    {
      id: 4,
      title: "Miss World 2025",
      date: "Sat Nov 15 2025",
      location: "Mumbai",
      description: "An electrifying night of live performances!",
      time: "6:00 PM",
      tickets: "₹2000",
      image:
        "https://img.mathrubhumi.com/view/acePublic/alias/contentid/1jjzlgdhskxo6i4m967/2/miss-world-jpg.webp?f=3%3A2&q=0.75&w=900",
    },
    {
      id: 5,
      title: "Chess World Cup",
      date: "Sat Nov 15 2025",
      location: "Mumbai",
      description: "An electrifying night of live performances!",
      time: "6:00 PM",
      tickets: "₹2000",
      image:
        "https://www.hindustantimes.com/ht-img/img/2025/08/26/550x309/Magnus-Carlsen-and-D-Gukesh-are-expected-to-headli_1756220132667.jpg",
    },
    {
      id: 6,
      title: "Art Exhibition",
      date: "Sat 20th Sept 2025",
      location: "Mumbai",
      description:
        "Explore creative artworks from emerging and established artists",
      time: "6:00 PM",
      tickets: "₹2000",
      image:
        "https://www.discoverhongkong.com/content/dam/dhk/intl/explore/arts-entertainment/artsinhk/2025/gallery_art-basel.jpg",
    },
    {
      id: 7,
      title: "Wedding Expo",
      date: "Sat 20th Sept 2025",
      location: " Las Vegas Convention Center for CES",
      description:
        "Explore stunning bridal fashion, décor ideas, photography, catering, jewelry, and more — all under one roof.",
      time: "6:00 PM",
      tickets: "₹2000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hMb5fbVQqDQ7odNjidachkIwdHdulajIAw&s",
    },
    {
      id: 8,
      title: "Tech Conference",
      date: "Sat 18th Sept 2025",
      location: "Taj Palace Delhi",
      description:
        "Discover the latest breakthroughs in AI, blockchain, cybersecurity, cloud computing, and emerging technologies.",
      time: "6:00 PM",
      tickets: "₹2000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbV7MY-YRUxs-4gRhATSggWtpp3BaMNJTdg&s",
    },
    {
      id: 9,
      title: "COLDPLAY Concert",
      date: "Sat  6th Sept 2025",
      location: "Mumbai",
      description:
        "Get ready for an unforgettable night filled with chart-topping hits, breathtaking visuals, and electrifying performances.",
      time: "6:00 PM",
      tickets: "₹5000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_5Mib0pUuR4ovscgsMiGEk4P2-xd1iCONw&s",
    },
    {
      id: 10,
      title: "Diwali Celebration",
      date: "Sat  20th Oct 2025",
      location: "Pragati Maidan",
      description:
        "A festive evening filled with lights, cultural shows, food, and fireworks to mark the joy of Diwali",
      time: "6:00 PM",
      tickets: "₹1200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiCC_XChL0O400c2K1RSl89u2XoSZ5m-ysw&s",
    },
  ]);

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    time: "",
    tickets: "",
    image: "",
  });
  const [theme, setTheme] = useState("dark");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showSeats, setShowSeats] = useState(false);

  const wrapperClass = `events-page ${theme === "light" ? "light-mode" : ""}`;

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setFilteredEvents(
      events.filter((ev) => ev.title.toLowerCase().includes(keyword))
    );
  };

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...filteredEvents];
    if (value === "Date") {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (value === "Title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    setFilteredEvents(sorted);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const item = { id: Date.now(), ...newEvent };
    setEvents((prev) => [...prev, item]);
    setFilteredEvents((prev) => [...prev, item]);
    setShowModal(false);
    setNewEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      time: "",
      tickets: "",
      image: "",
    });
  };

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = (evnt) => {
    const confirmBooking = window.confirm(
      `Do you want to book "${evnt.title}" on ${evnt.date}?`
    );

    if (confirmBooking) {
      alert(`✅ Booking confirmed for "${evnt.title}" at ${evnt.location}!`);
    } else {
      alert("❌ Booking cancelled.");
    }
  };

  return (
    <div className={wrapperClass}>
      <div className="toggle-container">
        <button
          id="themeToggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      <h1>🎟️ Event Categories</h1>

      <div className="top-bar">
        <div className="sort-bar">
          <select onChange={handleSort}>
            <option>Sort By</option>
            <option>Date</option>
            <option>Title</option>
          </select>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search events..." onChange={handleSearch} />
      </div>

      <div className="add-event-container">
        <button className="add-event-btn" onClick={() => setShowModal(true)}>
          ➕ Add New Event
        </button>
      </div>

      <div className="event-container">
        {filteredEvents.map((evnt) => (
          <div key={evnt.id} className="event-card">
            <img src={evnt.image} alt={evnt.title} className="event-image" />
            <div className="event-content">
              <h2>{evnt.title}</h2>
              <p>Date: {evnt.date}</p>
              <p>Location: {evnt.location}</p>

              <button
                className="view-details"
                onClick={(e) => {
                  const details = e.target.parentNode.querySelector(".details");
                  details.style.display = details.style.display === "block" ? "none" : "block";
                }}
              >
                View Details
              </button>

              <div className="details">
                <p>
                  <strong>Description:</strong> {evnt.description}
                </p>
                <p>
                  <strong>Time:</strong> {evnt.time}
                </p>
                <p>
                  <strong>Tickets:</strong> {evnt.tickets}
                </p>
                <a href="#">📞 Call</a>
                <a href="#">📍 Directions</a>
                <a href="#">✉️ Enquiry</a>
                <button className="book-now" onClick={() => handleBooking(evnt)}>
                  🎟️ Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div id="addEventModal" className="open">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Add New Event</h2>
            <form onSubmit={handleAddEvent}>
              <label>Event Title</label>
              <input
                type="text"
                required
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />

              <div className="row-2">
                <div>
                  <label>Date</label>
                  <input
                    type="date"
                    required
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                </div>

                <div>
                  <label>Time</label>
                  <input
                    type="time"
                    required
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  />
                </div>
              </div>

              <label>Location</label>
              <input
                type="text"
                required
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />

              <label>Description</label>
              <textarea
                required
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              ></textarea>

              <label>Ticket Price</label>
              <input
                type="text"
                required
                value={newEvent.tickets}
                onChange={(e) => setNewEvent({ ...newEvent, tickets: e.target.value })}
              />

              <label>Image URL</label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                value={newEvent.image}
                onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
              />

              <button type="submit" className="btn">
                Add Event
              </button>
            </form>
          </div>
        </div>
      )}

      {showSeats && (
        <div className="modal" onClick={() => setShowSeats(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowSeats(false)}>
              &times;
            </span>
            <h2>Select Your Seats</h2>
            <div className="seats">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((seat) => (
                <div
                  key={seat}
                  className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
            <button className="btn" onClick={() => setShowSeats(false)}>
              Confirm ({selectedSeats.length} Selected)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
