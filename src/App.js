import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboardCMP/dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/loginCmp/Login';
import Registrations from './components/registerCpm/Registrations';
import ForgotPassword from './components/registerCpm/FogotPassword';


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Registrations />} />
        <Route path='/' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    
    
    </div>
  );
}

export default App;
