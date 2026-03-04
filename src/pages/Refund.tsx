export default function RefundPolicy() {
  return (
    <div className="min-h-screen pt-24 bg-black/50 flex items-start justify-center p-6">

      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-4xl w-full text-slate-800">

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-indigo-600 font-medium underline"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center">
          Refund Policy – SRUJANA 2026
        </h1>

        <p className="mb-4">
          This Refund Policy applies to all registrations made for events under
          SRUJANA 2026 – State Level Technical Innovation and Project Exhibition.
          By completing registration and payment, participants agree to the
          refund conditions described below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Registration Fees
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>All registration fees are collected to support the organization of the event.</li>
          <li>Payment once made is considered confirmation of participation.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. No Refund Policy
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Registration fees once paid are generally <b>non-refundable</b>.</li>
          <li>Participants who fail to attend the event will not be eligible for a refund.</li>
          <li>Refund requests based on personal reasons will not be accepted.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Duplicate Payments
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>If a participant accidentally makes multiple payments for the same registration, the extra payment may be eligible for refund.</li>
          <li>Participants must contact the organizers within 5 days with proof of payment.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Event Cancellation
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>If the event is cancelled by the organizers due to unforeseen circumstances, participants may receive a refund or alternative participation options.</li>
          <li>In case of schedule changes, refunds may not be applicable.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Payment Gateway Issues
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>If payment is deducted but registration confirmation is not received, participants should contact the organizers.</li>
          <li>After verification, the issue will be resolved or refunded if necessary.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Contact for Refund Queries
        </h2>

        <p>
          For any payment or refund related queries, please contact:
        </p>

        <p className="mt-2 font-medium">
          savishkarandhrapradesh@gmail.com
        </p>

      </div>

    </div>
  );
}
