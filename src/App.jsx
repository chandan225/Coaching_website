
import './index.css';
import Nav from './Nav';
import About from './About';
import Facilities from './Facilities';
import Faculty from './Faculty';
import Gallery from './Gallery';
import Contact from './ContactUs';



function App() {
 

  return (
    <div className='bg-gradient-to-r from-slate-800 to-indigo-600 w-screen h-auto'>
    <Nav/>
    <About/>
    <Facilities/>
    <Faculty/>
    <Gallery/>
    <Contact/>
    {/* <h1>hi</h1> */}

    </div>
  )
}

export default App
