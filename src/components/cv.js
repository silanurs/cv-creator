import React from 'react';

export default function Cv(props){
    const printPageArea = (areaID)=> {
        let printContent = document.getElementById(areaID).innerHTML;
        let originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;

    }
    return(
        <div className=" col-sm-8 my-5 container" id="cv-container">
         <div className="cv-container" >
          <div className="general-info">
             <img src={props.photoUrl} alt="user"></img>
             <p>{props.info.name}</p>
             <p>{props.info.surname}</p>
             <p>{props.info.address}</p>
             <p>{props.info.phone}</p>
             <p></p>
             <p className="user-email">{props.info.email}</p>
             <p></p>
             
          </div>
          <div className="cv-education">
              <h2>EDUCATION:</h2><hr></hr>
              <span>{props.info.schoolFrom}</span>
              <span>-{props.info.schoolTo}</span>
              <p>{props.info.university}</p>
              <p>{props.info.subject}</p>
          </div>
          <div className="cv-experience">
              <h2>EXPERIENCE:</h2><hr></hr>
              <span>{props.info.jobFrom}</span>
              <span>-{props.info.jobTo}</span>
              <p>{props.info.position}</p>
              <p>{props.info.company}</p>
              <p className="description">{props.description}</p>

          </div>
          

      </div>
      <div>
      <button className="pdf btn btn-secondary mt-3 btn-sm" id="download" onClick={()=>{printPageArea("cv-container")}}>Download CV</button>
      </div>

          

       </div>)
}