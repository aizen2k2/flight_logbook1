import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutContent from "./AboutContent";
import Entry from "./Entry";
import Entries from "./Entries";
const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [isForm, setIsForm] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    setIsForm(!isForm);
  };
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);

      if (res.status !== 200) {
        const error = res.error;
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-6">
            <div className="profile-head">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Display Logbook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value={isForm ? "See About" : "New Entry"}
              onClick={(e) => handleForm(e)}
            />
          </div>
        </div>

        <div className="row">
          {/* left side url  */}
          <div className="col-md-4">
            {isForm ? (
              <Entry />
            ) : (
              <AboutContent userData={userData}></AboutContent>
            )}
          </div>
          <Entries />

          {/* right side data toogle  */}

          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab" id="myTabContent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
