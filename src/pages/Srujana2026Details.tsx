import React, { useState } from "react";

export default function Srujana2026Details() {

  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      name: "Working Model Exhibition",
      poster: "/posters/working-model.jpg"
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        SRUJANA 2026 – Event Categories
      </h1>

      {/* Buttons */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        {events.map((event, index) => (
          <button
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="border p-5 rounded-lg shadow hover:bg-blue-50 transition text-left"
          >
            <h3 className="font-bold text-lg text-blue-900">
              {index + 1}. {event.name}
            </h3>
          </button>
        ))}

      </div>

      {/* Poster Display */}
      {selectedEvent && (
        <div className="border rounded-lg shadow-lg p-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            {selectedEvent.name}
          </h2>

          <img
            src={selectedEvent.poster}
            alt={selectedEvent.name}
            className="mx-auto rounded-lg shadow-md max-h-[600px]"
          />

        </div>
      )}

    </div>
  );
}
