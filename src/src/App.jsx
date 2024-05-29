import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import Slider from './components/Slider';
import Footer from './components/Footer';
import SlideBar from './components/SlideBar';  // Ensure this import is correct
import Cart from './components/Cart';
import Tele from './components/Tele';
import Theme from "./components/Theme";
import Signin from './Signin/Signin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center bg-[url('image.png')]">
        <TopNav />
        <div className="flex">
          <div className="flex-shrink-0">
            <SlideBar />
          </div>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tele" element={<Tele />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Slider />
      <div className="flex space-x-4 pl-14">
        <Cart
          image="https://www.pharmacyonline.co.uk/uploads/images/products/large/pharmacy-online-paracetamol-paracetamol-500mg-100-tablets-1602960473paracetamol-1.jpg"
          title="Paracetamol"
          description="Effective pain relief tablets."
        />
        <Cart
          image="https://www.squarepharma.com.bd/products/Flexi.jpg"
          title="Flexi"
          description="Pain relief and anti-inflammatory tablets."
        />
        <Cart
          image="https://www.squarepharma.com.bd/products/Flexi.jpg"
          title="Flexi"
          description="Pain relief and anti-inflammatory tablets."
        />
      </div>
    </>
  );
}

function Chat() {
  return <div>Healthcare Chatbot Page</div>;
}

export default App;
