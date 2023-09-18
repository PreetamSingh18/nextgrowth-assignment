import  Slider  from "@mui/material/Slider";
import  Axios  from "axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const [clickbtn, setclickbtn] = useState(false);
  const [filterNum,setfilterNum]=useState(0);
  const [formdata,setFormdata]=useState({
    firstname:"",
    email:"",
    message:"",
  });
  let name,value;
 const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setFormdata({...formdata,[name]:value});
}
// console.log(formdata);

const url="/formapi/475";

const handleSubmit=async(e)=>{
  e.preventDefault();
  if (formdata.firstname === "") {
    // document.getElementById('name').style.borderColor="red";
    alert("Enter Name")
  }
  else if(formdata.email===""){
    alert("Enter Email")
  }
  else if(formdata.message===""){
    alert("Enter Order Details");
  }
  if (formdata.firstname !== "" && formdata.email !== "" && formdata.message!== "") {
    
    await Axios.post(url,{
      firstname:formdata.firstname,
      email:formdata.email,
      message:formdata.message,
    })
    .then((res)=>{
      alert("Form Submitted");
      window.location.reload(false);
    })
    .catch((err)=>{
      alert("Something went wrong");
      window.location.reload(false);
      console.log(err);
    })
  }
 
}



  const handleClick = () => {
    console.log(clickbtn);
    setclickbtn(true);
  };
  const handleClose = () => {
    setclickbtn(false);
  };
  const handlefilter=(e)=>{
setfilterNum(e.target.value);
  }
  // console.log(filterNum);
  return (
    <div>
      <div className={clickbtn ? "showoverlay overlay" : "overlay"}></div>
      <div className="nav">
        <div className="nav-content1">
          <h1>NextGrowth Labs</h1>
        </div>
        <div className="nav-content2">
          <h2>Features</h2>
          <h2>Enterprise</h2>
          <h2>Support</h2>
          <h2>Pricing</h2>
          <button className="btn2">Sign up</button>
        </div>
        <div className="Bars">
          <FontAwesomeIcon icon={faBars}/>
        </div>
      </div>
      <div className="mid-content">
        <h4>Pricing</h4>
        <p>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <div className="FilterPlanBox">
 <h3>Select Your Plans</h3>
 <div>
      <Slider
        aria-label="Custom marks"
        value={filterNum}
        onChange={handlefilter}
        defaultValue={0}
        step={1}
        valueLabelDisplay="auto"
        min={0}
  max={30}
      />

 </div>
      </div>
      <div className="Boxes">
        <div className={filterNum<11?"box highlighted":"box"}>
          <div className="box-heading">
            <h4>Free</h4>
          </div>
          <div className="box-body">
            <h2>
              $0<span>/ mo</span>
            </h2>
            <ul>
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn" onClick={handleClick}>
              Sign up for free
            </button>
          </div>
        </div>
        <div className={filterNum>10 && filterNum<21?"box highlighted":"box"}>
          <div className="box-heading">
            <h4>Pro</h4>
          </div>
          <div className="box-body">
            <h2>
              $15<span>/ mo</span>
            </h2>
            <ul>
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn btn1" onClick={handleClick}>
              Get started
            </button>
          </div>
        </div>
        <div className={filterNum>20?"box highlighted":"box"}>
          <div className="box-heading">
            <h4>Enterprise</h4>
          </div>
          <div className="box-body">
            <h2>
              $29<span>/ mo</span>
            </h2>
            <ul>
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn btn1" onClick={handleClick}>
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className={clickbtn ? "showform Form-Container" : "Form-Container"}>
        <div className="CloseBtnDiv">
          <h3>Enter Details</h3>
          <button className="closebtn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="formBox">
           <form >
            <div>
              <label htmlFor="firstname">Full Name*</label>
              <br />
              <input id="firstname" name="firstname" onChange={(e)=>{handleInputs(e)}} type="text" placeholder="Enter the name" required />
            </div>
            <div>
              <label htmlFor="email">Email address*</label>
              <br />
              <input id="email" name="email" onChange={(e)=>{handleInputs(e)}} type="email" placeholder="abc@example.com" required />
            </div>
            <div>
              <label htmlFor="message">Order Comments*</label>
              <br />
              <textarea required name="message" onChange={(e)=>{handleInputs(e)}} id="message"/>
            </div>
            <h5>* field are mandatory</h5>
             {/* <div className="btns">  */}
            <button className="btn3" type="submit" onClick={(e) => handleSubmit(e)}>Send</button>

             {/* </div>  */}
           </form> 
          
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
