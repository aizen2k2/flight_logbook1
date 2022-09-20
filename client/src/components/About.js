import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

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
      console.log(res);
      const data = await res.json();
      console.log(data);
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
                <form method="GET">
                <div className="row">
                       

                         <div className="col-md-6">
                            <div className="profile-head">
                               
                               


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                   <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                       <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Display Logbook</a>
                    
                                    </li>
                                </ul>
                           </div>
                        </div>

                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="New Entry" />
                        </div>
                    </div>
                   



                    <div className="row">
                        {/* left side url  */}
                        <div className="col-md-4">
                            <div className="profile-work">
                              
                                
                            </div>
                        </div> 

                        {/* right side data toogle  */}

                     <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                       
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <p>{ userData.name}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userData.email}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userData.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Organisation</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userData.organisation}</p>
                                            </div>
                                        </div>
                            </div>
                           
                        </div>
                    </div>
                    </div>

                </form>
           </div>
        </>
    )
}

export default About;
