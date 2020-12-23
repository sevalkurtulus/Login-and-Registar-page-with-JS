import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({ value: { language: "EN", trackingId: "" }, show: false });

  const handleChange = (event) => {
    if (event.target.name === "language") {
      setState({ value: { language: event.target.value, trackingId: "" }, show: true });
    } else if (event.target.name === "trackingId") {
      setState((prevState) => ({
        value: { language: prevState.value.language, trackingId: event.target.value },
        show: prevState.show,
      }));
    }
  };
  console.log(state);
  // const handleSubmit = (e) => {
  //   fetch("https://outbox.rest/get/status", {
  //       method: "POST",
  //       body:
  //         {
  //           "AuthKey": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  //           "Language":`${state.value.language}`
  //           "TrackingID": `${state.value.trackingId}`
  //         },
  //       headers: {
  //           "Content-Type": "application/json"
  //       }
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })

  return (
    <div className="App">
      <h1 className="head">KREA Marketing Services, Inc.</h1>
      <div className="container">
        <form action="input" /*onSubmit={handleSubmit}*/>
          <div className="content">
            <h2>Please choose the language?</h2>
            <div className="question">
              <div className="answer">
                <input
                  type="radio"
                  id="question-1"
                  name="language"
                  value="EN"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label htmlFor="vehicle1">EN</label>
              </div>
              <div className="answer">
                <input
                  type="radio"
                  id="question-1"
                  name="language"
                  value="FR"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label htmlFor="vehicle2"> FR</label>
              </div>
              <div className="answer">
                <input
                  type="radio"
                  id="question-1"
                  name="language"
                  value="TR"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label htmlFor="vehicle3"> TR</label>
              </div>
            </div>
          </div>
          {state.show ? (
            <div className="content">
              <h2>Please enter the tracking ID?</h2>
              <div className="question">
                <div className="answer">
                  <input
                    className="trackingId-input"
                    type="text"
                    id="question-2"
                    name="trackingId"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </div>
            </div>
          ) : null}
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
