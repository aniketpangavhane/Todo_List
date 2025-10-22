import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>TODO</b></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">SignUp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">SignIn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">LogOut</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    alt="User Icon"
                    style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
