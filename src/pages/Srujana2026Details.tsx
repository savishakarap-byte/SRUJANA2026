import React, { useState, useEffect } from "react";

export default function Srujana2026Details() {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [zoom, setZoom] = useState(false);

  const events = [
    {
      name: "Working Model Exhibition",
      poster: "/posters/working-model.jpeg"
    },
    {
      name: "Poster Presentation",
      poster: "/posters/poster-presentation.jpg"
    },
    {
      name: "Paper Presentation",
      poster: "/posters/paper-presentation.jpg"
    },
    {
      name: "Hackathon",
      poster: "/posters/hackathon.jpg"
    },
    {
      name: "Industry – Institute Interaction",
      poster: "/posters/industry-interaction.jpg"
    }
  ];

  // Close modal with ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
        setZoom(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        SRUJANA 2026 – Event Categories
      </h1>


      {/* Event Buttons */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {events.map((event, index) => (
          <button
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="group bg-white border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left"
          >

            <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
              {index + 1}. {event.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Click to view event poster
            </p>

          </button>
        ))}

      </div>



      {/* Poster Modal */}
      {selectedEvent && (

        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => {
            setSelectedEvent(null);
            setZoom(false);
          }}
        >

          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full p-6 animate-fade"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedEvent(null);
                setZoom(false);
              }}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-6">
              {selectedEvent.name}
            </h2>


            {/* Poster */}
            <div className="overflow-auto max-h-[75vh]">

              <img
                src={selectedEvent.poster}
                alt={selectedEvent.name}
                onClick={() => setZoom(!zoom)}
                className={`mx-auto rounded-lg shadow-lg cursor-zoom-in transition duration-300 ${
                  zoom ? "scale-125" : "scale-100"
                }`}
              />

            </div>


            {/* Controls */}
            <div className="flex justify-center gap-4 mt-6">

              <button
                onClick={() => setZoom(!zoom)}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                {zoom ? "Reset Zoom" : "Zoom Poster"}
              </button>

              <a
                href="https://srujana2026.in/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
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
