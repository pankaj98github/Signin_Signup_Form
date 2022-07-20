import React, { useState } from "react";
import Sign_img from "./Sign_img";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    name:"",
    email:"",
    date:"",
    password:""
  });

  const [data, setData] = useState([]);

  const getData = (e) => {

    const {value, name} = e.target;

    setInpval(() => {
      return{
        ...inpval,
        [name]:value
      }
    })
  }

  const addData = (e) => {
    e.preventDefault();
    
    const {name, email, date, password} = inpval;

    if(name === ""){
      alert("Name field is required!")
    }else if(email === ""){
      alert("Email field is required!")
    }else if(!email.includes("@")){
      alert("Please enter valid email address!")
    }else if(date === ""){
      alert("Date field is required!")
    }else if(password === ""){
      alert("Password field is required!")
    }else if(password.length < 5){
      alert("Password length is too short!")
    }else{
      navigate("/signin");

      localStorage.setItem("userdetails", JSON.stringify([...data,inpval]));
    }

  }

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6 mb-4">Sign UP</h3>
            <form>
            <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your name"
                  onChange={getData}
                  style={{border:"1px solid black"}}
                />
              </div>

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
                  style={{border:"1px solid black"}}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={getData}
                  style={{border:"1px solid black"}}
                />
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
                  style={{border:"1px solid black"}}
                />
              </div>
             
              <button type="submit" className="btn col-lg-6 mt-3" onClick={addData} style={{backgroundColor:"rgb(40, 223, 133)"}}>
                Submit
              </button>
            </form>
            <p className="mt-3">Already Have an Account <span><Link to="/signin">SignIN</Link></span></p>
          </div>
          <Sign_img/>
        </section>
      </div>
    </>
  );
};

export default Home;
