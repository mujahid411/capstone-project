import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ask = () => {
  const [selectedOption, setSelectedOption] = useState("student");
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected option:", selectedOption);
    if (selectedOption == "instructor") {
      navigate("/teacherRegister");
    } else {
      navigate("/studentRegister");
    }
    // Add your submission logic here
  };
  return (
    <>
      <div
        id="flex-container"
        className="h-screen bg-white"
        style={{ width: "100%", height: "100%" }}
      >
        <div style={{ marginTop: "15%" }} className="h-screen">
          <div
            style={{
              fontSize: "1.5rem",
              marginBottom: "10%",
              marginLeft: "1%",
            }}
            className="text-black"
          >
            Choose Your Role ⬇️
          </div>
          <a
            href="/studentRegister"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none  "
            style={{
              margin: "2rem",
              display: "inline-block",
              padding: "1rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            STUDENT
          </a>
          <a
            href="/teacherRegister"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none  "
            style={{
              margin: "2rem",
              display: "inline-block",
              padding: "1rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            INSTRUCTOR
          </a>
        </div>
      </div>
    </>
  );
};

export default Ask;
