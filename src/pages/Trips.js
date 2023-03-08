import { React, useContext } from 'react';
import Trip from './Trip';
import { Link, 
    // useParams
} from 'react-router-dom';
import DataContext from '../context/DataContext';

const Trips = () => {
    const {trips,setResTrip} = useContext(DataContext);
//   console.log('Trips');
//   const {id} = useParams();
  return (
    <article className='container'>
        <div className='tripsschedul'>
            <div style={{margin:'0px'}}>المواعيد المتوفرة</div>
            <hr style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}/>
            <div className='trip'>
                <p className='tripitem'> حجز</p>
                <p className='tripitem'>الوجهة </p>
                <p className='tripitem'> عدد المقاعد </p>
                <p className='tripitem'> تاريخ الرحلة</p>
                <p className='tripitem'> رقم تسلسلي</p>
            </div>
            <hr/>
            <div className='overflow' 
                // style={{height:"400px",overflow:"scroll"}}
            >
            {trips.map(trip => (
                <Trip 
                className=''
                key={trip.trip_id} 
                trip={trip}
                setResTrip={setResTrip}
                />
            ))}
            {!trips.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px'}}>لا يوجد اي مواعيد لعرضها</p>}
            </div>
            <hr/>
            <div className='trip' style={{justifyContent:'center'}}>
                <Link 
                        // to={`/login/${id}/myreservation`}
                        to={`/login/myreservation`}
                        className='btn' 
                        style={{marginTop:"5px",borderRadius:"5px",
                                width:"120px",textDecoration:'none',
                                paddingTop:''}}
                        // onClick={() => {}}    
                    >
                        مواعيدي 
                </Link>
                <Link 
                        to={`/login/userprofile`}
                        className='btn' 
                        style={{marginTop:"5px",borderRadius:"5px",
                                width:"120px",textDecoration:'none',
                                paddingTop:''}}
                        // onClick={() => {}}    
                    >
                        ملفي الشخصي
                </Link>    
            </div> 
        </div>
    </article>
  )
}

export default Trips;