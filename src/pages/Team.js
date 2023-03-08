import React, { useState } from 'react';
import './Classes.css';
import { useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import useWindowSize from '../hooks/useWindowSize';
import toothTeam from '../images/toothTeam.svg';
const Team = () => {
  // console.log('Condetions');
  const {width} = useWindowSize();
  const {setNavtrans} = useContext(DataContext);
  const [color,setColor] = useState('rgb(134, 204, 239)');
  const [move,setMove] = useState(500);
  useEffect(() => {
    setNavtrans(false);
    setColor('rgb(255, 255, 255)');
    // setMove(500);
    setMove(150);
  },[setNavtrans])
  return (
    <article className='container' style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
      <div style={{display:width>1100?"block":"none",width:"500px",position:width>900?"absolute":"relative",top:"120px",left:width>900?`${move-100}px`:"0px"
                                    ,transition:"all 2s ease-in-out"}}>
        <img src={toothTeam}  alt="team" style={{display:width>1100?"block":"none",width:"500px",transition:"all 2s ease-in-out"}}/>
      </div>
      <div className='about'style={{width:"40%",height:"400px",overflowY:"scroll",color:color,position:width>900?"absolute":"relative",top:"200px",right:width>900?`${move}px`:"0px"
                                    ,transition:"all 2s ease-in-out",backgroundColor:"rgba(255,255,255,0%)"}}>
        <h1>الفريق</h1>
        <br/>
        <p>تم إنشاء هذه العيادة باشراف كل من </p>
        <br/>
        <p>المهندس : محمد معاذ تللو </p>
        <br/>
        <p>المهندس : أحمد عبيد</p>
        <br/>
        <p>المهندس : ياسر الصمصام</p>
        <br/>
        <p> المهندس : وسيم قصقص</p>
        <br/>
       </div>
    </article>
  )
}

export default Team;