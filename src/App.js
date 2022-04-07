import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import News from './pages/News';
import Profile from './pages/Profile';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const [isAuth, setIsAuth] = React.useState('false');
    const setStateFunc = (state) => {
        setIsAuth(state);
    };

    // console.log(isAuth);

    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/login'
                        element={
                            <Login
                                isAuth={isAuth}
                                setStateFunc={setStateFunc}
                            />
                        }
                    />
                    <Route path='/news' element={<News />} />
                    <Route
                        path='/profile'
                        element={
                            isAuth ? (
                                <Profile />
                            ) : (
                                <Navigate replace to='/login' />
                            )
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
