import React from 'react';
import UserTrip from './UserTrip';
import { Link
    // , useParams
 } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
const MyReservation = () => {
    const {userTrips,handleDeleteTripUser} = useContext(DataContext);
//   console.log('Trips');
//   const {id} = useParams();
  return (
    <article className='container'>
        <div className='tripsschedul'>
            <div style={{margin:'0px'}}>المواعيد السابقة التي قمت بها </div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
            <div className='trip'>
                <p className='tripitem'> الغاء</p>
                <p className='tripitem'>الوجهة </p>
                <p className='tripitem'> عدد المقاعد </p>
                <p className='tripitem'> تاريخ الرحلة</p>
                <p className='tripitem'> رقم تسلسلي</p>
            </div>
            <hr/>
            <div className='overflow' 
                // style={{height:"400px",overflow:"scroll"}}
            > 
            {userTrips.map(trip => (
                <UserTrip className=''key={trip.trip_id} 
                trip={trip}
                handleDeleteTripUser={handleDeleteTripUser} />
            ))}
            {!userTrips.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px'}}>لا يوجد لديك اي مواعيد سابقة لعرضها</p>}
            </div>
            <hr/>
            <Link 
                    to={`/login/alltrips`}
                    className='btn' 
                    style={{marginTop:"5px",borderRadius:"5px",
                            width:"80px",textDecoration:'none',
                            paddingTop:'4px'}}
                    // onClick={() => {}}    
                >
                    عودة
            </Link> 
        </div>
    </article>
  )
}

export default MyReservation;