import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxzCxbPSlzIXNXDXPPucNK1TzCCR7lTgIZreXAIFssjcI_qWcy99WM3gV8oqoLiZBXV/exec";

const RAZORPAY_KEY = "rzp_live_SLGfXBZCuhyTza";

const eventOptions = [
  "Working model exhibition",
  "Paper presentation",
  "Poster presentation",
  "Hackathon",
  "Industry institute interaction",
];

const eventPricing = {
  "Working model exhibition": { individual: 200, team: 500 },
  "Paper presentation": { individual: 200, team: 500 },
  "Poster presentation": { individual: 200, team: 500 },
  "Hackathon": { individual: 200, team: 500 },
  "Industry institute interaction": { individual: 100 },
};

export default function Register() {
  const [participationType, setParticipationType] = useState("Individual");
  const [teamCount, setTeamCount] = useState(3);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isOnlyIndividualEvent =
    selectedEvent === "Industry institute interaction";

  useEffect(() => {
    if (isOnlyIndividualEvent) setParticipationType("Individual");
  }, [selectedEvent]);

  const participants =
    participationType === "Individual" ? 1 : teamCount;

  const totalAmount =
    eventPricing[selectedEvent]?.[
      participationType === "Individual" ? "individual" : "team"
    ] || 0;

  const razorpayFeePercent = 2.36;
  const transactionFee = totalAmount
    ? Math.ceil(totalAmount * (razorpayFeePercent / 100))
    : 0;

  const finalAmount = totalAmount + transactionFee;

  const showTitleField =
    selectedEvent === "Working model exhibition" ||
    selectedEvent === "Paper presentation" ||
    selectedEvent === "Poster presentation";

  const resetForm = () => {
    setSubmitted(false);
    setRegistrationId("");
    setParticipationType("Individual");
    setTeamCount(3);
    setSelectedEvent("");
    setAgreed(false);
  };

  const submitToBackend = async (paymentId, form) => {
    try {
      setLoading(true);

      const members = [];

      if (participationType === "Team") {
        for (let i = 0; i < teamCount - 1; i++) {
          members.push({
            name: form[`memberName${i}`]?.value?.trim() || "",
            mobile: form[`memberMobile${i}`]?.value?.trim() || "",
            department: form[`memberDept${i}`]?.value?.trim() || "",
          });
        }
      }

      const payload = {
        eventType: selectedEvent,
        title: form.title?.value?.trim() || "",
        participationType,
        teamName:
          participationType === "Team"
            ? form.teamName?.value?.trim()
            : "",
        leadName: form.fullName.value.trim(),
        leadEmail: form.email.value.trim().toLowerCase(),
        leadMobile: form.mobile.value.trim(),
        college: form.college.value.trim(),
        department: form.department.value.trim(),
        members,
        totalParticipants: participants,
        feePerPerson: totalAmount,
        totalAmount,
        paymentId,
      };

      const sendRequest = async () =>
        fetch(SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "text/plain" },
        });

      let res = await sendRequest();
      let data = await res.json();

      // retry once
      if (data.status !== "success") {
        await new Promise((r) => setTimeout(r, 1200));
        res = await sendRequest();
        data = await res.json();
      }

      if (data.status === "success") {
        setRegistrationId(data.registrationId);
        setSubmitted(true);
      } else {
        alert("⚠️ Payment done but registration failed. Contact support.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Contact support.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = (form) => {
    setLoading(true);

    const options = {
      key: RAZORPAY_KEY,
      amount: Math.round(finalAmount * 100),
      currency: "INR",
      name: "SRUJANA 2026",
      description: selectedEvent,

      handler: async function (response) {
        await submitToBackend(response.razorpay_payment_id, form);
      },

      prefill: {
        name: form.fullName.value,
        email: form.email.value,
        contact: form.mobile.value,
      },

      theme: { color: "#4f46e5" },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", () => {
      alert("Payment failed");
      setLoading(false);
    });

    rzp.on("modal.closed", () => {
      setLoading(false);
    });

    rzp.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!agreed) return alert("Accept Terms");
    if (!selectedEvent) return alert("Select event");

    const form = e.currentTarget;

    try {
      const res = await fetch(
        `${SCRIPT_URL}?email=${encodeURIComponent(
          form.email.value
        )}&eventType=${encodeURIComponent(selectedEvent)}`
      );

      const data = await res.json();

      if (data.status === "already_registered") {
        return alert("Already registered");
      }

      if (totalAmount === 0) {
        await submitToBackend("FREE_EVENT", form);
      } else {
        handlePayment(form);
      }
    } catch (err) {
      console.error(err);
      alert("Server unreachable");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-md">
          <CheckCircle className="mx-auto mb-3 text-green-600" size={48} />
          <h2 className="text-2xl font-bold">Registration Successful</h2>
          <p className="mt-2">ID: {registrationId}</p>

          <button
            onClick={resetForm}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-slate-100 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6">
          
          {/* LEFT */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <ul className="space-y-2 text-sm">
              <li>• Select event</li>
              <li>• Choose type</li>
              <li>• Enter details</li>
              <li>• Complete payment</li>
            </ul>

            <h2 className="text-orange-600 font-bold mt-4">
              PRIZE POOL 2 LAKH
            </h2>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-8 rounded-xl shadow">
            <form onSubmit={handleSubmit} className="space-y-4">

              <select
                required
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="input-modern"
              >
                <option value="">Select Event</option>
                {eventOptions.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>

              <input name="email" required placeholder="Email" className="input-modern" />
              <input name="fullName" required placeholder="Name" className="input-modern" />

              <button
                disabled={loading}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg"
              >
                {loading ? "Processing..." : `Pay ₹${totalAmount}`}
              </button>

            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
