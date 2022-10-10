import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboardCMP/dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/loginCmp/Login';
import Registrations from './components/registerCpm/Registrations';
import ForgotPassword from './components/registerCpm/FogotPassword';
import { Link } from 'react-router-dom';
import Logout from './components/loginCmp/Logout';
import CreatePost from './components/postsCmp/CreatePost';
import PaginationPage from './components/PaginationPage';
import Home from './components/dashboardCMP/Home';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar';
import MainCategoryList from './components/Categories/MainCategories/MainCategoryList';
import AddMainCategory from './components/Categories/MainCategories/AddMainCategory';
import SubcategoryList from './components/Categories/SubCategories/SubcategoryList';
import AddSubCategory from './components/Categories/SubCategories/AddSubCategory';
import ChildCategoriesList from './components/Categories/ChildCategory/ChildCategoriesList';
function App() {
  const user_token = localStorage.getItem('token')
 
  return (
    
    <div className="App">
       <>
    <div>

      {/* <Header /> */}
      {user_token ?
      <>

<Sidebar />
      <Link to="/home"><strong>Home</strong></Link>&nbsp;&nbsp;
    <Link to="/dashboard"><strong>Dashboard</strong></Link>&nbsp;&nbsp;
    <Link to="/logout"><strong>Logout</strong></Link>&nbsp;&nbsp;

      </>
      :
      <>
    <Link to="/"><strong>login</strong></Link>&nbsp;&nbsp;
    <Link to="/register"><strong>Signup</strong></Link>&nbsp;&nbsp;
    <Link to="/about"><strong>About Us</strong></Link>&nbsp;&nbsp;
    {/* <Link to="/signup"><strong>Signup</strong></Link>&nbsp;&nbsp; */}

      </>
      }
    </div>
    </>
      <Routes>
        <Route path='/register' element={<Registrations />} />
        <Route path='/' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/addpost' element={<CreatePost/>} />
        <Route path='/page' element={<PaginationPage/>} />
        <Route path='/home' element={<Home/>} />
        {/* <Route path='/maincategory' element={<MainCategory/>} /> */}
        <Route path='/maincatlist' element={<MainCategoryList/>} />
        <Route path='/addmaincate' element={<AddMainCategory/>} />
        <Route path='/subcatlist' element={<SubcategoryList/>} />
        <Route path='/addsubcat' element={<AddSubCategory/>} />
        <Route path='/childcatelist' element={<ChildCategoriesList/>} />
      </Routes>
    
    
    </div>
  );
}

export default App;
