import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { adminSignOut } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux"; 

export default function Topbar() {

const dispatch = useDispatch();
  const navigate = useNavigate();


const handleClick =()=>{

   adminSignOut(dispatch);
  navigate('/adminlogin');
  
}


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link to={"/adminhome"} style={{textDecoration:"none"}}>
            <span className="logo">Mercadmin</span>
        </Link>
        </div>
        
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <button className="logoutButton" onClick={handleClick}>LogOut</button>

          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />

        </div>
      </div>
    </div>
  );
}
