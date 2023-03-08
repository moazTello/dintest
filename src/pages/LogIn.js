import React from 'react';
import LoginPerson from '../images/LoginPerson.svg';
import { Link } from 'react-router-dom';
import { useEffect,useState,useContext } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import DataContext from '../context/DataContext';
import tooth from '../images/tooth1.svg';
const LogIn = () => {
    const {userName,setUserName,handleSubmitlogin,password,setPassword,setNavtrans} = useContext(DataContext);
    const { width } = useWindowSize();
    const [hover,setHover] = useState(false);
    const [ valh,setValh ] = useState('60px');
    const [flood,setFlood] = useState(false);
    useEffect(() => {
        setNavtrans(false);

    },[setNavtrans])
    useEffect(() => {
        if(width > 650){
            if(userName && password !== '' ){
                setValh('60px'); 
            }
            else{
                if(hover === false){setValh('170px')}
                else{setValh('-50px')}
            }
        }
        else{
            setValh('41px'); 
        }
    },[password,userName,hover,width])
    const trigger = () => {
        if(width > 650){
            if(userName && password !== '' ){
                setValh('60px'); 
            }
            else{
                setHover(!hover)
                if(hover === false){setValh('170px')}
                else{setValh('-50px')}
            }
        }
        else{
            setValh('41px'); 
        }
    }
    const Register = () => {
        alert('عذرآ تم الغاء التسجيل من خارج الشركة يمكنك التسجيل فقط ضمن الشركة');
    }
    const toothshake = () => {
        setFlood(!flood);
    }
    return (
    <div className='container'>
        <div style={{transition:"all 3s ease-in-out"}}>
            <img src={tooth} alt='1' style={{width:"400px",hight:"400px",marginRight:"100px",display:width>1100?"block":"none",transform:flood? "translate(-45%,0%)":"translate(0%,0%)",transition:"all 1.5s ease-in-out",}}/>
        </div>
        <div className='loginbox' onMouseEnter={toothshake} onMouseLeave={toothshake} style={{transform:flood&&width>1100? "translate(-55%,0%)":"translate(0%,0%)",transition:"all 2s ease-in-out"}}>
           <img src={LoginPerson} alt='' className='LoginPerson'/>
           <form className='newclassform' onSubmit={handleSubmitlogin} >
                <div className='addInput'> 
                    <input 
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label htmlFor='username' style={{
                        color:"rgb(47,165,226)"
                        }}>اسم المستخدم</label>
                </div> 
                <div className='addInput'> 
                    <input 
                        className='inputs' 
                        id="password"
                        type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor='password' style={{
                        color:"rgb(47,165,226)"
                        }}>كلمة المرور</label>
                </div>
                <div className='addInput' style={{height: width>650 ?'80px' : '40px',padding:width > 650 ?'10px' : '0px'}}>
                    <p>اذا كنت لا تمتلك حسابآ
                        <Link to='/junior' className='link' onClick={Register} style={{marginRight:'10px'}}>انشاء حساب</Link> 
                    </p>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        onMouseOver={trigger} 
                        style={{
                            marginRight:valh
                        }}>
                    تسجيل الدخول
                    </button>
                </div>           
           </form>
        </div>
    </div>
  )
}
export default LogIn;