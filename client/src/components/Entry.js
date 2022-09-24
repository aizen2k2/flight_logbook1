import React, { useState } from "react";
import axios from "axios";
const Entry = () => {
  const [newEntry, setNewEntry] = useState({
    date: "",
    name: "",
    departure: "",
    destination: "",
    aircraft: "",
    duration: "",
    secondP: "",
    thirdP: "",
    remarks: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newEntry);
    setIsSubmit(true);
    axios
      .post("/api/upload/", newEntry)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="sign-in">
        <div className="container ">
          <div className="signin-content">
            <div className="signin-image"></div>
            <div className="signin-form">
              <h2 className="form-title">New Entry</h2>
              <form
                onSubmit={handleSubmit}
                className="register-form"
                id="register-form"
              >
                <div className="form-group">
                  <label htmlFor="date"></label>
                  <input
                    type="date"
                    name="date"
                    id="name"
                    autoComplete="off"
                    placeholder="Date"
                    value={newEntry.date}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="name"
                    value={newEntry.name}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="departure"></label>
                  <input
                    type="text"
                    name="departure"
                    id="name"
                    autoComplete="off"
                    placeholder="departure"
                    value={newEntry.departure}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="destination"></label>
                  <input
                    type="text"
                    name="destination"
                    id="name"
                    autoComplete="off"
                    placeholder="destination"
                    value={newEntry.destination}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="aircraft"></label>
                  <input
                    type="text"
                    name="aircraft"
                    id="name"
                    autoComplete="off"
                    placeholder="SU-30 MKI"
                    value={newEntry.aircraft}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="duration"></label>
                  <input
                    type="time"
                    name="duration"
                    id="name"
                    autoComplete="off"
                    placeholder="00:00"
                    value={newEntry.duration}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="second name"></label>
                  <input
                    type="text"
                    name="secondP"
                    id="name"
                    autoComplete="off"
                    placeholder="Second Pilot(optional)"
                    value={newEntry.secondP}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="third name"></label>
                  <input
                    type="text"
                    name="thirdP"
                    id="name"
                    autoComplete="off"
                    placeholder="Third Pilot(optional)"
                    value={newEntry.thirdP}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group">
                  <label htmlFor="remarks"></label>
                  <input
                    type="text"
                    name="remarks"
                    id="name"
                    autoComplete="off"
                    placeholder="Remarks(optional)"
                    value={newEntry.remarks}
                    onChange={handleChange}
                  ></input>{" "}
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="entryin"
                    id=" signin"
                    className="form-submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {isSubmit ? "Your form has been Submitted" : null}
      </section>
    </>
  );
};

export default Entry;
