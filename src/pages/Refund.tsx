export default function RefundPolicy() {

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
          Refund Policy – SRUJANA 2026
        </h1>

        <p className="mb-4">
          This Refund Policy applies to registrations made for SRUJANA 2026.
          By completing payment, participants agree to the refund conditions
          mentioned below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Registration Fees
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Registration fees support event organization.</li>
          <li>Payment confirms participation.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. No Refund Policy
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Fees once paid are generally non-refundable.</li>
          <li>No refunds for non-attendance.</li>
          <li>Refunds will not be issued for personal reasons.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Duplicate Payments
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Duplicate payments may be refunded after verification.</li>
          <li>Participants must contact organizers within 5 days.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Event Cancellation
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>If the event is cancelled by organizers, refunds may be issued.</li>
          <li>Schedule changes may not qualify for refunds.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Payment Issues
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>If payment is deducted but registration fails, contact organizers.</li>
          <li>Issues will be verified and resolved.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Contact for Refund Queries
        </h2>

        <p className="mt-2 font-medium">
          savishkarandhrapradesh@gmail.com
        </p>

      </div>

    </div>
  );
}
