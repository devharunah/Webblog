'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Signin = () => {
        const router = useRouter()
      const [form, setForm] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    setLoading(true);
    setMessage('');
    window.alert('Account was succeccfuly created')
    router.push('/')


    try{
     const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json()
      if(res.ok){
        setMessage('Signup succesful!')
      }else{
        setMessage(data.message || 'Sigup failed.')
      }
    } catch(error){
        setMessage(`Something went wrong ${error}`)
    } finally{
        setLoading(false)
    }
  }
  

    return(
         <div>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col items-center space-y-5 justify-center h-screen">
                    <h1 className="text-3xl font-bold mb-4">Signup</h1>
                   
                      <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="px-2 py-1 border-gray-500 border-2"
                    />
                   
                      <input
                    type="text"
                    name="secondName"
                    placeholder="Second Name"
                    value={form.secondName}
                    onChange={handleChange}
                    className="px-2 py-1 border-gray-500 border-2"
                    /> 
                    
                      <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="px-2 py-1 border-gray-500 border-2"
                required
                    />
                    <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="px-2 py-1 border-gray-500 border-2"
                required
                    />
                    <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </div>
                {message && <p> {message}</p>}
            </form>
    </div>
    )
}
export default Signin;