import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({ value: { phoneNumber: "", message: "" }, show: false });

  const handleChange = (event) => {
    if (event.target.name === "number") {
      setState({ value: { language: event.target.value, message: "" }, show: true });
    } else if (event.target.name === "message") {
      setState((prevState) => ({
        value: { phoneNumber: prevState.value.phoneNumber, message: event.target.value },
        show: prevState.show,
      }));
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const responseData = {
      AuthKey: "13c930c2-4f14-11ea-b0f5-42010a840313",
      MessageType: "SMS",
      Recipients: [
        {
          Recipient: `${state.value.phoneNumber}`,
          Content: `${state.value.message}`
        }
      ],
      SendAlways: 1,
      Priority: "FAST",
    };

    fetch("http://outbox.rest/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseData),
      "processData": false,
    })
      .then(response => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <h1 className="head">KREA Marketing Services, Inc.</h1>
      <div className="container">
        <form action="input" onSubmit={(event)=>handleSubmit(event)}>
          <div className="content">
            <h2>Please enter the phone number?</h2>
            <div className="question">
              <div className="answer">
                <label htmlFor="question-2">Please start to area code</label>
                <input
                  className="input"
                  type="text"
                  id="question-2"
                  name="number"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          {state.show ? (
            <div className="content">
              <h2>Please enter the message?</h2>
              <div className="question">
                <div className="answer">
                  <input
                    className="input"
                    type="text"
                    id="question-2"
                    name="message"
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
