import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Shop from './components/Shop'
import CartProvider from './CartContext'
import Preloader from './components/Preloader'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //handle preloader
  useEffect(() => {
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className='overflow-hidden'>
      <CartProvider>
        <AnimatePresence
          initial={false}
          mode="wait">
          {isLoading && (
            <Preloader />
          )}
        </AnimatePresence>
        <div className={`${isLoading ? 'hidden' : 'block'}`}>
          <Navbar />
          <Hero />
          <About />
          <Shop />
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

        </div>
      </CartProvider>

    </div>
  )
}

export default App
