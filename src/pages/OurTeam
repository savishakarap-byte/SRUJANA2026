import React from "react";

export default function OurTeam() {

  const organizingCommittee = [
    {
      name: "Prof. M.Nagaphani Shastry",
      designation: "Department Of Mechanical Engineering",
      college: "Pulla Reddy College of Engineering,Kurnool",
      photo: "/team/nagaphani.jpg"
    },
    {
      name: "Dr. Amarendra Reddy",
      designation: "HoD & Asst.Prof.,Department of School of Sciences",
      college: "National Institute of Technology",
      photo: "/team/lakshmi.jpg"
    }
  ];

  const studentCoordinators = [
    {
      name: "Gangadhar Kurumalla",
      college: "University College of Engineering, ANU",
      phone: "9123456780",
      photo: "/team/gangadhar.jpg"
    },
    {
      name: "Sai Teja",
      college: "University College of Engineering, ANU",
      phone: "9345678901",
      photo: "/team/saiteja.jpg"
    },
    {
      name: "Harsha",
      college: "University College of Engineering, ANU",
      phone: "9012345678",
      photo: "/team/harsha.jpg"
    }
  ];



  /* Organizing Committee Card */

  const OrganizingCard = ({ member }) => (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-xl transition p-6 text-center">

      <img
        src={member.photo}
        alt={member.name}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
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
    <div className="bg-white border rounded-xl shadow-md hover:shadow-xl transition p-6 text-center">

      <img
        src={member.photo}
        alt={member.name}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
      />

      <h3 className="text-lg font-bold text-gray-900">
        {member.name}
      </h3>

      <p className="text-gray-600 text-sm mt-1">
        {member.college}
      </p>

      <a
        href={`tel:${member.phone}`}
        className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-500"
      >
        📞 {member.phone}
      </a>

    </div>
  );



  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Our Team
      </h1>


      {/* Organizing Committee */}

      <section className="mb-16">

        <h2 className="text-2xl font-bold text-black mb-8">
          Organizing Committee
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {organizingCommittee.map((member, index) => (
            <OrganizingCard key={index} member={member} />
          ))}

        </div>

      </section>



      {/* Student Coordinators */}

      <section>

        <h2 className="text-2xl font-bold text-black mb-8">
          Student Coordinators
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {studentCoordinators.map((member, index) => (
            <StudentCard key={index} member={member} />
          ))}

        </div>

      </section>

    </div>
  );
}
