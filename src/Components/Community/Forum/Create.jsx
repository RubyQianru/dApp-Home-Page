// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// export default function Create() {
//  const [form, setForm] = useState({
//    title: "",
//    user: "",
//    content: "",
//  });

//  const navigate = useNavigate();
//   // These methods will update the state properties.
//  function updateForm(value) {
//    return setForm((prev) => {
//      return { ...prev, ...value };
//    });
//  }
//   // This function will handle the submission.
//  async function onSubmit(e) {
//    e.preventDefault();
//     // When a post request is sent to the create url, we'll add a new record to the database.
//    const newPerson = { ...form };
//     await fetch("http://localhost:5050/record/add", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newPerson),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//    });
//     setForm({ title: "", user: "", content: "" });
//    navigate("/");
//  }
//   // This following section will display the form that takes the input from the user.
//  return (
//    <div>
//      <h3>Create New Record</h3>
//      <Button onSubmit={onSubmit}>
       
//      </Button>
//    </div>
//  );
// }