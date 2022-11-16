function Profile({ users }) {
  const work = users.map((user) => {
    return (
      <div className="text-lg  flex justify-center font-bold bg-[#f8f8f8]">
        <ul key={user.work}>
          <li key={user.work.Company}>
            Company:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {" "}
              {user.work.Company}
            </div>
          </li>

          <li key={user.work.position}>
            Postion:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {" "}
              {user.work.position}{" "}
            </div>
          </li>
          <li key={user.work.Location}>
            Postion:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {" "}
              {user.work.Location}
            </div>
          </li>
          <li key={user.work.EmplomentType}>
            Emploment Type:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {" "}
              {user.work.EmplomentType}{" "}
            </div>
          </li>
          <li key={user.work.EmplomentDate}>
            Emploment Date:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {" "}
              {user.work.EmplomentDate}
            </div>
          </li>
        </ul>
      </div>
    );
  });

  const education = users.map((user) => {
    return (
      <div className="text-lg  flex justify-center font-bold bg-[#f8f8f8]">
        <ul key={user.education}>
          <li key={user.education.University}>
            University:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {" "}
              {user.education.University}{" "}
            </div>
          </li>
          <li key={user.education.Major}>
            Major:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {" "}
              {user.education.Major}{" "}
            </div>
          </li>
          <li key={user.education.EducationDate}>
            Graduation Date:{" "}
            <div className="text-slate-500 hover:text-orange-600 text-md">
              {user.education.EducationDate}{" "}
            </div>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-lg  flex justify-left  font-bold font-weight: 700 bg-[#f8f8f8]">
        User Profile
      </h1>
      <h2 className="text-lg  flex justify-left font-bold bg-[#f8f8f8]">
        Work Experience
      </h2>
      {work}
      <h2 className="text-lg  flex justify-left font-bold bg-[#f8f8f8]">
        Education
      </h2>
      {education}
    </>
  );
}
export default Profile;
