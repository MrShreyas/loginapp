import { data } from 'autoprefixer';
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    "password": "",
    "mobileNo": 0,
    "aadharCard": 0,
    "firstName": "",
    "panCard": "",
    "lastName": "",
    "email": ""
})

  const submit = async () =>{
    if (form.aadharCard == "" || form.email == "" || form.mobileNo == "" || form.panCard == "" || form.password == ""
      || form.firstName == "" || form.lastName == "") 
    {
      alert("Please fill all fields")
    } else{
      
        try {
          const response = await fetch("http://localhost:8080/signup", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          }
          )
          const data = await response.json();
          
          setForm({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            aadharCard:"",
            panCard:"",
            mobileNo:"",
          })
          if (response.ok) {
            console.log(data); 
            navigate('/login')
          }
          
        } catch (error) {
          console.log("error",error);
          
        }
      
  
    }
    
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 bg-amber-600 h-svh '>
        <div className='flex flex-col p-5 bg-white rounded-3xl'>
          <div className='flex  flex-col items-end gap-5 mt-5 '>

            <div className=''>
              <label className='px-4 font-bold text-amber-600' htmlFor="firstName">First Name</label>
              <input value={form.firstName} onChange={(e)=> setForm({...form, firstName: e.target.value}) } className='border border-amber-500 rounded-xl p-2 bg-amber-300 focus:border-amber-500' id='firstName' type="text" />
            </div>

            <div>
              <label className='px-4 font-bold text-amber-600' htmlFor="lastName">Last Name</label>
              <input value={form.lastName} onChange={(e)=> setForm({...form, lastName: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='lastName' type="text" />
            </div>

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="aadharCard">Aadhar Card</label>
            <input value={form.aadharCard} onChange={(e)=> setForm({...form, aadharCard: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='aadharCard' type="number" />
            </div> 

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="panCard">Pan Card</label>
            <input value={form.panCard} onChange={(e)=> setForm({...form, panCard: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='panCard' type="text" />
            </div>

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="mobileNo">Mobile No</label>
            <input value={form.mobileNo} onChange={(e)=> setForm({...form, mobileNo: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='mobileNo' type="number" />
            </div> 

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="email">email</label>
            <input value={form.email} onChange={(e)=> setForm({...form, email: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='email' type="email" />
            </div>

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="password">password</label>
            <input value={form.password} onChange={(e)=> setForm({...form, password: e.target.value}) } className='border  rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='password' type="password" />
            </div>
            
            
          </div>
          <button className='mt-5 bg-amber-500 p-3 rounded-xl font-bold hover:bg-amber-400' onClick={submit}>Submit</button>
        </div>

        <a href="/Login">Already Have an account?</a>
      </div>
    </>
  )
}

export default SignUp
