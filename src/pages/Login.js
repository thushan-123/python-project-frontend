import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';




export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlesubmition = async(e) => {
    e.preventDefault();
    //console.log(username,password,process.env.REACT_APP_SECRET_NAME)
    try{
       const data_set = {"user_name":username,"password":password}
       await axios.post(`${process.env.REACT_APP_SECRET_NAME}/login`,data_set).then(
        (res)=>{
          if ((res.data["status"])==="ok"){
            sessionStorage.setItem("token",res.data["token"])
            navigate("/")
          }else{
            window.alert("invalied username or password")
          }
        }
       ).catch(
        (err)=>{
          console.log(err)
        }
       )

    }
    catch(err){
      console.log(err)
    }

  }

    
  return (
    <div>
      <br/><br/><br/>
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
          </div>
          <div className="mt-5">
            <form method='post' onSubmit={handlesubmition}>
              <div className="relative mt-6">
                <input type="text" name="username" value={username} onChange={e =>setUsername(e.target.value)} id="username" placeholder="User name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="off" required/>
                <label htmlFor="username" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">User Name</label>
              </div>
              <div className="relative mt-6">
                <input type="password" name="password" value={password} onChange={e =>setPassword(e.target.value)} id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required/>
                <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
              </div>
              <div className="my-6">
                <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
              </div>
              </form>
            <p className="text-center text-sm text-gray-500">Don't have an account yet?
              <a href="#!" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign up</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

