import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../../redux/apiCalls";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function AdminProductList() {


const dispatch = useDispatch();
const products = useSelector((state)=> state.product.products)


  useEffect(()=>{

    getProducts(dispatch);

  },[dispatch])

const handleDelete = (id)=>{
  
  // deleteProduct(id,dispatch)

alert("As it is in test mode, the product is not deleted from the database.")


}


  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/adminhome/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
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
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId = {(row)=>row._id}
        
      />
     </div>
    </div>
    </>
  );
}
