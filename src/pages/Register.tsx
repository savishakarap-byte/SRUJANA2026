import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzCxbPSlzIXNXDXPPucNK1TzCCR7lTgIZreXAIFssjcI_qWcy99WM3gV8oqoLiZBXV/exec";

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
  "Industry institute interaction": { individual: 1 }, // ✅ only individual
};
export default function Register() {

  const [participationType, setParticipationType] = useState("Individual");
  const [teamCount, setTeamCount] = useState(3);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [emailError, setEmailError] = useState("");
const isOnlyIndividualEvent =
  selectedEvent === "Industry institute interaction";
  
useEffect(() => {
  if (isOnlyIndividualEvent) {
    setParticipationType("Individual");
  }
}, [selectedEvent]);

  const participants =
    participationType === "Individual" ? 1 : teamCount;

  

 const totalAmount =
  eventPricing[selectedEvent]?.[
    participationType === "Individual" ? "individual" : "team"
  ] || 0;

  const razorpayFeePercent = 2.36;

  const transactionFee =
    totalAmount > 0 ? totalAmount * (razorpayFeePercent / 100) : 0;

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

  const handlePayment = (form: any) => {

  // ✅ Extract values BEFORE Razorpay opens
  const formData = new FormData(form);

  const safeForm = {
    fullName: formData.get("fullName")?.toString().trim(),
    email: formData.get("email")?.toString().trim().toLowerCase(),
    mobile: formData.get("mobile")?.toString().trim(),
    college: formData.get("college")?.toString().trim(),
    department: formData.get("department")?.toString().trim(),
    title: formData.get("title")?.toString().trim() || "",
    teamName: formData.get("teamName")?.toString().trim() || "",

    members: participationType === "Team"
      ? [...Array(teamCount - 1)].map((_, i) => ({
          name: formData.get(`memberName${i}`)?.toString().trim(),
          mobile: formData.get(`memberMobile${i}`)?.toString().trim(),
          department: formData.get(`memberDept${i}`)?.toString().trim(),
        }))
      : []
  };

  setLoading(true);

  const options = {
    key: RAZORPAY_KEY,
    amount: Math.round(finalAmount * 100),
    currency: "INR",
    name: "SRUJANA 2026",
    description: selectedEvent,

    handler: function (response) {
      console.log("PAYMENT SUCCESS:", response);

      submitToBackend(response.razorpay_payment_id, safeForm);
    },

    prefill: {
      name: safeForm.fullName,
      email: safeForm.email,
      contact: safeForm.mobile,
    },

    theme: { color: "#4f46e5" },
  };

  const rzp = new (window as any).Razorpay(options);

  rzp.on("payment.failed", () => {
    alert("Payment failed");
    setLoading(false);
  });

  rzp.on("modal.closed", () => {
    setLoading(false);
  });

  rzp.open();
};

const submitToBackend = async (paymentId, form) => {

  setLoading(true);

  

  const payload = {
  eventType: selectedEvent,
  title: form.title || "",
  participationType,
  teamName: form.teamName || "",
  leadName: form.fullName,
  leadEmail: form.email,
  leadMobile: form.mobile,
  college: form.college,
  department: form.department,
  members: form.members || [],
  totalParticipants: participants,
  feePerPerson: totalAmount,
  totalAmount,
  paymentId,
};
try {
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  console.log("RESPONSE:", data);

  if (data.status === "success") {
    setRegistrationId(data.registrationId);
    setSubmitted(true);
    setLoading(false);
    return;
  } else {
    alert("Registration failed");
  }

} catch (err) {
  console.error("FINAL ERROR:", err);
  alert("Server error");
}

setLoading(false);
};   // ✅ THIS WAS MISSING
 
const handleSubmit = async (e) => {

  e.preventDefault();

  if (loading) return;

  if (!agreed) {
    alert("Accept Terms");
    return;
  }

  if (!selectedEvent) {
    alert("Select event");
    return;
  }

  const form = e.currentTarget;

  try {

  const res = await fetch(
  `${SCRIPT_URL}?email=${encodeURIComponent(form.email.value)}&eventType=${encodeURIComponent(selectedEvent)}`
);

const data = await res.json();

console.log("DUPLICATE CHECK:", data);

if (data.status === "already_registered") {
  alert("Already registered");
  return;
}
    handlePayment(form);

  } catch (err) {
    console.error("GET ERROR:", err);
    alert("Server unreachable");
  }
};

  if (submitted) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-slate-100">

        <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-md">

          <CheckCircle className="mx-auto mb-3 text-green-600" size={48}/>

          <h2 className="text-2xl font-bold text-gray-900">
            Registration Successful
          </h2>

          <p className="mt-2 text-gray-700">
            Registration ID: {registrationId}
          </p>

          <p className="mt-3 text-sm text-gray-600">

            For any queries contact:

            <br/>

            📧
            <a href="mailto:savishkarandhrapradesh@gmail.com"
            className="text-indigo-600 underline">
            savishkarandhrapradesh@gmail.com
            </a>

            <br/>

            📞
            <a href="tel:+919391905274"
            className="text-indigo-600 underline">
            +91 93919 05274
            </a>

            <br/>

            📞
            <a href="tel:+917288948217"
            className="text-indigo-600 underline">
            +91 72889 48217
            </a>

          </p>

          <button
            onClick={resetForm}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Back to Registration
          </button>

        </div>

      </div>

    );

  }

  return (

<div className="min-h-screen pt-24 bg-slate-100 flex flex-col">

<div className="flex-grow">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6">

{/* LEFT SIDE */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-2xl font-bold mb-4 text-gray-900">
Registration Instructions
</h2>

<ul className="space-y-3 text-gray-800 text-sm">

<li>• Select the event you want to participate in.</li>
<li>• Choose participation type (Individual or Team).</li>
<li>• For team participation choose team size.</li>
<li>• Enter accurate participant details.</li>
<li>• Title is required for model / paper / poster events.</li>
<li>• Maximum team size allowed is 4 members.</li>
<li>• Complete payment to confirm registration.</li>
<li>• Keep your registration ID for reference.</li>

</ul>
<h2 className="text-2xl font-bold mb-4 text-red-600">
The registration fee includes event entry, food and accommodation for three days, an official participant ID card, and event participation materials.</h2>

  <h2 className="text-2xl font-bold mb-4 text-orange-600">
PRIZE POOL REVISED TO 2LAKH </h2>

<div className="md:hidden mt-6 text-center text-indigo-600 font-medium">
⬇ Scroll down to registration
</div>

</div>

{/* RIGHT SIDE */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-2xl font-bold mb-6 text-gray-900">
SRUJANA 2026 Registration
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<select
required
value={selectedEvent}
onChange={(e)=>setSelectedEvent(e.target.value)}
className="input-modern"
>

<option value="">Select Event</option>

{eventOptions.map(e=>(
<option key={e}>{e}</option>
))}

</select>

<div className="flex gap-3">

<button
type="button"
onClick={()=>setParticipationType("Individual")}
className={`flex-1 py-2 rounded font-medium ${
participationType==="Individual"
? "bg-indigo-600 text-white"
: "bg-gray-200 text-gray-900"
}`}>
Individual
</button>

<button
  type="button"
  disabled={isOnlyIndividualEvent}
  onClick={() => setParticipationType("Team")}
  className={`flex-1 py-2 rounded font-medium ${
    participationType === "Team"
      ? "bg-indigo-600 text-white"
      : "bg-gray-200 text-gray-900"
  } ${isOnlyIndividualEvent ? "opacity-50 cursor-not-allowed" : ""}`}
>
  Team
</button>
</div>
{/* ✅ ADD HERE */}
{isOnlyIndividualEvent && (
  <p className="text-sm text-red-500">
    Only individual participation allowed for this event
  </p>
)}
{participationType==="Team" && !isOnlyIndividualEvent && (
<select
value={teamCount}
onChange={(e)=>setTeamCount(Number(e.target.value))}
className="input-modern"
>

<option value={3}>Team Size 3</option>
<option value={4}>Team Size 4</option>

</select>

)}

<input name="email" type="email" required placeholder="Email" className="input-modern"/>

<input name="fullName" required placeholder="Full Name" className="input-modern"/>

<input name="mobile" required pattern="[0-9]{10}" placeholder="Mobile Number" className="input-modern"/>

<input name="college" required placeholder="College Name" className="input-modern"/>

<input name="department" required placeholder="Department" className="input-modern"/>

{showTitleField && (

<input
name="title"
required
placeholder="Title of Project / Poster / Paper"
className="input-modern"
/>

)}

{participationType==="Team" && !isOnlyIndividualEvent && (
<>

<input name="teamName" placeholder="Team Name" className="input-modern"/>

{[...Array(teamCount-1)].map((_,i)=>(

<div key={i} className="grid grid-cols-3 gap-2">

<input name={`memberName${i}`} placeholder="Member Name" className="input-modern"/>

<input name={`memberMobile${i}`} placeholder="Mobile Number" className="input-modern"/>

<input name={`memberDept${i}`} placeholder="Department" className="input-modern"/>

</div>

))}

</>

)}

<div className="flex gap-2 text-sm text-gray-800">

<input type="checkbox"
checked={agreed}
onChange={()=>setAgreed(!agreed)}
/>

<span>

I agree to the{" "}

<Link to="/terms-and-conditions" className="underline text-indigo-600">
Terms & Conditions
</Link>

{" "}and{" "}

<Link to="/refund-policy" className="underline text-indigo-600">
Refund Policy
</Link>.

</span>

</div>

<button
  type="submit"
  disabled={loading}
  className="w-full py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
>
  {loading ? "Processing..." : totalAmount === 0 ? "Register Free" : `Pay ₹${totalAmount}`}
</button>

</form>

</div>

</div>
</div>

<div className="bg-slate-900 text-white mt-20">
<Footer/>
</div>

<style>{`
.input-modern{
width:100%;
padding:10px;
border:1px solid #cbd5e1;
border-radius:8px;
color:#0f172a;
background:#ffffff;
}
.input-modern::placeholder{
color:#475569;
}
footer{
background:#020617;
color:white;
}
`}</style>

</div>

  );

}
