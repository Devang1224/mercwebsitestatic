import { useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { addProduct } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { CircularProgress } from '@material-ui/core'


export default function NewProduct() {


const [inputs,setInputs] = useState([])
const [urls,setUrls] = useState([])
const[file,setFile] = useState([])
const [cat,setCat] = useState([])
const[size,setSize] = useState([])
const[isCreating,setIsCreating] = useState(false)
const dispatch = useDispatch()




const handleChange = (e)=>{

setInputs((prev)=>{
  return {...prev,[e.target.name]:e.target.value}
})

}

const handleSize =(e)=>{
  setSize(e.target.value.split(","));
}

const handleCategory = (e)=>{

setCat(e.target.value.split(","));

}


const handleFile = (e)=>{

  for(let i=0;i<e.target.files.length;i++)
    { console.log(e.target.files[i]);
      setFile((prev)=>[...prev,e.target.files[i]]);
    }
}

const handleFileUploadButton=(e)=>{
  e.preventDefault();
  for(let i=0;i<file.length;i++)
   handleFileUpload(file[i])
}

const handleFileUpload= async (e)=>{


const fileName = new Date().getTime() + e.name;
const storage = getStorage(app);
const storageRef = ref(storage,fileName);
const uploadTask = uploadBytesResumable(storageRef, e);


await uploadTask.on('state_changed', 
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
           setUrls((prev)=>[...prev,downloadURL])
           console.log(downloadURL);
    });
  }
);


}

const handleClick = async (e)=>{
  e.preventDefault();
  setIsCreating(true);

  try{
  const product =  {...inputs,img:urls,categories:cat,size:size};
  await addProduct(product,dispatch);

}catch(err)
{
  console.log(err.message);
}
finally{
  setIsCreating(false);
  setCat([]);
  setFile([]);
  setSize([]);
  setUrls([])
}

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
          <input type="file" id="file" multiple onChange={handleFile} required />
           <span><button onClick={handleFileUploadButton}>Upload</button></span>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Apple Airpods" required onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
            <select name="inStock" onChange={handleChange} >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input name="category" type="text" placeholder="men,jeans" onChange={handleCategory} value={cat}/>
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input name="Size" type="text" placeholder="size" onChange={handleSize} value={size}/>
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input name="color" type="text" placeholder="color" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="description" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="100" onChange={handleChange} />
        </div>
        {
          isCreating?(<CircularProgress/>):(<button onClick={handleClick} className="addProductButton">Create</button>)
        }

      </form>
    </div>
    </div>
    </>
  );
}
