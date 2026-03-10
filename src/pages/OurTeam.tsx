import React from "react";

export default function OurTeam() {

  const organizingCommittee = [
    {
      name: "Prof. M. Nagaphani Shastry",
      designation: "Dept. of Mechanical Engineering",
      college: "Pulla Reddy College of Engineering, Kurnool",
      photo: "/team/nagaphani.jpg"
    },
    {
      name: "Dr. Amarendra Reddy",
      designation: "HoD & Asst. Prof., Dept. of School of Sciences",
      college: "National Institute of Technology (NIT), Andhra Pradesh",
      photo: "/team/amarendra.jpg"
    },
    {
      name: "Prof. A. Latha",
      designation: "M-Tech HoD, Dept. of CSE",
      college: "Maleneni Women’s College of Engineering, Guntur",
      photo: "/team/latha.jpg"
    },
    {
      name: "Prof. G. Giri Raja Sekhar",
      designation: "POP, Dept. of Marine Engineering",
      college: "Andhra University, Visakhapatnam",
      photo: "/team/girirajasekhar.jpg"
    },
    {
      name: "Prof. Ch. Kishore Reddy",
      designation: "Dept. of Mechanical Engineering",
      college: "Vikas Group of Institutions, Vijayawada",
      photo: "/team/kishorereddy.jpg"
    },
    {
      name: "Dr. G. Sivanatha Reddy",
      designation: "Asst. Prof., Dept. of Civil Engineering",
      college: "JNTUA College of Engineering, Pulivendula",
      photo: "/team/sivanathareddy.jpg"
    },
    {
      name: "Shri V. Ramanjaneyulu",
      designation: "Asst. Prof., Dept. of Chemical Engineering",
      college: "Jawaharlal Nehru Technological University, Anantapur (JNTUA)",
      photo: "/team/ramanjaneyulu.jpg"
    },
    {
      name: "Shri A. Vijaya Durga",
      designation: "Asst. Prof., Dept. of ECE",
      college: "Adikavi Nannaya University, Rajahmundry",
      photo: "/team/vijayadurga.jpg"
    },
    {
      name: "Shri Suluru Yachandra",
      designation: "Research Scholar",
      college: "Former Convenor, State Technical Cell, Andhra Pradesh",
      photo: "/team/yachandra.jpg"
    }
  ];

  const studentCoordinators = [
    {
      name: "Mohan Rao",
      college: "Acharya Nagarjuna University",
      phone: "9391905274",
      photo: "/team/mohan.jpg"
    },
    {
      name: "Hemanth",
      college: "M-Tech in Andhra University",
      phone: "7288948217",
      photo: "/team/hemanth.jpg"
    },
 {
      name: "Gangadhar",
      college: "Acharya Nagarjuna University",
      phone: "7036590780",
      photo: "/team/gangadhar.jpg"
    },

     {
      name: "Harsha",
      college: "Jawaharlal Nehru Technological University",
      phone: "6309707627",
      photo: "/team/harsha.jpg"
    },
    
    {
      name: "Bhanu",
      college: "Raghu College of Engineering",
      phone: "9182772107",
      photo: "/team/bhanu.jpg"
    },
    {
      name: "Ganesh",
      college: "Jawaharlal Nehru Technological University",
      phone: "9515230643",
      photo: "/team/ganesh.jpg"
    },
    {
      name: "Pushkarani",
      college: "Acharya Nagarjuna University",
      phone: "8977055445",
      photo: "/team/pushkarani.jpg"
    },
    {
      name: "Siddartha",
      college: "G. Pulla Reddy College of Engineering",
      phone: "6304053360",
      photo: "/team/siddartha.jpg"
    },
   
   
    {
      name: "Sai",
      college: "Jawaharlal Nehru Technological University",
      phone: "9392880426",
      photo: "/team/sai.jpg"
    },
    {
      name: "Manishankar",
      college: "Andhra University",
      phone: "6303544092",
      photo: "/team/manishankar.jpg"
    },
    {
      name: "Krishna Varma",
      college: "Pottisriramulu College of Engineering",
      phone: "9573118236",
      photo: "/team/krishnavarma.jpg"
    },
    {
      name: "Vamsi",
      college: "Geetam University",
      phone: "6304365959",
      photo: "/team/vamsi.jpg"
    },
    {
      name: "Manikanta",
      college: "Aditya University",
      phone: "9542945770",
      photo: "/team/manikanta.jpg"
    }
  ];


  /* Organizing Committee Card */

  const OrganizingCard = ({ member }) => (
    <div className="bg-white/90 backdrop-blur border rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition p-6 text-center">

      <img
        src={member.photo}
        alt={member.name}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 ring-4 ring-orange-200"
      />

      <h3 className="text-lg font-bold text-gray-900">
        {member.name}
      </h3>

      <p className="text-orange-600 font-semibold text-sm mt-1">
        {member.designation}
      </p>

      <p className="text-gray-600 text-sm mt-1">
        {member.college}
      </p>

    </div>
  );


  /* Student Coordinator Card */

  const StudentCard = ({ member }) => (
    <div className="bg-white/90 backdrop-blur border rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition p-6 text-center">

      <img
        src={member.photo}
        alt={member.name}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 ring-4 ring-blue-200"
      />

      <h3 className="text-lg font-bold text-gray-900">
        {member.name}
      </h3>

      <p className="text-gray-600 text-sm mt-1">
        {member.college}
      </p>

      <a
        href={`tel:${member.phone}`}
        className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-500 transition"
      >
        📞 {member.phone}
      </a>

    </div>
  );


  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

       <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-16 tracking-wide">
        Our Team
      </h1>

      <section className="mb-20">

        <div className="text-center mb-10">
<h2 className="text-2xl font-bold text-blue-900">
  Organizing Committee
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizingCommittee.map((member, index) => (
            <OrganizingCard key={index} member={member} />
          ))}
        </div>

      </section>

      <section>

        <div className="text-center mb-10">
<h2 className="text-2xl font-bold text-blue-900">
  Student Coordinators
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentCoordinators.map((member, index) => (
            <StudentCard key={index} member={member} />
          ))}
        </div>

      </section>

    </div>
  );
}
