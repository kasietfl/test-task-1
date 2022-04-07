import './App.css';
import Login from './pages/Login';
import News from './pages/News';
import Profile from './pages/Profile';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
