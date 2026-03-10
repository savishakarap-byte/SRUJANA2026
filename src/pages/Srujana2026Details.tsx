import React, { useState, useEffect } from "react";

export default function Srujana2026Details() {

  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      name: "Working Model Exhibition",
      poster: "/posters/working-model.jpeg",
      register: "https://srujana2026.in/register"
    },
    {
      name: "Poster Presentation",
      poster: "/posters/poster-presentation.jpg",
      register: "https://srujana2026.in/register"
    },
    {
      name: "Paper Presentation",
      poster: "/posters/paper-presentation.jpg",
      register: "https://srujana2026.in/register"
    },
    {
      name: "Hackathon",
      poster: "/posters/hackathon.jpg",
      register: "https://srujana2026.in/register"
    },
    {
      name: "Industry – Institute Interaction",
      poster: "/posters/industry-interaction.jpg",
      register: "https://srujana2026.in/register"
    }
  ];

  // ESC key close modal
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        SRUJANA 2026 – Event Categories
      </h1>


      {/* Event Buttons */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {events.map((event, index) => (
          <button
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="group bg-white/80 backdrop-blur border rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-left"
          >

            <h3 className="text-lg font-semibold text-blue-900">
              {index + 1}. {event.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2 group-hover:text-blue-700">
              Click to view poster
            </p>

          </button>
        ))}

      </div>


      {/* Modal */}
      {selectedEvent && (

        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedEvent(null)}
        >

          {/* Modal Card */}
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full p-6 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-5 text-3xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            {/* Event Name */}
            <h2 className="text-2xl font-semibold text-center mb-6">
              {selectedEvent.name}
            </h2>

            {/* Poster */}
            <div className="overflow-hidden rounded-lg">

              <img
                src={selectedEvent.poster}
                alt={selectedEvent.name}
                className="mx-auto rounded-lg shadow-lg max-h-[75vh] transition duration-300 hover:scale-105"
              />

            </div>


            {/* Register Button */}
            <div className="text-center mt-8">

              <a
                href={selectedEvent.register}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-800 transition"
              >
                Register Now
              </a>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
