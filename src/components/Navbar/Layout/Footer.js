import React from 'react';
import { useEffect } from 'react';
// import { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
// import smalllogo from '../../../images/smalllogogreen.svg';
// import small2logo from '../../../images/small2logogreen.svg';
import { Link } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle , AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai';
const Footer = () => {
  const {width} = useWindowSize();
  // const [logo,setLogo] = useState('');
  useEffect(() =>{
    if(width>650){
      // setLogo(smalllogo);
    }
    else{
      // setLogo(small2logo);
    }
  },[width])
  return (
    <div className='footer'>
      <div style={{width:'100%',paddingTop:'50px',paddingBottom:'50px',display:'flex',justifyContent:'space-evenly',flexFlow:'wrap'}}>
          <div className='footercontainer'>
            {/* <FaBus className='icons'/> */}
            <Link to='/condetions' className='footertext'>شروط الاستخدام</Link>  
            <Link to='/policy' className='footertext'>سياسة الخصوصية</Link>   
            <Link to='/safty' className='footertext'>الأمان</Link>  
          </div>
          <div className='footercontainer'>
            {/* <GiSandwich className='icons' size={16}/> */}
            <Link to='contactus' className='footertext'>هل تحتاج الى مساعدة</Link>
            <Link to='/login'className='footertext'>تسجيل الدخول</Link>  
            <Link to='/mobilepage' className='footertext'>تطبيق الهاتف المحمول</Link> 
            {/* <p className='footertext'>الوظائف</p>   */}
          </div>
          <div className='footercontainer'>
            {/* <FaToilet className='icons'/> */}
            <Link to='/about' className='footertext'>حول العيادة</Link> 
            {/* <p className='footertext'>الشراكة</p>  */}
            <Link to='/Team' className='footertext'>الاطباء</Link> 
            <Link to='/employeeorder' className='footertext'>طلبات المراجعة الفورية</Link> 
          </div>
          <div className='footercontainer'>
            {/* <img src={logo} alt=''/>  */}
            <div className='facebook'>
            <a href="https://www.facebook.com/photo?fbid=900680114680665&set=a.167878474627503">
              <BsFacebook size={32} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillTwitterCircle size={38} style={{color:"white"}}/>
            </a>
            <a href="https://www.instagram.com/p/Cn4df45KfAirdAYW7VB_VJi5eLKTb4SHqXjRmU0/">
              <AiFillInstagram size={38} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillLinkedin size={38} style={{color:"white"}}/>
            </a> 
            </div>
            <div className='facebook2'>
            <a href="https://www.facebook.com/photo?fbid=900680114680665&set=a.167878474627503">
              <BsFacebook size={15} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillTwitterCircle size={18} style={{color:"white"}}/>
            </a>
            <a href="https://www.instagram.com/p/Cn4df45KfAirdAYW7VB_VJi5eLKTb4SHqXjRmU0/">
              <AiFillInstagram size={18} style={{color:"white"}}/>
            </a>
            <a href="https://moaztello.github.io/junior">
              <AiFillLinkedin size={18} style={{color:"white"}}/>
            </a> 
            </div>  
          </div>
        </div>
    </div>
  )
}

export default Footer;