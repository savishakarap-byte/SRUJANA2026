import { useNavigate } from "react-router-dom";

export default function Refund() {

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
          Refund Policy – SRUJANA 2026
        </h1>

        <p className="mb-4 text-gray-300">
          This refund policy applies to all registrations made for SRUJANA 2026.
          By completing the registration and payment process, participants
          agree to the following refund conditions.
        </p>

        <ul className="list-disc pl-6 space-y-4 text-gray-300">

          <li>
            All registration fees paid for SRUJANA 2026 are generally
            <strong> non-refundable</strong>.
          </li>

          <li>
            Refunds will <strong>not be provided</strong> if a participant
            cancels their registration, fails to attend the event, or is
            disqualified due to violation of event rules.
          </li>

          <li>
            If an event or the entire fest is cancelled by the organizing
            committee due to unforeseen circumstances, refund decisions will be
            evaluated and communicated officially to registered participants.
          </li>

          <li>
            In case of <strong>duplicate or excess payments</strong>, the
            participant must notify the organizing team with payment proof.
            After verification, the duplicate amount may be refunded.
          </li>

          <li>
            Refund requests must be submitted through the official email with
            payment details, transaction ID, and participant information.
          </li>

          <li>
            Approved refunds will be processed within
            <strong> 7–10 working days</strong> and will be credited to the
            original payment method whenever possible.
          </li>

          <li>
            Payment gateway charges, bank processing fees, or transaction
            charges may be deducted from the refundable amount if applicable.
          </li>

          <li>
            The decision of the SRUJANA 2026 organizing committee regarding
            refund eligibility will be final.
          </li>

        </ul>

        <p className="mt-8 text-gray-300">
          For refund-related queries or requests, please contact:
        </p>

        <p className="font-semibold mt-2 text-white">
          savishkarandhrapradesh@gmail.com
        </p>

      </div>

    </div>
  );
}
