export default function Terms() {

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen pt-24 bg-black/50 flex justify-center p-6 overflow-y-auto">

      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-4xl w-full text-slate-800">

        <button
          onClick={goBack}
          className="mb-6 text-indigo-600 font-medium underline"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms & Conditions – SRUJANA 2026
        </h1>

        <p className="mb-4">
          SRUJANA 2026 is a State Level Technical Innovation and Project Exhibition
          organized to promote creativity, engineering skills and innovation among
          students. By registering for any event, participants agree to follow the
          rules and regulations mentioned below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Participants must be students from recognized institutions.</li>
          <li>A valid college ID may be required during verification.</li>
          <li>Participants must register through the official website.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Registration Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registration becomes valid only after successful payment.</li>
          <li>Participants must provide accurate information.</li>
          <li>Incorrect details may result in cancellation.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Project / Exhibition Rules</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Projects must be original and developed by participants.</li>
          <li>Participants must bring necessary materials for demonstration.</li>
          <li>Unsafe or inappropriate projects may be rejected.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Conduct</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Participants must maintain discipline during the event.</li>
          <li>Misconduct or plagiarism may lead to disqualification.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Media Usage</h2>
        <p>
          Photos and videos taken during SRUJANA 2026 may be used for
          promotional or documentation purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mt-2 font-medium">
          savishkarandhrapradesh@gmail.com
        </p>

      </div>

    </div>
  );
}
