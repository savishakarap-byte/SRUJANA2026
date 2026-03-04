export default function Terms() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen pt-24 bg-black/50 flex justify-center p-6 overflow-y-auto">

      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-4xl w-full text-slate-800">

        {/* Back Button */}
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
          organized to promote creativity, engineering skills, and innovation among
          students. By registering for any event under SRUJANA 2026, participants
          agree to comply with the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Participants must be students from recognized Diploma, Undergraduate, or Postgraduate institutions.</li>
          <li>A valid college ID card may be required during event verification.</li>
          <li>Participants must register through the official SRUJANA 2026 registration portal.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Registration Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registration is confirmed only after successful payment through the official website.</li>
          <li>Participants must provide accurate and complete information during registration.</li>
          <li>Incorrect or misleading information may lead to cancellation of registration.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Project / Model Exhibition Rules</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Projects presented must be original and developed by the participating team.</li>
          <li>Participants must bring all necessary equipment required for demonstration.</li>
          <li>Projects must not violate safety standards or cause harm to people or property.</li>
          <li>The organizing committee may reject projects that are unsafe or inappropriate.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Participants retain ownership of their project ideas and innovations.</li>
          <li>However, SRUJANA 2026 organizers may photograph, record, or document projects for academic and promotional purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Conduct and Discipline</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Participants must maintain professional conduct throughout the event.</li>
          <li>Any form of misconduct, plagiarism, or rule violation may lead to disqualification.</li>
          <li>The organizing committee’s decision regarding participation and results will be final.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Safety and Liability</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Participants are responsible for the safety of their equipment and materials.</li>
          <li>The organizers will not be responsible for loss, theft, or damage of personal belongings.</li>
          <li>Participants must follow venue safety guidelines and instructions.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Media and Photography</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>By participating, attendees consent to photography and video recording during the event.</li>
          <li>These materials may be used for promotional or documentation purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes and Modifications</h2>
        <p className="mb-4">
          The organizing committee reserves the right to modify event schedules,
          rules, or arrangements if required due to unforeseen circumstances.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
        <p>
          For any queries regarding SRUJANA 2026 registration or participation,
          please contact:
        </p>

        <p className="mt-2 font-medium">
          savishkarandhrapradesh@gmail.com
        </p>

      </div>

    </div>
  );
}
