import "./userList.css";
import { useState } from "react";
import {useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../../redux/apiCalls";
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { DeleteOutline } from "@material-ui/icons";
import { deleteUser } from "../../../redux/apiCalls";



export default function UserList() {

  const dispatch = useDispatch();
  const users = useSelector((state)=>state.getUser.users)


    useEffect(()=>{
  
      getUsers(dispatch).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
  
    },[dispatch])
  


  const [data, setData] = useState(users);

  const handleDelete = (id,index) => {
    

    if(index.isAdmin)
     {
       alert("you cannot delete the admin")
     }
     else{
        deleteUser(id,dispatch).then(()=>{alert("user deleted")});

     }


};
  
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
    },{
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id,params.row)}
            />
          </>
        );
      },
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
