import React from 'react';
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Trip = ({trip,setResTrip}) => {
        const {viewReservation} = useContext(DataContext);
  return (
    <article className='tripcontent'>        
            <div className='trip'>
                <button 
                className='btn'
                style={{marginLeft:"0px",borderRadius:"0px",
                        width:"100%",border:"none"
                        ,textDecoration:'none',paddingTop:'5px'}}
                onClick={() =>  
                                {
                                console.log(trip.trip_id);
                                setResTrip(trip.trip_id);
                                viewReservation(trip.trip_id);
                                }
                        }  
                >
                        حجز
                </button>
                <p className='tripitem'>{trip.destination} </p>
                <p className='tripitem'>{trip.availabel_sets}</p>
                <p className='tripitem'>{trip.date}</p>
                <p className='tripitem'>{trip.trip_id}</p>
            </div>
    </article>
  )
}
export default Trip;