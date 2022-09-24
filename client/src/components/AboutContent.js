import React from "react";

const AboutContent = ({ userData }) => {
  return (
    <div className="profile-work">
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="row mt-3">
          <div className="col-md-6">
            <p>Name: </p>
          </div>
          <div className="col-md-6 ">
            <p>{userData.name}</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <p>Email: </p>
          </div>
          <div className="col-md-6">
            <p>{userData.email}</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <p>Phone: </p>
          </div>
          <div className="col-md-6">
            <p>{userData.phone}</p>
          </div>
        </div>
        <div className="row mt-3 d-flex">
          <div className="col-md-6">
            <p>Organisation: </p>
          </div>
          <div className="col-md-6">
            <p>{userData.organisation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
