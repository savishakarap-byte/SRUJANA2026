import React from "react";

export default function Srujana2026Details() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        SRUJANA 2026 – Event Details
      </h1>

      {/* About */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About SRUJANA</h2>
        <p className="text-gray-700 leading-relaxed">
          SRUJANA is a state-level innovation and technical platform for
          students across Andhra Pradesh. The initiative encourages students
          from engineering, science and technical institutions to showcase
          innovative ideas, working models, research papers and technological
          solutions to real world problems.
        </p>
      </section>

      {/* Schedule */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Event Schedule</h2>

        <table className="w-full border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-3 text-left">Activity</th>
              <th className="border p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">Event Days</td>
              <td className="border p-3">3 – 5 April 2026</td>
            </tr>
            <tr>
              <td className="border p-3">Working Model Exhibition</td>
              <td className="border p-3">3 – 5 April 2026</td>
            </tr>
            <tr>
              <td className="border p-3">Poster Presentation</td>
              <td className="border p-3">3 – 5 April 2026</td>
            </tr>
            <tr>
              <td className="border p-3">Paper Presentation</td>
              <td className="border p-3">3 – 5 April 2026</td>
            </tr>
            <tr>
              <td className="border p-3">Hackathon</td>
              <td className="border p-3">3 – 5 April 2026</td>
            </tr>
            <tr>
              <td className="border p-3">Industry Interaction</td>
              <td className="border p-3">3 – 5 April 2026</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Event Categories</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-5 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Working Model Exhibition</h3>
            <p className="text-gray-600">
              Participants showcase functional engineering models demonstrating
              innovation and real-world problem solving.
            </p>
          </div>

          <div className="border p-5 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Poster Presentation</h3>
            <p className="text-gray-600">
              Innovative ideas and research concepts presented visually through
              technical posters.
            </p>
          </div>

          <div className="border p-5 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Paper Presentation</h3>
            <p className="text-gray-600">
              Students present research papers or technical solutions before a
              panel of experts.
            </p>
          </div>

          <div className="border p-5 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Hackathon</h3>
            <p className="text-gray-600">
              A competitive innovation challenge where teams rapidly develop
              solutions to real world problems.
            </p>
          </div>

          <div className="border p-5 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Industry Interaction</h3>
            <p className="text-gray-600">
              A networking session with industry professionals and innovators
              to explore real-world challenges.
            </p>
          </div>

        </div>
      </section>

      {/* Themes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Themes</h2>

        <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
          <li>Agricultural Technology</li>
          <li>Artificial Intelligence & Data Science</li>
          <li>Energy & Renewable Systems</li>
          <li>Industrial Automation</li>
          <li>Healthcare & Medical Technology</li>
          <li>Mobility & Transportation</li>
          <li>Safety Technologies</li>
          <li>Sustainable Infrastructure</li>
          <li>Waste Management</li>
          <li>Open Innovation</li>
        </ul>
      </section>

      {/* Registration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Registration Fee</h2>

        <table className="w-full border">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-3">Event Type</th>
              <th className="border p-3">Fee</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">Team Events</td>
              <td className="border p-3">₹500 per team</td>
            </tr>
            <tr>
              <td className="border p-3">Individual Events</td>
              <td className="border p-3">₹200 per participant</td>
            </tr>
            <tr>
              <td className="border p-3">Industry Interaction</td>
              <td className="border p-3">Free Registration</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Prizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Awards & Prizes</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-5 rounded-lg">
            <h3 className="font-bold mb-2">First Prize</h3>
            <p>Trophy + Certificate</p>
            <p className="text-green-700 font-semibold">₹11,000 Cash Prize</p>
          </div>

          <div className="border p-5 rounded-lg">
            <h3 className="font-bold mb-2">Second Prize</h3>
            <p>Trophy + Certificate</p>
            <p className="text-green-700 font-semibold">₹7,000 Cash Prize</p>
          </div>

        </div>

        <div className="mt-6">
          <p className="font-semibold">Special Awards</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Best Innovative Project – ₹11,000</li>
            <li>Best Industry Relevant Idea – ₹11,000</li>
            <li>Young Innovator Award – ₹11,000</li>
          </ul>
        </div>

        <p className="mt-4 text-gray-600">
          All eligible participants will receive participation certificates.
        </p>
      </section>

      {/* Guidelines */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">General Guidelines</h2>

        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Participants may participate individually or in teams.</li>
          <li>Projects must demonstrate innovation and feasibility.</li>
          <li>Participants must explain their model during evaluation.</li>
          <li>Judges may ask technical questions.</li>
          <li>Participants must follow the event schedule.</li>
          <li>The decision of judges will be final.</li>
        </ol>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>Email: info@srujana.org</p>
        <p>Technical Cell – SRUJANA 2026</p>
      </section>

    </div>
  );
}
