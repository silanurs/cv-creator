import React, { useState } from "react";
import Cv from './cv.js';


export default function Form() {

  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("");
  const [url, setUrl] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  const handleText = (e) =>{
    setTextarea(e.target.value)

  }
  const handleSubmit = (e) => {
    setInputs({});
    setTextarea("");
    setUrl(null)
  }
  const handleFile = (e) => {
    const file= e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=() => {
      setUrl(reader.result)
    
    }
  }
  


return (
    <div className="container">
    <div className="row">
    <form className="col-sm-4 " onSubmit={handleSubmit}>
    <div className="form-group-row">
      <div id="personal-info" className="col-xs-2">
      <h2>Personal Information:</h2>
      <label htmlFor="user-name" className="form-label">Name:</label>
      <input type="text" id="user-name" name="name" placeholder="Name" className="form-control form-control-sm" value={inputs.name || ""} onChange={handleChange}></input>
      <label htmlFor="surname" className="form-label">Surname:</label>
      <input type="text" id="surname" placeholder="Surname" name="surname" className="form-control form-control-sm" onChange={handleChange} value={inputs.surname || ""}></input>
      <label htmlFor="address"className="form-label" >Address:</label>
      <input type="text" id="address" placeholder="Address" name="address" className="form-control form-control-sm" onChange={handleChange} value={inputs.address || ""}></input>
      <label htmlFor="email" className="form-label">Email:</label>
      <input type="email" id="email" placeholder="example@gmail.com" name="email" className="form-control form-control-sm" onChange={handleChange} value={inputs.email || ""}></input>
      <label htmlFor="phone" className="form-label">Phone Number:</label>
      <input type="tel" id="phone" placeholder="123-456-7890"  name="phone" className="form-control form-control-sm" onChange={handleChange} value={inputs.phone || ""}></input>
      <label htmlFor="file" className="form-label">Photo:</label>
      <input type="file" id="file" accept="image/*" name="photo" className="form-control form-control-sm" onChange={handleFile} ></input>
      </div>
      <div id="education" className="col-xs-2">
    <h2>Education:</h2>
    <label htmlFor="university" className="form-label">University:</label>
    <input type="text" placeholder="University name" name="university" id="university" className="form-control form-control-sm" onChange={handleChange} value={inputs.university}></input>
    <label htmlFor="from" className="form-label" >From:</label>
    <input type="date" placeholder="From" id="from" name="schoolFrom" className="form-control form-control-sm" onChange={handleChange} value={inputs.schoolFrom} ></input>
    <label htmlFor="to" className="form-label">To:</label>
    <input type="date" placeholder="To" id="to"  name="schoolTo" className="form-control form-control-sm" onChange={handleChange} value={inputs.schoolTo}></input>
    <label htmlFor="subject" className="form-label">Subject:</label>
    <input id="subject" type="text" name="subject" className="form-control form-control-sm" onChange={handleChange} value={inputs.subject}></input>
    </div>
    <div id="experience" className="col-xs-2">
      <h2>Work Experience:</h2>
      <label htmlFor="position" className="form-label">Position</label>
      <input type="text" id="position" placeholder="Position" name="position" className="form-control form-control-sm " value={inputs.position || ""} onChange={handleChange}></input>
      <label htmlFor="company" className="form-label">Company Name:</label>
      <input type="text" placeholder="Company" id="company" name="company" className="form-control form-control-sm" onChange={handleChange} value={inputs.company || ""} ></input>
      <label htmlFor="Jfrom" className="form-label">From:</label>
      <input id="Jfrom" placeholder="from" type="date" name="jobFrom" className="form-control form-control-sm" onChange={handleChange} value={inputs.jobFrom || ""}></input>
      <label htmlFor="Jto" className="form-label" >To:</label>
      <input type="date" placeholder="To" id="Jto" name="jobTo" className="form-control form-control-sm" onChange={handleChange} value={inputs.jobTo || ""}></input>
      <label htmlFor="description" className="form-label">Description</label>
      <textarea placeholder="Description" id="description" name="description" className="form-control form-control-sm" onChange={handleText} value={textarea}></textarea>

    </div>

      
      </div>  
  <button type="submit" className="save btn btn-secondary mt-3 btn-sm">Reset</button>
</form>

<Cv info={inputs} description={textarea} photoUrl={url} />
</div>
</div>
 )
}