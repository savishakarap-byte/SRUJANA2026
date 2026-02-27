import { useState } from "react";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-9VQlEbstvMUnRogVxPeRhZj1qz8bOyWJSL0E30lvy6i3jWJd8Mn1rLUBL5fAVvgfOA/exec";
const RAZORPAY_KEY = "rzp_live_SKqjeBnpm7GKTB";

const eventOptions = [
  "Working model exhibition",
  "Paper presentation",
  "Poster presentation",
  "Hackathon",
  "Industry institute interaction",
];

const eventPrices: Record<string, number> = {
  "Working model exhibition": 2,
  "Paper presentation": 1,
  "Poster presentation": 1,
  "Hackathon": 250,
  "Industry institute interaction": 100,
};

export default function Register() {
  const [participationType, setParticipationType] = useState("Individual");
  const [teamCount, setTeamCount] = useState(2);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const participants =
    participationType === "Individual" ? 1 : teamCount;

  const feePerPerson = eventPrices[selectedEvent] || 0;
  const totalAmount = participants * feePerPerson;

  const handlePayment = (form: any) => {
    setPaymentError("");

    if (!selectedEvent) {
      alert("Select event first");
      return;
    }

    const options = {
      key: RAZORPAY_KEY,
      amount: totalAmount * 100,
      currency: "INR",
      name: "SRUJANA 2026",
      description: selectedEvent,
      handler: async function (response: any) {
        await submitToBackend(response.razorpay_payment_id, form);
      },
      prefill: {
        name: form.fullName.value,
        email: form.email.value,
        contact: form.mobile.value,
      },
      theme: {
        color: "#4f46e5",
      },
    };

    const rzp = new (window as any).Razorpay(options);

    // 🔴 Payment Failure Handling
    rzp.on("payment.failed", function (response: any) {
      setPaymentError("Payment failed. Please try again.");
      setLoading(false);
    });

    rzp.open();
  };

  const submitToBackend = async (paymentId: string, form: any) => {
    setLoading(true);

    const members: any[] = [];

    if (participationType === "Team") {
      for (let i = 0; i < teamCount - 1; i++) {
        members.push({
          name: form[`memberName${i}`].value,
          mobile: form[`memberMobile${i}`].value,
        });
      }
    }

    const payload = {
      eventType: selectedEvent,
      participationType,
      teamName:
        participationType === "Team" ? form.teamName.value : "",
      leadName: form.fullName.value,
      leadEmail: form.email.value,
      leadMobile: form.mobile.value,
      college: form.college.value,
      department: form.department.value,
      members,
      totalParticipants: participants,
      feePerPerson,
      totalAmount,
      paymentId,
    };

    try {
      const res = await fetch(SCRIPT_URL, {
  method: "POST",
  body: JSON.stringify(payload),
  headers: {
    "Content-Type": "text/plain",
  },
});

      const data = await res.json();

      if (data.status === "success") {
        setRegistrationId(data.registrationId);
        setSubmitted(true);
      } else if (data.status === "duplicate_payment") {
        alert("Duplicate payment detected.");
      } else if (data.status === "event_full") {
        alert("Event capacity full.");
      } else {
        alert("Submission error.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    handlePayment(e.currentTarget);
  };

  const retryPayment = (form: any) => {
    handlePayment(form);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md">
          <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
          <h2 className="text-2xl font-bold mb-2">Registration Successful</h2>
          <p>Registration ID: <b>{registrationId}</b></p>
          <p className="text-gray-600">
            Confirmation email sent successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-100 to-blue-200 relative">

      {/* 🔵 Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl flex items-center gap-3 shadow-xl">
            <div className="w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="font-medium">Processing payment...</span>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          SRUJANA 2026 Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <select
            required
            className="input-modern"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="">Select Event</option>
            {eventOptions.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>

          <div className="flex gap-4">
            {["Individual", "Team"].map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setParticipationType(type)}
                className={`flex-1 py-2 rounded ${
                  participationType === type
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {participationType === "Team" && (
            <select
              className="input-modern"
              value={teamCount}
              onChange={(e) => setTeamCount(Number(e.target.value))}
            >
              {[2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} Members
                </option>
              ))}
            </select>
          )}

          <input name="fullName" required placeholder="Full Name" className="input-modern" />
          <input name="email" type="email" required placeholder="Email" className="input-modern" />
          <input name="mobile" required pattern="[0-9]{10}" placeholder="Mobile" className="input-modern" />
          <input name="college" required placeholder="College" className="input-modern" />
          <input name="department" required placeholder="Department" className="input-modern" />

          {participationType === "Team" && (
            <>
              <input name="teamName" required placeholder="Team Name" className="input-modern" />
              {[...Array(teamCount - 1)].map((_, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  <input
                    name={`memberName${i}`}
                    required
                    placeholder={`Member ${i + 1} Name`}
                    className="input-modern"
                  />
                  <input
                    name={`memberMobile${i}`}
                    required
                    pattern="[0-9]{10}"
                    placeholder={`Member ${i + 1} Mobile`}
                    className="input-modern"
                  />
                </div>
              ))}
            </>
          )}

          <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-xl text-center shadow-sm">
            <p>Fee per person: ₹{feePerPerson}</p>
            <p className="font-bold text-lg">Total: ₹{totalAmount}</p>
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2 text-sm mt-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />
            <span>
              I agree to the{" "}
              <Link to="/terms-and-conditions" className="underline text-primary">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/refund-policy" className="underline text-primary">
                Refund Policy
              </Link>.
            </span>
          </div>

          {paymentError && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
              {paymentError}
              <button
                type="button"
                onClick={(e) => retryPayment((e.currentTarget.form))}
                className="ml-2 underline font-medium"
              >
                Retry Payment
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !agreed}
            className={`w-full py-3 rounded-xl text-white ${
              loading || !agreed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Processing..." : `Pay ₹${totalAmount}`}
          </button>

        </form>
      </div>

      <Footer />

     .input-modern {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 15px;
  color: #1e293b;
  background: #ffffff;
  transition: all 0.2s ease;
}

.input-modern::placeholder {
  color: #64748b;
  opacity: 1;
}

.input-modern:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}
  );
}
