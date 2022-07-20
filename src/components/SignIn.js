import React, { useState } from "react";
import { useNavigate } from "react-router";
import Sign_img from "./Sign_img";

const SignIn = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("userdetails");

    const { email, password } = inpval;

    if (email === "") {
      alert("Email field is required!");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address!");
    } else if (password === "") {
      alert("Password field is required!");
    } else if (password.length < 5) {
      alert("Password length is too short!");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr); //JSON.parse is help for getting the data in object form
        const userSignin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userSignin.length === 0) {
          alert("Invalid Details!");
        } else {

            localStorage.setItem("user_signin", JSON.stringify(userSignin));

            navigate("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 mb-4">Sign IN</h3>
            <form>
              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  onChange={getData}
                  style={{ border: "1px solid black" }}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="password"
                  onChange={getData}
                  style={{ border: "1px solid black" }}
                />
              </div>

              <button
                type="submit"
                className="btn col-lg-6 mt-3"
                onClick={addData}
                style={{ backgroundColor: "rgb(40, 223, 133)" }}
              >
                Submit
              </button>
            </form>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default SignIn;
