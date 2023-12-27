import React, { useState } from 'react';
import './SurveyForm.css'; 
import {form} from '../api/index';

const SurveyForm = ({setResponse,setIsLogin}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const clear=()=>{
    setName('');
    setGender('');
    setNationality('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setMessage('');
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      gender,
      nationality,
      email,
      phoneNumber,
      address,
      message,
    };
   
    try{
       const res= await form(formData);
        if(res.data.status === 'success'){
          console.log(res.data.status)
          setResponse(true);
          clear();
        }else if(res.data.status ==='already exists'){
          console.log(res.data.status)
          alert('email ALREADY EXISTS PLEASE TRY AGAIN WITH NEW EMAIL');
          setEmail('');
        }else{
          alert('somthing went wrong please try again');
          clear();
        }
    }catch(err){
      console.log("Error in handleSubmit",err);
    }
  };

  return (
    <div className="survey-form-container">
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
       
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
        <div className="form-row">
          <label htmlFor="selects" className="labels">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required id="selects" placeholder="select gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder="Nationality" required/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required className="numbers"/>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required/>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required/>
        <button type="submit">Submit</button>
      </form>
      <button className='buttons' onClick={()=>setIsLogin(true)}>All Surveys</button>
    </div>
  );
};

export default SurveyForm;
