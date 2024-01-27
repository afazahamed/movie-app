import React from "react";
import SidebarStyle from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import "boxicons";

const Sidebar = () => {
  return (
    <nav className={SidebarStyle.sidebar}>
      <ul>
        <li>
          <Link to="/" className={SidebarStyle.menu_item}>
            <box-icon type="regular" name="unite" color="#F7F7F7"></box-icon>
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/" className={SidebarStyle.menu_item}>
            <box-icon
              className={SidebarStyle.icon_hover_color}
              type="regular"
              name="home-smile"
              color="#F7F7F7"
            ></box-icon>
          </Link>
        </li>
        <li>
          <Link to="/search" className={SidebarStyle.menu_item}>
            <box-icon
              className={SidebarStyle.icon_hover_color}
              type="regular"
              name="search-alt"
              color="#F7F7F7"
            ></box-icon>
          </Link>
        </li>
        <li>
          <Link to="" className={SidebarStyle.menu_item}>
            <box-icon
              className={SidebarStyle.icon_hover_color}
              type="regular"
              name="star"
              color="#F7F7F7"
            ></box-icon>
          </Link>
        </li>
        <li>
          <Link to="" className={SidebarStyle.menu_item}>
            <box-icon
              className={SidebarStyle.icon_hover_color}
              type="regular"
              name="info-circle"
              color="#F7F7F7"
            ></box-icon>
          </Link>
        </li>
      </ul>
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link to="/" className="nav-link active">
    //             Home
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <h5 class="card-title">Harry Potter and the Chamber of Secrets</h5>
    // </nav>
  );
};

export default Sidebar;
