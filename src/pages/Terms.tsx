import { useNavigate } from "react-router-dom";

export default function Terms() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 px-6 flex justify-center bg-black text-white">

      <div className="max-w-4xl w-full bg-black/50 backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms & Conditions – SRUJANA 2026
        </h1>

        <p className="mb-4 text-gray-300">
          SRUJANA 2026 is a State Level Technical Innovation Fest organized to
          promote creativity, engineering skills, and technological ideas among
          students. By registering for any event in SRUJANA 2026, participants
          agree to comply with the following terms and conditions.
        </p>

        <ul className="list-disc pl-6 space-y-4 text-gray-300">

          <li>
            All registrations must be completed through the official SRUJANA
            2026 website. Participants must provide accurate information during
            registration.
          </li>

          <li>
            Registration fees must be paid online through the official payment
            gateway provided on the website.
          </li>

          <li>
            Entry to the event venue will be allowed only after successful
            registration and payment confirmation.
          </li>

          <li>
            Participants must follow the rules and guidelines of each event
            category including working model exhibition, paper presentation,
            poster presentation, and hackathons.
          </li>

          <li>
            The organizing committee reserves the right to modify schedules,
            venues, or judging criteria if necessary.
          </li>

          <li>
            Any misconduct, plagiarism, cheating, or violation of event rules
            may lead to disqualification without refund.
          </li>

          <li>
            Participants are responsible for the safety of their models,
            laptops, and personal belongings.
          </li>

          <li>
            By participating in SRUJANA 2026, participants allow organizers to
            capture photos and videos for promotional and documentation
            purposes.
          </li>

          <li>
            All disputes related to the event will be resolved by the organizing
            committee and their decision will be final.
          </li>

        </ul>

        <p className="mt-8 text-gray-300">
          For queries contact:
        </p>

        <p className="font-semibold mt-2 text-white">
          savishkarandhrapradesh@gmail.com
        </p>

      </div>

    </div>
  );
}
