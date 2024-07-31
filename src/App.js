import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Header from './components/Header';
import CreateBlog from './components/CreateBlog';
import AuthorDashboard from './components/AuthorDashboard';
import UpdateBlog from './components/UpdateBlog';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/create_post' element={<CreateBlog/>} />
        <Route path='/author' element={<AuthorDashboard/>} />
        <Route path='/update_blog' element={<UpdateBlog/>} />
        <Route path='/admin_dashboard/*' element={<AdminDashboard/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
