import React from 'react';
import { Link } from 'react-router-dom';

const SelectTime = () => {
  return (
    <div className='container'>
        <div className='loginbox' >
            <Link className='btn' style={{textDecoration:"none"}} to='/login/alltrips' >حجز موعد</Link>
            <Link className='btn' style={{textDecoration:"none"}} to='/login/userprofile' >ملفي الشخصي</Link>
            <Link to='' >الموعد الحالي</Link>
            <Link to='' ></Link>
        </div>
    </div>
  )
}

export default SelectTime