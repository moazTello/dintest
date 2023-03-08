import React from 'react';
import tooth from '../images/tooth1.svg';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
const HomeUser = () => {
    const {width} = useContext(DataContext);
  return (
    <div className='container'>
        <div>
            <img src={tooth} alt='1' style={{width:"400px",hight:"400px",marginRight:"100px",display:width>1100?"block":"none"}}/>
        </div>
        <div className='loginbox' >
            <Link className='btn' style={{textDecoration:"none"}} to='/login/alltrips' >حجز موعد</Link>
            <Link className='btn' style={{textDecoration:"none"}} to='/login/userprofile' >ملفي الشخصي</Link>
            <Link to='' >الموعد الحالي</Link>
            <Link to='' ></Link>
        </div>
    </div>
  )
}

export default HomeUser