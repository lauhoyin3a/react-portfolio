import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; //nav to certain part of the page
import useMediaQuery from "../hooks/useMediaQuery";

const Link =({page,selectedPage,setSelectedPage}) => {
    const lowerCasePage=page.toLowerCase();
    return (
        <AnchorLink
          className={`${
            selectedPage === lowerCasePage ? "text-yellow" : ""
          } hover:text-yellow transition duration-500`}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
          {page}
        </AnchorLink>
      );

    
};

const Navbar =({isTopOfPage,selectedPage,setSelectedPage})=>{
const [isMenuToggled,setIsMenuToggled]=useState(false);
const isAboveSmallScrenns=useMediaQuery("(min-width: 768px)");
const navbarBackground = isTopOfPage ? "":"bg-red";
return(
    <nav className="${navbarBackground}z-40 w-full fixed top-0 py-6">
    <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Tom Lau</h4>
        {/*DeSKKTOP NAV */}
        {isAboveSmallScrenns ? (
        <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
            <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
            </div>):(
            <button
            className="rounded-full bg-red p-2"
            onClick={()=> setIsMenuToggled(!isMenuToggled)}
            >
                <img alt="menu-icon" src="../assets/menu-icon.svg"/>
            </button>
            )}
            {/*Mobile pop up*/}
            {!isAboveSmallScrenns && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]"> 
                    {/*Close ICON*/ }
                    <div className="flex justify-end p-12">
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <img alt="close-icon" src="../assets/menu-icon.svg"/>   
                    </button>
                    </div>
                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                    <Link page="Skills" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                    <Link page="Projects" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                    <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={selectedPage}/>
                    </div>
                </div>
            )}

    </div>
    </nav>
);

}
export default Navbar;