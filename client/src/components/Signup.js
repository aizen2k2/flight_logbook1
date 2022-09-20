import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    password: "",
    cpassword: "",
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, organisation, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        organisation,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    // I need to change the data to res
    if (data.status === 422 || !data) {
      window.alert("INvalid Registration");
      console.log("INvalid Registration");
    } else {
      window.alert(" Registration Successfull");
      console.log("Successfull Registration");

      navigate("/login", { replace: true });
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone Number"
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="organisation">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    id="organisation"
                    autoComplete="off"
                    value={user.organisation}
                    onChange={handleInputs}
                    placeholder="Your Organisation"
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your Password"
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Your Password"
                  ></input>{" "}
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id=" signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
              <div className="signup-image">
                <Link to="/login" className="signup-image-link">
                  I am already registered
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
