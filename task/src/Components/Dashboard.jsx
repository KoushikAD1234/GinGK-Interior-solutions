import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="logo_div">
        <img className="logo" src="/images/logo.png" alt="" />
      </div>
      <div className="menu">
        <div className="menu_head">Menu</div>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "#545e6f",
            fontWeight: isActive ? "bold" : "inherit"
          })}
          to="/main"
          activeClassName="active"
          className="link "
        >
          <SpeedIcon className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/userm" activeClassName="active" className="link">
          <PersonOutlineOutlinedIcon className="icon " />
          User Management
          <AddOutlinedIcon className="plus1" />
        </NavLink>
        <NavLink to="/customer" activeClassName="active" className="link ">
          <PeopleAltOutlinedIcon className="icon" />
          Customer Relationship
        </NavLink>
        <NavLink to="/content" activeClassName="active" className="link ">
          <InsertDriveFileOutlinedIcon className="icon" />
          Content Management
          <AddOutlinedIcon className="plus2" />
        </NavLink>
        <NavLink to="/showcase" activeClassName="active" className="link ">
          <WidgetsOutlinedIcon className="icon" />
          Showcase Management
          <AddOutlinedIcon className="plus3" />
        </NavLink>
        <NavLink to="/homeService" activeClassName="active" className="link ">
          <CottageOutlinedIcon className="icon" />
          Home Service Management
          <AddOutlinedIcon className="plus4" />
        </NavLink>
        <NavLink to="/market" activeClassName="active" className="link ">
          <StorefrontOutlinedIcon className="icon" />
          Market Place Management
          <AddOutlinedIcon className="plus5" />
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "#545e6f",
            fontWeight: isActive ? "bold" : "inherit"
          })}
          to="/main2"
          activeClassName="active"
          className="link "
        >
          <BookmarkBorderOutlinedIcon className="icon" />
          Permission and Role
        </NavLink>
        <NavLink to="/settings" activeClassName="active" className="link ">
          <SettingsOutlinedIcon className="icon" />
          Settings
        </NavLink>
      </div>

      {/* <div className="logout"> */}
      <NavLink to="/" className="logout">
        <PowerSettingsNewIcon className="logout_icon" />
        <div className="text">LOGOUT</div>
      </NavLink>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
