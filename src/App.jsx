import Header from './components/Header'
import './styles/style.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './components/HomePage'
import SelectedApartment from './components/SelectedApartment'
import NoMatch from './components/NoMatch'
import { useGlobalContext } from './context/GlobalContext'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const { globalState } = useGlobalContext();
  const {data} = globalState;

  return (
    <>
      <section className='App'>
        <Header />
          <Routes>
            <Route exact path='/' element={<Homepage />}/>
            <Route path='/book/:apartment' element={<SelectedApartment />}/>
            <Route 
              path='/checkout' 
              element={
                data !== null ?
                (<Checkout />
                ) : (
                  <Navigate replace to={'/'} />
                )
              }
            />
            <Route path='*' element={<NoMatch />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
          <Footer />
      </section>
    </>
  )
}

export default App
