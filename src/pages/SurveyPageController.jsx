import React ,{useState} from "react";
import SurveyForm from './SurveyForm';
import ResponsePage from './Response';

export default function SurveyControllerPage({setIsLogin}){
    const [response,setResponse]=useState(false);

    return(
        <>
          {response?<ResponsePage setResponse={setResponse} setIsLogin={setIsLogin}/>:<SurveyForm setResponse={setResponse} setIsLogin={setIsLogin}/>}
        </>
    )
}