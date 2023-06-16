import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
function App() {
  const [selectedPage, setSelectedPage]= useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)") // check if the current website min width is less than 1060px or above
  return (
    <div className="app bg-deep-blue" >
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Navbar>
 
    </div>
  );
}

export default App;
