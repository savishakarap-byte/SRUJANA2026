import { useState } from "react";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-9VQlEbstvMUnRogVxPeRhZj1qz8bOyWJSL0E30lvy6i3jWJd8Mn1rLUBL5fAVvgfOA/exec";
const RAZORPAY_KEY = "rzp_live_SLGfXBZCuhyTza";

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
  "Hackathon": 1,
  "Industry institute interaction": 1,
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
  const [emailError, setEmailError] = useState("");

  const participants =
    participationType === "Individual" ? 1 : teamCount;

  const feePerPerson = eventPrices[selectedEvent] || 0;

  const totalAmount = participants * feePerPerson;

  const razorpayFeePercent = 2.36;
  const transactionFee = totalAmount * (razorpayFeePercent / 100);
  const finalAmount = totalAmount + transactionFee;

  const handlePayment = (form: any) => {

    const options = {
      key: RAZORPAY_KEY,
      amount: Math.round(finalAmount * 100),
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

      theme: { color: "#4f46e5" },
    };

    const rzp = new (window as any).Razorpay(options);

    rzp.on("payment.failed", () => {
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
          department: form[`memberDept${i}`].value,
        });

      }

    }

    const payload = {
      eventType: selectedEvent,
      title: form.title.value,
      participationType,
      teamName: participationType === "Team" ? form.teamName.value : "",
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
        headers: { "Content-Type": "text/plain" },
      });

      const data = await res.json();

      if (data.status === "success") {
        setRegistrationId(data.registrationId);
        setSubmitted(true);
      }

    } catch {
      alert("Network error.");
    }

    setLoading(false);

  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    if (!agreed) {
      alert("Accept Terms");
      return;
    }

    const form = e.currentTarget;

    const res = await fetch(
      `${SCRIPT_URL}?email=${encodeURIComponent(form.email.value)}&eventType=${encodeURIComponent(selectedEvent)}`
    );

    const data = await res.json();

    if (data.status === "already_registered") {
      setEmailError("Email already registered");
      return;
    }

    handlePayment(form);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-xl text-center">
          <CheckCircle className="mx-auto mb-3 text-green-600" size={48}/>
          <h2 className="text-2xl font-bold">Registration Successful</h2>
          <p>ID: {registrationId}</p>
        </div>
      </div>
    );
  }

  return (

<div className="min-h-screen pt-24 bg-slate-100">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6">

{/* LEFT SIDE INSTRUCTIONS */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-2xl font-bold mb-4">
Registration Instructions
</h2>

<ul className="space-y-3 text-gray-700 text-sm">

<li>• Select the event you want to participate in.</li>

<li>• Provide accurate personal details.</li>

<li>• For team events, add all member details.</li>

<li>• Maximum team size allowed is 4 members.</li>

<li>• Enter correct project / paper / poster title.</li>

<li>• Complete payment to confirm registration.</li>

<li>• You will receive a confirmation email.</li>

<li>• Keep your registration ID safe.</li>

</ul>

</div>

{/* RIGHT SIDE FORM */}

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-2xl font-bold mb-6">
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

<input
name="title"
required
placeholder="Project / Paper / Poster Title"
className="input-modern"
/>

<input name="fullName" required placeholder="Full Name" className="input-modern"/>

<input
name="email"
type="email"
required
placeholder="Email"
className="input-modern"
/>

<input
name="mobile"
required
pattern="[0-9]{10}"
placeholder="Mobile"
className="input-modern"
/>

<input name="college" required placeholder="College" className="input-modern"/>

<input name="department" required placeholder="Department" className="input-modern"/>

<div className="flex gap-3">

<button type="button"
onClick={()=>setParticipationType("Individual")}
className={`flex-1 py-2 rounded ${participationType==="Individual"?"bg-indigo-600 text-white":"bg-gray-200"}`}>
Individual
</button>

<button type="button"
onClick={()=>setParticipationType("Team")}
className={`flex-1 py-2 rounded ${participationType==="Team"?"bg-indigo-600 text-white":"bg-gray-200"}`}>
Team
</button>

</div>

{participationType==="Team" && (

<>
<input name="teamName" placeholder="Team Name" className="input-modern"/>

{[...Array(teamCount-1)].map((_,i)=>(
<div key={i} className="grid grid-cols-3 gap-2">

<input name={`memberName${i}`} placeholder="Name" className="input-modern"/>

<input name={`memberMobile${i}`} placeholder="Mobile" className="input-modern"/>

<input name={`memberDept${i}`} placeholder="Department" className="input-modern"/>

</div>
))}
</>

)}

<div className="flex gap-2 text-sm">

<input type="checkbox"
checked={agreed}
onChange={()=>setAgreed(!agreed)}
/>

<span>
I agree to the
<Link to="/terms-and-conditions" className="underline"> Terms</Link>
and
<Link to="/refund-policy" className="underline"> Refund Policy</Link>
</span>

</div>

<button
type="submit"
className="w-full py-3 bg-indigo-600 text-white rounded-lg"
>
Pay ₹{finalAmount.toFixed(2)}
</button>

</form>

</div>

</div>

<Footer/>

<style>{`
.input-modern{
width:100%;
padding:10px;
border:1px solid #cbd5e1;
border-radius:8px;
}
`}</style>

</div>

  );
}
