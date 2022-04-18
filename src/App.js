import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Home/Main/Main';
import TopBanner from './components/Home/TopBanner/TopBanner';
import Login from './components/Security/Login/Login';
import SignUp from './components/Security/SignUp/SignUp';
import ShowAll from './components/ShowAll/ShowAll';
import ShoData from './components/ShoData/ShoData';
import RequAuth from './components/RequAuth/RequAuth';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NoteFound from './components/NoteFound/NoteFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Main></Main>}></Route>
       <Route path='/showall/:svid' element={
         <RequAuth>
           <ShowAll></ShowAll>
         </RequAuth>

       }></Route>
       <Route path='/showalldt' element={<ShoData></ShoData>}></Route>
       <Route path='/' element={<TopBanner></TopBanner>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/*' element={<NoteFound></NoteFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
