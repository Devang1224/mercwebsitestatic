import { Link, Redirect, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { adminUserRequest } from "../../../requestMethod";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { updateProduct } from "../../../redux/apiCalls";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";



export default function AdminProduct() {



const dispatch= useDispatch();
const location = useLocation();
const productId  = location.pathname.split("/")[3];

const [pstats,setPstats] = useState([])
const [updProduct,setUpdProduct] = useState([])
const [file,setFile] = useState(null)


const[fileErrorMsg,setFileErrorMsg] = useState('')


const product = useSelector((state)=> state.product.products.find((p)=>p._id===productId));

const MONTHS = useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],[]
  )

useEffect(()=>{

const getStats = async ()=>{

    try
    {
        const res = await adminUserRequest.get("/orders/income?pid="+productId);
        const list = res.data.sort((a,b)=>a._id - b._id)
        list.map((item)=>
        setPstats((prev)=>[  
            ...prev,{name:MONTHS[item._id-1],Sales:item.total}
        ]))
    }
    catch(err){}
        
   
}
 getStats()
},[productId,MONTHS])

console.log(pstats);

const handleInput = (e)=>{
   
  const inputValue = e.target.value;
  if (inputValue.trim() === '') {

  }
   else{ 
    setUpdProduct((prev)=>{
        return {...prev,[e.target.name]:e.target.value};
    })
  }

}

const handleClick = async (e)=>
{
     e.preventDefault();

  if(file)
  {
  const fileName = new Date().getTime() + file.name;
 
  const storage = getStorage(app);
  
  const storageRef = ref(storage,fileName);
  
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', 
  (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {

    console.log(error);

  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const updatedProduct =  {...updProduct,img:downloadURL};
      const id = product._id;
      updateProduct(id,updatedProduct,dispatch);
      <redirect to="/"/>
    });
  }


);
  }
  else{
    setFileErrorMsg("please provide a file")
  }

}



  return (

    <>
    <Topbar />
    <div className="container">
    <Sidebar />

    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/adminhome/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={pstats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock?"Yes":"No"}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input name="title" type="text"  onChange={handleInput} />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock" onChange={handleInput}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  <label>Product Description</label>
                  <input type="text" name="desc" onChange={handleInput}/>
                  <label>Price</label>
                  <input type="text" name="price"  onChange={handleInput}/>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label htmlFor="file" style={{cursor:"pointer"}}>
                          <Publish/>
                      </label>
                      <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                  </div>
                  <button className="productButton" onClick={handleClick}>Update</button>
              </div>
          </form>

          {fileErrorMsg && <p style={{ color: 'red',textAlign:'center' }}>{fileErrorMsg}</p>}
        </div>
     </div>
    </div>
    
    </>
  );
}
