import React,{useEffect} from 'react';
import homebus from '../images/homebus.svg';
// import {BsFillPersonFill} from 'react-icons/bs';
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import tooth2 from '../images/tooth2.svg';
import useWindowSize from '../hooks/useWindowSize';
import tooth3 from '../images/tooth3.svg';
import tooth4 from '../images/tooth4.svg';
import tooth5 from '../images/tooth5.svg';
import tooth6 from '../images/tooth6.svg';
import tooth7 from '../images/tooth7.svg';
import tooth8 from '../images/tooth8.svg';
import Marquee from 'react-fast-marquee';


// import { format } from 'date-fns';
// import { Link } from 'react-router-dom';
const HomePage = () => {
  const {width} = useWindowSize();
  const{setNavtrans} = useContext(DataContext);
  useEffect(() => {
    setNavtrans(true);
  })
 
  // const date = format(new Date(),`MMMM dd, yyyy pp`);
  return (
    <div className='container' style={{overflow:'',height:'fit-content',minHeight:'71px',flexDirection:'column'}}>
       <div className='homeimge'>
         <img className='busimg' src={homebus} alt=''/>
       </div>
       <div className='homesecdiv'>
        <div className='why'>
        الخدمات التي تقدمها العيادة
        </div>
        <div style={{width:'100%',paddingTop:'50px',paddingBottom:'50px',display:'flex',justifyContent:'center',flexFlow:'wrap'}}>
        <Marquee direction='right' speed={50} gradient={false} style={{color:"rgb(47,165,226)",fontSize:"20px",paddingBottom:"12px",paddingTop:"12px"}} pauseOnHover={true}>
          
          <div className='iconscontainer'>
            {/* <BsFillPersonFill className='icons'/> */}
            <img src={tooth4} alt="" style={{width:"150px"}}/>
            <p className='iconstext'>ازالة التسوس </p>  
          </div>
          <div className='iconscontainer'>
            {/* <BsFillPersonFill className='icons'/> */}
            <img src={tooth3} alt="" style={{width:"150px"}}/>
            <p className='iconstext'>تبييض اسنان</p>  
          </div>
          <div className='iconscontainer'>
            {/* <BsFillPersonFill className='icons'/> */}
            <img src={tooth5} alt="" style={{width:"150px"}}/>
            <p className='iconstext'>تركيب جسر </p>  
          </div>
          <div className='iconscontainer'>
            {/* <BsFillPersonFill className='icons'/> */}
            <img src={tooth6} alt="" style={{width:"150px"}}/>
            <p className='iconstext'>تقويم للأسنان</p>  
          </div>
          <div className='iconscontainer'>
            {/* <BsFillPersonFill className='icons'/> */}
            <img src={tooth7} alt="" style={{width:"150px"}}/>
            <p className='iconstext'>معالجة اللثة</p>  
          </div>
          <div className='iconscontainer'>
            {/* <BsFillPersonFill className='icons'/> */}
            <img src={tooth8} alt="" style={{width:"150px"}}/>
            <p className='iconstext'>ابتسامة هوليود</p>  
          </div>
          </Marquee>
        </div>
       </div>
       <div className='why'>
          يجب عليك العناية بصحة اسنانك
        </div>
       <div className='thirdMain' 
      //  style={{height:"fit-content"}}
      style={{display:"flex",alignItems:"flex-end",height:"500px",paddingRight:"20px"}}
       >
        <div className='homethird' style={{width:"65%"}}>
            <p className='thirdtitle' >​​​​العناية بالأسنان</p>
            <p className='thirdcontent'>
            هناك معايير معينة لاختيار فرشاة ومعجون الأسنان بحسب الحالة الصحية والعمر
            </p>
            <p className='thirdcontent'>
            إهمال تنظيف الأسنان يؤدي إلى تراكم طبقة البلاك على أسطح الأسنان
            </p>
            <p className='thirdcontent'>
            يجب تنظيف الأسنان مرتين باليوم ولمدة دقيقتين في كل مرة
            </p>
            <p className='thirdcontent'>
            تجب زيارة طبيب الأسنان بشكل دوري كل ستة أشهر
            </p>
            <p className='thirdcontent'>
            يستمتع معظم الأطفال باستخدام الفرشاة الكهربائية مما يجعلها محفزة لاهتمامهم بأسنانهم 
            </p>
            <p className='thirdcontent'>
            تنظيف الأسنان بفرشاة ومعجون الأسنان بشكل صحيح ويومي يشكل أهم وسيلة للمحافظة على نظافة الفم والأسنان والوقاية من التسوس وما ينجم عنه من أمراض
            </p> 
          </div>
          <div className='homethird' style={{width:"65%"}}>
            <p className='thirdtitle' >​​​​أهمية تنظيف الأسنان</p>
            <p className='thirdcontent'>
            منع تراكم طبقة البلاك على الأسنان (وهي طبقة لزجة ورقيقة تتكون على سطح الأسنان من بقايا الطعام وتحتوي على البكتيريا المسببة لأمراض اللثة وتسوس الأسنان)
            </p>
            <p className='thirdcontent'>
            الوقاية من التهاب اللثة
            </p>
            <p className='thirdcontent'>
            توفير الوقت والمال المبذول لعلاج مشاكل الأسنان 
            </p>
            <p className='thirdcontent'>
            الحصول على نَفَس منعش، وذلك بالوقاية من تكون البكتريا المسببة للروائح الكريهة 
            </p>
            <p className='thirdcontent'>
            الإقلال من تكون التصبغات الخارجية على أسطح الأسنان 
            </p>
            <p className='thirdcontent'>
            
            </p> 
          </div>
             <img className='' src={tooth2} alt='' style={{width:`${width/3}px`,height:`${width/3}px`,position:"absolute",left:"0px"}}/>             
       </div>
        <Marquee direction='right' speed={50} gradient={false} style={{color:"rgb(47,165,226)",fontSize:"20px",paddingBottom:"12px",paddingTop:"12px"}}>

        عنوان العيادة : عرطوز - مقابل قمرين مول - دخلة المدرسة 

        <img className='' src={tooth2} alt='' style={{width:`${50}px`,height:`${50}px`,marginRight:"50px",marginLeft:"50px"}}/>             

          عند زيارتك العيادة اطلب من السكرتيرة انشاء حساب لتمكنك من الدخول و ادارة مواعيدك و لا تنسى الاستعلام عن اسم المستخدم و كلمة المرور

        <img className='' src={tooth2} alt='' style={{width:`${50}px`,height:`${50}px`,marginRight:"50px",marginLeft:"50px"}}/>             

        </Marquee>
    </div>
  )
}

export default HomePage;