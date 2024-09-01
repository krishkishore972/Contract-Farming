import React from "react";

function Cards() {
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-4">
            <div className="card mt-5" style={{ width: "18rem" }}>
              <img
                src="Images/farming.png"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card mt-5" style={{ width: "18rem" }}>
              <img
                src="Images/farming.png"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card mt-5" style={{ width: "18rem" }}>
              <img
                src="Images/farming.png"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
