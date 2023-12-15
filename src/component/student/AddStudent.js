import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddStudent = () => {
  let navigate = useNavigate();
  const [student, setStudents] = useState({
    firstName: "",
    lasstName: "",
    email: "",
    department: "",
  });
  const { firstName, lasstName, email, department } = student;

  const handleInputChange = (e) => {
    setStudents({ ...student, [e.target.name]: e.target.value });
  };
  const savedStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students", student);
    navigate("/view-students");
  };

  return (
    <div className="col-sm-8 py-2 px-5">
      <h2 className="mt-5">Add Student</h2>
      <form onSubmit={(e) => savedStudent(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lasstName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lasstName"
            id="lasstName"
            required
            value={lasstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Your Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-4">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
