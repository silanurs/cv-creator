import React, {useState} from 'react';
function Header (){
    const [mode, setMode] = useState("light")
    const changeMode = ()=> {
        if(mode==="light"){
            setMode("dark")
            changeColor("dark")
        }else{
            setMode("light")
            changeColor("light")
        }
    }
   
    const changeColor = (mode)=>{
            if(mode==="light"){
                document.querySelector("header").style.backgroundColor=" #fdf6ce";
                document.querySelector("body").style.backgroundColor="white";
                document.querySelector(".fa-solid").setAttribute("title", "Dark Mode")
                document.querySelector(".fa-solid").style.color="black"
                document.querySelector("body").style.color="black";
                document.querySelector('html').setAttribute("data-bs-theme", "light")
            }else {
                document.querySelector("header").style.backgroundColor="#1a1a1a";
                document.querySelector("body").style.backgroundColor="black";
                document.querySelector(".fa-solid").setAttribute("title", "Light Mode")
                document.querySelector("body").style.color="white";
                document.querySelector(".fa-solid").style.color="white"
                document.querySelector('html').setAttribute("data-bs-theme", "dark")
            }
     }
   
    return(
        <header className="container-fluid">
        <h1 className="header">CV-Maker</h1>
        <i className="fa-solid fa-lightbulb" data-bs-toggle="tooltip" title="Dark Mode" onClick={changeMode} ></i>
        </header>
    )  
}
export default Header