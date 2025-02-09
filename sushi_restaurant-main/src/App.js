import Explore from "./Explore/Explore";
import Landing from "./Landing/Landing";
import Order from "./Order/Order";
import Collection from './Collection/Collection';
import Contact from './Contact/Contact';
import { Link as ScrollLink } from 'react-scroll';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./Video/Video";
import Chef from "./Chef/Chef";
import Plat from "./Plat/Plat";
import Footer from "./Footer/Footer";
import Detail from "./Detail/Detail";
import { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import Review from "./Review/Review";
import Cart from "./Cart/Cart";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Galerie from './Galerie/Galerie';
import Meet from "./Meet/Meet";
import AdminPanel from "./AdminPanel/AdminPanel";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
function App() {
  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.pageYOffset]);
  return (
    <BrowserRouter>
      {showToTop && (
        <div className='toTop'>
        <div className="a-before"></div>
        <div className="a-after"></div>
        <div className="a-before-one"></div>
        <div className="a-after-two"></div>
        <div className="a-before-three"></div>
        <div className="a-after-four"></div>
          <ScrollLink to="top" smooth={true} duration={500}>
            <span className='span'>top</span>
          </ScrollLink>
        </div>
      )}
      <Routes>
        <Route path="/" element={
          (
            <div style={{overflow: 'hidden'}}>
              <Landing/>
              <Explore/>
              <Order/>
              <Collection/>
              <Video/>
              <Chef/>
              <Plat/>
              <Review page=''/>
              <Contact/>
              <Footer theme=''/>
            </div>
          )
        }/>
        <Route path="/product/:name" element={<Detail/>}/>
        <Route path="/menu-small-images" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/pages/about-us" element={<AboutUs/>}/>
        <Route path="/pages/contact-us" element={<ContactUs/>}/>
        <Route path="/pages/meet-the-chef" element={<Meet/>}/>
        <Route path="/pages/galerie" element={<Galerie/>}/>
        <Route path="/admin-panel" element={<AdminPanel/>} />
        <Route path="/admin-signup" element={<Signup/>} />
        <Route path="/admin-login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
