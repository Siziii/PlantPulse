import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Shop from './components/Shop'
import CartProvider from './CartContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='overflow-hidden'>
      <CartProvider>
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
      </CartProvider>
    </div>
  )
}

export default App
