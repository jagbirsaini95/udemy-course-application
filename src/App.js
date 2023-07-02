import { useState } from "react";

import './App.css';
import Week1 from "./components1/Week1";

function App() {
  const [showWeek1, setShowWeek1] = useState(false);
  const [showWeek2, setShowWeek2] = useState(false);
  const [showWeek3, setShowWeek3] = useState(false);
  const showWeek1handler = () => {
    setShowWeek3(prevstate => false);
    setShowWeek2(prevstate => false);
    setShowWeek1(prevstate => !prevstate);


  }
  const showWeek2handler = () => {
    setShowWeek1(prevstate => false);
    setShowWeek3(prevstate => false);
    setShowWeek2(prevstate => !prevstate);

  }
  const showWeek3handler = () => {
    setShowWeek1(prevstate => false);
    setShowWeek2(prevstate => false);
    setShowWeek3(prevstate => !prevstate);

  }
  return (<div>
    <nav className="flex-center">
      <button className='btn' onClick={showWeek1handler} >Week1</button>
      <button className='btn' onClick={showWeek2handler} >Week2</button>
      <button className='btn' onClick={showWeek3handler} >Week3</button>
    </nav>
    {showWeek1 && <Week1 />}
  </div >
  );
}

export default App;
