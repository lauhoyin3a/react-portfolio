import { useState ,useEffect} from "react";
import DotGroup from "./scenes/DotGroup";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage]= useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)") // check if the current website min width is less than 1060px or above
  const [isTopOfPage, setIsTopOfPage]=useState(true);

  useEffect(()=> {
const handleScroll =() =>{

  if (window.scrollY === 0){
    setIsTopOfPage(true);
  }
  if(window.scrollY !== 0){
    setIsTopOfPage(false);
  }
  window.addEventListener("scroll", handleScroll);
  return (()=> window.removeEventListener("scroll",handleScroll));
}

  },[]);


  return (
    <div className="app bg-deep-blue" >
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Navbar>
    <div className="w-5/6 mx-auto md:h-full">
    {
      isAboveMediumScreens &&(<DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>)
    }

    </div>
    </div>
  );
}

export default App;
