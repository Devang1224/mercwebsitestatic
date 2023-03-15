import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest,adminUserRequest } from "../../../requestMethod";
import { Link } from "react-router-dom";

export default function WidgetSm() {

const [users,setUsers] = useState([])

useEffect(()=>{
  const getUsers = async ()=>{
   try{
    const res = await adminUserRequest.get("users/?new=true")
     setUsers(res.data)
   }
   catch(err){

   }

  }
  getUsers();

},[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(
        <li className="widgetSmListItem" key={user.id}>
          <img
            src={user.img || "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <Link to="/adminhome/users" style={{textDecoration:'none'}}>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />  
            Display
          </button>
          </Link>
        </li>)
     )}
      </ul>
    </div>
  );
}
