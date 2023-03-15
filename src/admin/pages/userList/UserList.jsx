import "./userList.css";
import { useState } from "react";
import {useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../../redux/apiCalls";
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";



export default function UserList() {

  const dispatch = useDispatch();
  const users = useSelector((state)=>state.getUser.users)


    useEffect(()=>{
  
      getUsers(dispatch);
  
    },[dispatch])
  


  const [data, setData] = useState(users);

  
  
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    

  ];

  return (

    <>
    <Topbar />
    <div className="container">

    <Sidebar />
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId = {(row)=>row._id}

      />
    </div>
    
    </div>
    </>
  );
}
