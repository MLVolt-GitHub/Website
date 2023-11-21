import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <div className='container-fluid' style={{"maxHeight":"auto","backgroundColor":"#151515"}}> 

<div className='row'>

    <div className='col-7'>

      <h1 className='ml-5' style={{paddingTop:"120px",color:"#FF6006",fontWeight:"bold"}}>MLVOLT</h1>
      <h4 className='ml-5' style={{color:"#DADADA"}}>Let's create a great digital experience.</h4>

      <button
  type="button"
  className="btn btn-outline-warning mt-4 ml-5"
  style={{ borderWidth: '3px', padding: '10px 20px',
  borderColor: '#FF6006',
  color: 'white',fontWeight:"bold" }}
>
  Connect with US
</button>

<div class="container mt-3 ml-4">
  <div class="row">
    <div class="col-md-8">
      <div class="horizontal-line"></div>
    </div>
  </div>
</div>

<h5 className='ml-5 mt-3' style={{color:"#DADADA"}}>A design agency by <span style={{color:"#FF6006",fontWeight:"bold"}}>MLVOLT</span></h5>

<p className='mt-4' style={{color:"#FFFFFF",font:"poppins",fontWeight:"400px",fontSize:"25px",lineHeight:"30px",letter:"15%",marginLeft:"45px"}}>+91 9557676750</p>

<p className='mt-3' style={{color:"#FF6006",font:"poppins",fontWeight:"400px",fontSize:"20px",lineHeight:"30px",marginLeft:"45px"}}>hi@mlvolt.com</p>

</div>

<div className='col-5'>

<div>

<ul>
  <li style={{listStyle:"none"}}><a><Link to="/about" className='nav-link ' style={{"color":"#DFDFDF", "fontWeight":"bold",fontSize:"25px",marginTop:"200px"}}>About</Link></a></li>

  <li style={{listStyle:"none"}}><a><Link to="/about" className='nav-link ' style={{"color":"#DFDFDF", "fontWeight":"bold",fontSize:"25px",marginLeft:"180px",marginTop:"-50px"}}>Services</Link></a></li>

</ul>


<ul>
  <li style={{listStyle:"none"}}><a><Link to="/about" className='nav-link ' style={{"color":"#DFDFDF", "fontWeight":"bold",fontSize:"25px",marginTop:""}}>Projects</Link></a></li>

  <li  style={{listStyle:"none"}}><a><Link to="/about" className='nav-link ' style={{"color":"#DFDFDF", "fontWeight":"bold",fontSize:"25px",marginLeft:"180px",marginTop:"-50px"}}>Contact</Link></a></li>

</ul>

  <div style={{marginLeft:"180px",marginTop:"60px"}}>
<img src="Assets/images/linkicon.png" alt="Image 2"  className='icon'/>
<img src="Assets/images/instaicon.png" alt="Image 2" className='icon' />
<img src="Assets/images/fbicon.png" alt="Image 2" className='icon' />
</div>

</div>

</div>

</div>
    </div>
    </>
  )
}

export default Footer

