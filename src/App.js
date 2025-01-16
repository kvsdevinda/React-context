import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import ContextProvider from './Context/AppContext';
import Footer from './Components/Footer';


function App() {
  return (
 
    <>

    <ContextProvider>
      <Contact/>
      <Footer/>
    </ContextProvider>

    </>
  );
}

export default App;
