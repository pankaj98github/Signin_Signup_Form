import React, { useEffect, useState } from "react";

const Details = () => {
  const [logindata, setLoginData] = useState([]);

  var todayDate = new Date().toISOString().slice(0, 10);

  const Birthday = () => {
    const getUser = localStorage.getItem("user_signin");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser); //JSON.parse is help for getting the data in object form
      setLoginData(user);

      const userBirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userBirth) {
        setTimeout(() => {
           alert("Welcome to Details Page")
        }, 3000);
      }
    }
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "Error"
      ) : (
        <>
          <h1>Details Page</h1>
        </>
      )}
    </>
  );
};

export default Details;
