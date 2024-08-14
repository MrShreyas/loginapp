import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname:"",
    lastname:"",
    Email:"",
    Password:"",
    AadharCard:"",
    PanCard:"",
    MobileNo:"",
  })

  const submit = () =>{
    if (form.AadharCard == "" || form.Email == "" || form.MobileNo == "" || form.PanCard == "" || form.Password == ""
      || form.firstname == "" || form.lastname == "") 
    {
      alert("Please fill all fields")
    } else{
      console.log(form)
      setForm({
        firstname:"",
        lastname:"",
        Email:"",
        Password:"",
        AadharCard:"",
        PanCard:"",
        MobileNo:"",
      })
      navigate('/Login')
    }
    
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 bg-amber-600 h-svh '>
        <div className='flex flex-col p-5 bg-white rounded-3xl'>
          <div className='flex  flex-col items-end gap-5 mt-5 '>

            <div className=''>
              <label className='px-4 font-bold text-amber-600' htmlFor="firstname">First Name</label>
              <input value={form.firstname} onChange={(e)=> setForm({...form, firstname: e.target.value}) } className='border border-amber-500 rounded-xl p-2 bg-amber-300 focus:border-amber-500' id='firstname' type="text" />
            </div>

            <div>
              <label className='px-4 font-bold text-amber-600' htmlFor="lastname">Last Name</label>
              <input value={form.lastname} onChange={(e)=> setForm({...form, lastname: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='lastname' type="text" />
            </div>

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="AadharCard">Aadhar Card</label>
            <input value={form.AadharCard} onChange={(e)=> setForm({...form, AadharCard: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='AadharCard' type="number" />
            </div> 

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="PanCard">Pan Card</label>
            <input value={form.PanCard} onChange={(e)=> setForm({...form, PanCard: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='PanCard' type="text" />
            </div>

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="MobileNo">Mobile No</label>
            <input value={form.MobileNo} onChange={(e)=> setForm({...form, MobileNo: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='MobileNo' type="number" />
            </div> 

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="Email">Email</label>
            <input value={form.Email} onChange={(e)=> setForm({...form, Email: e.target.value}) } className='border rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='Email' type="email" />
            </div>

            <div>
            <label className='px-4 font-bold text-amber-600' htmlFor="Password">Password</label>
            <input value={form.Password} onChange={(e)=> setForm({...form, Password: e.target.value}) } className='border  rounded-xl p-2 bg-amber-300 focus:border-amber-500 ' id='Password' type="password" />
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
