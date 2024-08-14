import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

  const [form, setForm] = useState({
    username:'',
    password:'',
  })

  const submit = () =>{

    if (form.username == "" || form.password == "") {
        alert("Please fill all fields")
    }else{
        console.log(form)
        setForm({
        username:'',
        password:'',
        })
        
        navigate('/Home')
    }

    
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 bg-amber-600 h-svh '>
        <div className='flex flex-col p-5 bg-white rounded-3xl'>
          <h1 className='text-3xl font-bold text-center mb-5'>Login</h1>
          <div className='flex  flex-col items-end gap-5 mt-5 '>

            <div className=''>
              <label className='px-4 font-bold text-amber-600' htmlFor="username">UserName</label>
              <input value={form.username} onChange={(e)=> setForm({...form, username: e.target.value}) } className='border border-amber-500 rounded-xl p-2 bg-amber-300 focus:border-amber-500' id='username' type="text" />
            </div>

            <div>
              <label className='px-4 font-bold text-amber-600' htmlFor="password">Password</label>
              <input value={form.password} onChange={(e)=> setForm({...form, password: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='password' type="password" />
            </div>

            
            
            
          </div>
          <button className='mt-5 bg-amber-500 p-3 rounded-xl font-bold hover:bg-amber-400' onClick={submit}>Submit</button>
        </div>
        
        <a href="/">Don't have an account?</a>
      </div>
    </>
  )
}

export default Login
