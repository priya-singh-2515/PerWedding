import React from "react";

const Footercontact = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(115,153,115)" }}
      className="container-fluid py-4"
    >
      <div className="row pt-5">
        <div
          style={{ fontSize: "30px", color: "white" }}
          className="col-sm-12 text-center my-3"
        >
          READY TO GET STARTED?
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-sm-12 text-center my-3">
          <button
            style={{
              backgroundColor: "transparent",
              color: "white",
              fontWeight: "bold",
              border: "1px solid white",
              padding: "13px 30px",
            }}
          >
            CONTACT US{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footercontact;
