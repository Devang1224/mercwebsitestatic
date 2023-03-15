import { useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { addProduct } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";


export default function NewProduct() {


const [inputs,setInputs] = useState([])
const [file,setFile] = useState(null)
const [cat,setCat] = useState([])
const dispatch = useDispatch()




const handleChange = (e)=>{

setInputs((prev)=>{
  return {...prev,[e.target.name]:e.target.value}
})

}

const handleCategory = (e)=>{

setCat(e.target.value.split(","));

}


const handleClick = async (e)=>{

  e.preventDefault();

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

  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const product =  {...inputs,img:downloadURL,categories:cat};
      addProduct(product,dispatch);
    });
  }
);


}



  return (

    <>
    <Topbar />
    <div className="container">

    <Sidebar />
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Apple Airpods"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input name="category" type="text" placeholder="jeans" onChange={handleCategory}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="description" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="100" onChange={handleChange}/>
        </div>
        
        <button onClick = {e=>handleClick(e)} className="addProductButton">Create</button>
      </form>
    </div>
    </div>
    </>
  );
}
