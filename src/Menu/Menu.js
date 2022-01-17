import React,{lazy,Suspense} from 'react'
import './Menu.css'
import { HashRouter,Route,Routes} from 'react-router-dom'
/*
import { Home } from '../Home/Home'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Services } from '../Services/Services'
import { PageNotFound } from '../PageNotFound/PageNotFound'
*/
const Home = lazy(() => import ('../Home/Home'))
const About = lazy(() => import ('../About/About'))
const Contact = lazy(() => import ('../Contact/Contact'))
const Services = lazy(() => import ('../Services/Services'))
const PageNotFound = lazy(() => import ('../PageNotFound/PageNotFound'))

export const Menu = () => {
    return (
        <div>
            <div className='menu'>
                <a href="#/home">Home</a>
                <a href="#/about">About</a>
                <a href="#/contact">Contact</a>
                <a href="#/services">Services</a>
            </div>
            <Suspense fallback="Loading...">
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='home' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='services' element={<Services />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes> 
                </HashRouter>
            </Suspense> 
        </div>
    )
}
