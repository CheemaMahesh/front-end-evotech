import React ,{useEffect, useState} from 'react';
import './Table.css'; 
import { allsurveys } from '../api';

const Table = ({setIsLogin}) => {
    const [data,setData]=useState([]);
        useEffect(()=>{
           const  callApi = async ()=>{
                try{
                    const tableData= await allsurveys();
                    if(tableData){
                        setData(tableData.data.surveyData);
                        console.log(tableData)
                    }
                }catch(err){
                    console.log('somthing went wrong in api call')
                }
            }
            callApi();
        },[])
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Nationality</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.nationality}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.address}</td>
              <td>{item.message}</td>
              <td>{new Date(item.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='buttons' onClick={()=>setIsLogin(false)}>Survey-Page</button>
    </div>
  );
};

export default Table;
