import { useState } from 'react';
import './App.css';

import Pagecontroller from './pages/pagecontroller';
import SurveyControllerPage from './pages/SurveyPageController';

function App() {
  const [isLogin,setIsLogin]=useState(false)

  return (
    <div className="App">
      {isLogin?<Pagecontroller setIsLogin={setIsLogin}/>:<SurveyControllerPage setIsLogin={setIsLogin}/>}
    </div>
  );
  
}

export default App;
