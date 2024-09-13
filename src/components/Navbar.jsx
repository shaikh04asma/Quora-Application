import {
  faBell,
  faPen,
  faPenToSquare,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import '../styles/navbarstyle.css'

function Navbar() {
  return (
    <div className="nav-container ">
      <nav className="navbar navbar-expand-lg  container d-flex justify-content-evenly z-1  ">
        <div className="container-fluid ">
          <a
            className="navbar-brand "
            href="#"
            style={{ color: "#bb0e0e", fontWeight: "bolder", fontSize: "29px" }}
          >
            Quora
          </a>
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
          <div
            className="collapse navbar-collapse link "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2   p-2 ">
              <li
                className="nav-item "
                style={{
                  borderBottom: "4px solid #bb0e0e",
                  borderRadius: "2px ",
                }}
              >
                <Link
                  className="nav-link active "
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faHouse}
                    style={{ color: "#bb0e0e" }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="icon" icon={faRectangleList} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="icon" icon={faPenToSquare} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to="Notify">
                  <FontAwesomeIcon className="icon" icon={faBell} />
                </Link>
              </li>
            </ul>

            <form className="d-flex search " role="search">
              <input
                className="form-control me-2 text-light bg-dark border-secondry search-input "
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "25rem", padding: "4px" }}
              />
            </form>

            <div
              className="btn-group ask-question  text-center "
              style={{
                height: "2.3rem",
                placeItems: "center",
                borderRadius: "15px",
                border: "none",
              }}
            >
              <button className="btn  btn-lg button " type="button">
                Ask Question
              </button>
              <button
                type="button"
                className="btn btn-lg  dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "3d02d2d" }}
              >
                <span className="visually-hidden ">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu text-light bg-dark text-center ">
                <a href="#" className="text-light bg-dark ">
                  <FontAwesomeIcon
                    className="text-light bg-dark"
                    icon={faPen}
                  />{" "}
                  create a post
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
