import React from 'react';
import { useContext, useEffect } from 'react';
import './Classes.css';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import useWindowSize from '../hooks/useWindowSize';
const ContactUs = () => {
  const {FeedBack,setFeedBack,handleFeedBack,emailsender,setEmailsender,personFeed,setPersonFeed,setNavtrans} = useContext(DataContext);
  const { width } = useWindowSize();
  useEffect(() => {
    setNavtrans(false);
}) 
  return (
    <div className='container'>
        <div className='contactbox' height="700px">
           <form className='newclassform' style={{marginTop:"180px"}} onSubmit={handleFeedBack} >
                <div className='addInput'> 
                    <input 
                        className='inputs'
                        style={{padding:"4px"}} 
                        id="username"
                        type="text"
                        required
                        value={FeedBack}
                        onChange={(e) => setFeedBack(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        color:"rgb(63,138,226)",marginTop:"20px"
                        }}>الرسالة المراد ارسالها الى الطبيب</label>
                
                <input 
                        className='inputs' 
                        style={{padding:"4px"}} 
                        id="username"
                        type="text"
                        required
                        value={emailsender}
                        onChange={(e) => setEmailsender(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        color:"rgb(63,138,226)",marginTop:"20px"
                        }}>الكنية</label> 
                <input 
                        className='inputs'
                        style={{padding:"4px"}} 
                        id="username"
                        type="text"
                        required
                        value={personFeed}
                        onChange={(e) => setPersonFeed(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:"rgb(63,138,226)",marginTop:"20px"
                        }}>اسم المرسل</label>
                    <h3>تواصل معنا</h3>
                    
                </div> 
                <div className='addInput' style={{height: width>650 ?'80px' : '40px',padding:width > 650 ?'10px' : '0px',display:"flex",flexDirection:"row"}}>
                    <Link to="/junior" 
                            className='btn' 
                            style={{textDecoration:"none",fontSize:"14px"}}>
                                عودة
                    </Link>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn'  
                        style={{
                            // marginRight:valh
                        }}>
                        ارسال 
                    </button>
                </div>           
           </form>
        </div>
    </div>
  )
}

export default ContactUs;