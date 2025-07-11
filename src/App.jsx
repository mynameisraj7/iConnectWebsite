import HomeFront from "./HomeFront"
import Navbar from "./Navbar"
import Homeabout from "./Homeabout"
import Homeinit from "./Homeinit"
import Homegallery from "./Homegallery"
import Hometouch from "./Hometouch"
import Homefooter from "./Homefooter"
import { Routes, Route } from 'react-router-dom';
import AboutusPage from './pages/Aboutus';

function App() {

  return (
    <>
   <Navbar />
      <Routes>

        <Route path="/" element={
            <>
              <HomeFront />
              <Homeabout />
              <Homeinit />
              <Homegallery />
              <Hometouch />
              <Homefooter />
            </>
          }/>

        <Route path="/about" element={<AboutusPage />}/>

      </Routes>
    </>
  )
}

export default App
