import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import AllAuthors from '../AllAuthors';
import AllReaders from '../AllReaders';
import AllPosts from '../AllPosts';


const AdminDashboard = () => {
  const [selectedLink, setSelectedLink] = useState('');
  const location = useLocation();

  // Set the selected link based on the current path
  React.useEffect(() => {
    setSelectedLink(location.pathname.split('/').pop());
  }, [location]);

  return (
    <div>
      <div className='bg-dark-subtle text-center py-5'>
        <Link 
          to='' 
          className={`btn mx-2 p-3 border ${selectedLink === 'admin_dashboard' ? 'bg-black text-white' : 'bg-white text-dark'}`}
        >
          All Authors
        </Link>
        <Link 
          to='all_readers' 
          className={`btn mx-2 p-3 border ${selectedLink === 'all_readers' ? 'bg-black text-white' : 'bg-white text-dark'}`}
        >
          All Readers
        </Link>
        <Link 
          to='all_posts' 
          className={`btn mx-2 p-3 border ${selectedLink === 'all_posts' ? 'bg-black text-white' : 'bg-white text-dark'}`}
        >
          All Posts
        </Link>
      </div>

      <Routes>
        <Route path='/' element={<AllAuthors />} />
        <Route path='all_readers' element={<AllReaders />} />
        <Route path='all_posts' element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;
