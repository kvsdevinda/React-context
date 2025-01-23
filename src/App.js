import logo from './logo.svg';
import './App.css';

// import Contact from './Components/Contact';
// import ContextProvider from './Context/AppContext';
// import Footer from './Components/Footer';
import UseCounter from './UseCounter';
import { Outlet } from 'react-router-dom';
import Testcompone from './Components/Testcompone';
// import LayoutEffectTest from './Components/Layout-effect-test';



function App() {
  // const {increment,decrement,count} = UseCounter(5)
  return (
 
    // <div>
    //   <Testcompone/>
    // </div>
      // </Testcompone>
      <main>
        <Outlet></Outlet>
      </main> 
  
    // // <>
    // // <div>
    // //   <p>Count : {count}</p>
    // //   <button onClick={increment}>increment</button>
    // //   <button onClick={decrement}>decrement</button>
      
    // // </div>

    // {/* <LayoutEffectTest/> */}

    // {/* <ContextProvider>
    //   <Contact/>
    //   <Footer/>
    // </ContextProvider> */}

    // // </>
  );
}

export default App;
