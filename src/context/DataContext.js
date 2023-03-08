import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../api/trips';
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [navtrans,setNavtrans] = useState(true);
  const [token,setToken] = useState('');
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [resTrip,setResTrip] = useState('');
  const [go_from,setGo_from] = useState('');
  const [availabelTrip,setAvailabelTrip] = useState('');
  const [logedInUser,setLogedInUser] = useState({});
  const [navDisplay,setNavDisplay] = useState(true);
  const [trips,setTrips] = useState([]);
  const [userTrips,setUserTrips] = useState([]);
  const [ coordinates , setCoordinates ] = useState([]);
  const [ FeedBack , setFeedBack] = useState("");
  const [ personFeed , setPersonFeed ] = useState("");
  const [ emailsender , setEmailsender ] = useState("");
  const [ employeeFirstName , setEmployeeFirstName] = useState("");
  const [ employeeLastName , setEmployeeLastName ] = useState("");
  const [ employeeEmail , setEmployeeEmail ] = useState("");
  const [ employeeJob , setEmployeeJob ] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchClasses = async () => {
      try{
        const response = await api.get('/customerUI/trip/getAllTrips');
        setTrips(response.data.trips);
        // console.log(response)
      }
      catch(err){
        console.log(err.message);
      }
    }
    fetchClasses();
  },[]);

  // const handleSubmitlogin = async (e) => {
  //   e.preventDefault();
  //       try{
  //       const response = await api.post('customerUI/login',
  //                                       JSON.stringify({username:userName,password:password}),
  //                                       {
  //                                           headers:{ 'Content-Type':'application/json'}
  //                                       });
  //       setToken(response.data.token);
  //       setUserTrips(response.data.customerTrips);
  //       setLogedInUser(response.data.customer);
  //       // console.log(response);
  //       setNavDisplay(false);
  //       navigate(`/login/alltrips`);
  //       }
  //       catch(err) {
  //           alert('المعلومات غير صحيحة يرجى اعادة تعبئة المعلومات ');
  //       }

  //   }
  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    if(userName&&password !== ""){
        setNavDisplay(false);
        navigate(`/login/homeuser`); 
    }
  }

    const viewReservation = async (id) => {
      const findtrip = userTrips.find((trip) => (trip.trip_id).toString() === id.toString());
      // const findtripdate = trips.find((trip) => (trip.trip_id).toString() === id.toString());
      // const date = new Date().getTime();
      // const nowdate = new Date().getTime()-(2*60*60*1000);
      // console.log(nowdate)
      // console.log(date);
      // console.log(findtripdate)
      // console.log(findtripdate.date)
      // if(findtripdate.date <= nowdate){
        if(!findtrip){ 
          // console.log(token);
          // console.log(id);
          const response = await api.get(`/customerUI/viewRservation/${id}`,
          {
              headers:{ 'Content-Type':'application/json',
                        'Authorization':token}
          });
          // console.log(response);

          // console.log(response.data);
          const available = response.data.trip_availabel;
          const check = response.data.check_seats;
          setAvailabelTrip(available);
          if(available){
            if(logedInUser.trip_availabel > 0){
              if(check){
                setCoordinates(response.data.Locations)
                navigate(`login/${id}/selecttime`);
                // console.log(check);
              }
              else{
                alert('لا يمكنك التسجيل بالرحلة ليس هناك مقاعد متاحة');
              }
            }
            else{
              alert('لا يمكنك التسجيل بالرحلة ليس لديك رحلات متاحة');
            }
          }
          else{
            alert('الرحلة غير متاحة حاليآ');
            navigate('login/myreservation');
          }
      }
      if(findtrip){
            alert('انت فعلآ سجلت في هذه الرحلة مسبقآ');
            navigate(`/login/alltrips`);
      }
      // }
      // else{
      //   alert('الرحلة قيد الانطلاق لقد تأخرت !');
      // }
    }
    const handleTripUser = async (id) => {
          // console.log(go_from);
          try{
          const response = await api.post(`/customerUI/saveRservation`,
          JSON.stringify({go_from:go_from,trip_availabel:availabelTrip,trip_id:id}),
          {
              headers:{ 'Content-Type':'application/json',
                        'Authorization':token,
                      }
          });
          setAvailabelTrip(response.data.trip_availabel);

          setTrips(response.data.AllTrips);
          // console.log(response.data.trips[0].reservations);
          const usertrips = [...userTrips,response.data.userTrip];
          setUserTrips(usertrips);
          setLogedInUser(response.data.user);
          setGo_from('');
          navigate(`/login/myreservation`);
        }
        catch(err){
          alert('يرجى اختيار مكان الانطلاق !');
        }
  }
  const handleDeleteTripUser = async (id) => {
    if(window.confirm('هل ترغب بإلغاء الرحلة ؟')){
      // const trips = userTrips.filter(trip => trip.id_trip.toString() !== id.toString());
      // setUserTrips(trips);
      try{
        const response = await api.delete(`/customerUI/removeRservation/${id}`,
          {
              headers:{ 'Content-Type':'application/json',
                        'Authorization':token,
                      }
          });
          setLogedInUser(response.data.user);
          setUserTrips(response.data.trips);
          setTrips(response.data.AllTrips);
          alert('تم الحذف !!');
          // console.log(response);
      }
      catch(err){
        alert('هناك خطأ ما لم يتم حذف الرحلة !');
      } 
    }
  }
  const onOptionChangeHandler = (e) => {
    // console.log(go_from);
    setGo_from(e.target.value);
  }
  const handleFeedBack = async(e) => {
    e.preventDefault();
    try{
    // const response = 
    await api.post('customerUI/snedProblem',
                                    JSON.stringify({sender:personFeed,
                                                    email:emailsender,message:FeedBack}),
                                    {
                                        headers:{ 'Content-Type':'application/json'}
                                    });
    // console.log(response);
    alert('تم ارسال الرسالة بنجاح و شكرآ');
    setPersonFeed("");
    setEmailsender("");
    setFeedBack(""); 
    navigate(`/junior`);
    }
    catch(err) {
        alert('لم يتم ارسال الرسالة حاول من جديد');
    }
  }
  const handleEmployeeOrder = async(e) => {
    e.preventDefault();
    try{
    // const response = 
    await api.post('customerUI/snedEmployeRequest',
                                    JSON.stringify({senderFirstName:employeeFirstName,
                                                    senderLaststName:employeeLastName,
                                                    email:employeeEmail,request:employeeJob}),
                                    {
                                        headers:{ 'Content-Type':'application/json'}
                                    });
    // console.log(response);
    alert('تم ارسال طلبك بنجاح سنعاود مراسلتك على بريدك الالكتروني');
    setEmployeeFirstName("");
    setEmployeeLastName("");
    setEmployeeEmail("");
    setEmployeeJob(""); 
    navigate(`/junior`);
    }
    catch(err) {
        alert('لم يتم ارسال الطلب حاول من جديد');
    }
  }
  // console.log(token);
    return(
        <DataContext.Provider value={{
            navDisplay,logedInUser,
            userName,setUserName,handleSubmitlogin,password,setPassword,
            setResTrip,
            trips,handleTripUser,resTrip,
            userTrips,handleDeleteTripUser,
            token,setToken,
            viewReservation,
            go_from,setGo_from,coordinates,onOptionChangeHandler,
            FeedBack,setFeedBack,handleFeedBack,setPersonFeed,personFeed,emailsender,setEmailsender
            ,handleEmployeeOrder,employeeJob,setEmployeeJob,employeeEmail,setEmployeeEmail,employeeLastName
            ,setEmployeeLastName,employeeFirstName,setEmployeeFirstName
            ,navtrans,setNavtrans 
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;