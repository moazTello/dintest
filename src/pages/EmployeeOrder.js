import React from 'react';
import { useContext } from 'react';
import './Classes.css';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import useWindowSize from '../hooks/useWindowSize';
const EmployeeOrder = () => {
  const {handleEmployeeOrder,employeeJob,setEmployeeJob,
    // employeeEmail,setEmployeeEmail,
    employeeLastName,setEmployeeLastName,employeeFirstName,setEmployeeFirstName} = useContext(DataContext);
  const { width } = useWindowSize(); 
//   console.log('About');
  return (
    <div className='container'>
        <div className='contactbox'>
           <form className='newclassform' style={{marginTop:"230px"}} onSubmit={handleEmployeeOrder} >
                <div className='addInput'>
                    <input 
                        className='inputs'
                        style={{padding:"4px"}} 
                        id="username"
                        type="text"
                        required
                        value={employeeJob}
                        onChange={(e) => setEmployeeJob(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:"rgb(63,138,226)",marginTop:"20px"
                        }}>السبب</label>
{/*                 
                <input 
                        className='inputs' 
                        style={{padding:"4px"}} 
                        id="username"
                        type="text"
                        required
                        value={employeeEmail}
                        onChange={(e) => setEmployeeEmail(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:"rgb(63,138,226)",marginTop:"20px"
                        }}>عنوان البريد الالكتروني</label>  */}
                <input 
                        className='inputs'
                        style={{padding:"4px"}} 
                        id="username"
                        type="text"
                        required
                        value={employeeLastName}
                        onChange={(e) => setEmployeeLastName(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:"rgb(63,138,226)",marginTop:"20px"
                        }}>الكنية</label>
                <input 
                        className='inputs'
                        style={{padding:"4px"}} 
                        id="username"
                        type="text"
                        required
                        value={employeeFirstName}
                        onChange={(e) => setEmployeeFirstName(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        // color:"rgb(254,109,81)"
                        color:"rgb(63,138,226)",marginTop:"20px"
                        }}>اسم المرسل</label>
                    <h3>طلب مراجعة فورية</h3>
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

export default EmployeeOrder;