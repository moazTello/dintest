import React, { useEffect, useState } from 'react';
import './Classes.css';
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import toothAbout from '../images/toothAbout.svg';
const About = () => {
  const { width } = useWindowSize();
  const {setNavtrans} = useContext(DataContext);
  const[top,setTop] = useState(400);
  const[right,setRight] = useState(400);
  const[color,setColor]= useState('rgb(134, 204, 239)')
  useEffect(() => {
    setNavtrans(false);
    setColor('rgb(255, 255, 255)');
    for(let i=400;i>120;i--){
      setTop(2*i);
      setRight(i);
    }
  },[top,right,setNavtrans]);

  // console.log('About');
  return (
    <article className='container'>
      <div>
        <img src={toothAbout} alt='1' style={{display:width>1100?"block":"none",position:'absolute',left:"150px",top:"150px"}}/>
      </div> 
      <div className='about'style={{position:width>900?'absolute':'relative',right:width>900?`${right}px`:'0px',top:width>900?`${top}px`:'0px'
      ,transition:'all 2s ease-in-out',color:color,backgroundColor:"rgba(255,255,255,0%)"
    }}>
        <h1>حول العيادة</h1>
        <br/>
        <p>
          العيادة الطبية المركزية للتخلص من جميع اشكال التلوث و الاضطرابات العصبية الناتجة عن الاسنان مع توفر خبرة طبية عالية و باستخدام احدث التجهيزات الطبية
        
        </p>
      </div>
      <br/>
      <p></p>
    </article>
  )
}

export default About;