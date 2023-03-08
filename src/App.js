import './App.css';
import './pages/Classes.css';
import { Route,Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { format } from 'date-fns';
// import api from './api/trips';
import Layout from './components/Navbar/Layout/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Missing from './pages/Missing';
import LogIn from './pages/LogIn';
import Trips from './pages/Trips';
import MyReservation from './pages/MyReservation';
import ContactUs from './pages/ContactUs';
import Policy from './pages/Policy';
import { DataProvider } from './context/DataContext';
import UserProfile from './pages/UserProfile';
import Condetions from './pages/Condetions';
import MobilePage from './pages/MobilePage';
import Team from './pages/Team';
import EmployeeOrder from './pages/EmployeeOrder';
import Safty from './pages/Safty';
import HomeUser from './pages/HomeUser';
import SelectTime from './pages/SelectTime';
function App() {
  return (
    <DataProvider>
      <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/dintest' element={<HomePage/>}/>
          <Route path='/login'>
            <Route 
              index 
              element={<LogIn/>}/>
            <Route path='/login/alltrips' element={<Trips/>}/>
            <Route path='/login/myreservation' element={<MyReservation/>}/>
            <Route path='/login/homeuser' element={<HomeUser/>}/>
            <Route path='/login/userprofile' element={<UserProfile/>}/>
            <Route path='login/:id/selecttime' element={<SelectTime/>}/>
          </Route>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/condetions' element={<Condetions/>}/>
          <Route path='/mobilepage' element={<MobilePage/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/employeeorder' element={<EmployeeOrder/>}/>
          <Route path='/safty' element={<Safty/>}/>
          <Route path='*' element={<Missing/>}/>
          </Route>
      </Routes>   
    </DataProvider>
  );
}
// npx json-server -p 3500 -w src/data/db.json
// git add .
// git commit -m "Deployed website"      
// git push
// npm run deploy
// git config --global http.postBuffer 524288000
// git config --global http.postBuffer 1048576000
export default App;