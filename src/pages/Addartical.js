import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addartical() {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')


  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem('token') === null) {
        navigate("/login");
    }
  }, [navigate]);
  

  const sendartical = async(e)=>{
    e.preventDefault();
    console.log(title,content)
    try{
      const dataset = {"token":sessionStorage.getItem('token'),"title":title,"content":content}
      await axios.post(`${process.env.REACT_APP_SECRET_NAME}/artical/add`,dataset)
      .then((res)=>{
          if(res.data["status"]==="sucess"){
            alert("sucessfully insert")
            
            }else{
            alert("error")
          }
      }
     ).catch((err)=>{
      console.log(err)
     })

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
        <div className="min-h-screen flex items-top justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add a  New Artical</h2>
        </div>
        <form  className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="bookname" className="sr-only">Title</label>
              <input id="bookname" value={title} onChange={(e)=>setTitle(e.target.value)} name="username" type="text"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Title"   />
            </div>
            <br/>
            <div>
              <label htmlFor="content" className="sr-only">Content</label>
              <input id="content" name="text-area" type="text" value={content} onChange={(e)=>setContent(e.target.value)}  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Content"   />
            <br/>    
                
           
            </div>
          </div>

          <div>
            <button  onClick={sendartical} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}
