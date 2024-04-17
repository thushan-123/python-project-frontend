import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [dataset,setDataset] = useState([])
  const [comment,setComment] = useState('')
  const [artical_id,setArtical_id] = useState('')
  
  
  useEffect(() => {
    const artical_data = async() =>{
      try{
        const res = await axios.get(`${process.env.REACT_APP_SECRET_NAME}/artical/all`)
        setDataset(res.data)
      }catch(err){
        console.log(err)
      }
    }
    artical_data()
  },[])

  const navigate = useNavigate()

  const sendComment = async() =>{
    if(sessionStorage.getItem('token')===null){
      navigate('/login')
    }else{
      const data = {"token":sessionStorage.getItem('token'),"comment":comment,"artical_id":artical_id}
      console.log(data)
      await axios.post(`${process.env.REACT_APP_SECRET_NAME}/user/comment`,data)
      .then((res)=>{
        if (res.data["status"]==="sucess"){
          navigate('/')
          alert("inserted sucessfully..  refresh it")
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  }
 

  
  
  return (
    <div>
        <nav className="bg-black p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">AI Model</div>

        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
          <a href="/" className="text-white px-4 py-2 hover:text-orange-600">Home</a>
          <a href="/add" className="text-white px-4 py-2 hover:text-orange-600">Add-Artical</a>
          <a href="/" className="text-white px-4 py-2 hover:text-orange-600">About</a>
          <a href="/" className="text-white px-4 py-2 hover:text-orange-600">Contact Me</a>


          
        </div>
      </div>
    </nav>

    
    {dataset.map((value, index) => (
  <div key={index}>
    <br /><br />
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{value.user_id}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{value.title}</a>
          <p className="mt-2 text-slate-500">{value.content}</p>
          <br /><br />
          <p> <b>Comment : </b> positive-{value.positive} negative-{value.negative}</p><br />

          <div className="ml-3">
          {value.comments.length > 0 ? (
    value.comments.map((comment, index) => (
        <div key={index}>
            <div className="font-medium text-purple-800">{comment.user_id}</div>
            <div className="text-gray-600">Posted on {comment.c_date}</div>
            <div className="mt-2 text-purple-800">{comment.content}</div>
           
            <p>{comment.prediction === 'positive' ? 'positive comment' : 'negative comment'}</p>
            <br />
        </div>
    ))
) : (
    <div>No comments available</div>
)}

</div>


          {/*
          <div className="flex mt-4">
          <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
              <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Profile" />
            </div>
            <div className="ml-3">
              <div className="font-medium text-purple-800">John Doe</div>
              <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
              <div className="mt-2 text-purple-800">This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <br /><p>positive comment</p>
            </div>   
          </div> */}



        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-purple-800 font-medium">write comment</label>
          <input type="text" id="name" value={comment} onChange={(e)=>{setComment(e.target.value);setArtical_id(value.artical_id)}}  name="name" className="border-2 border-purple-600 p-2 w-full rounded" required />
        </div>
        <button type="button"  onClick={sendComment} className="bg-purple-700 text-white font-medium py-2 px-4 rounded hover:bg-purple-600">Post Comment</button>

    </div>
    
</div>
))}


    

    </div>
  )
}
