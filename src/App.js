// oauth
import { useState, useEffect } from 'react';
import { auth } from './services/firebase';

import './App.css';
// COMPONENTS
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';



function App() {
  // oauth
  const [ user, setUser ] = useState(null);
    // use useEffect to observe object/changes to perform functionality
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
      return () => {
        unsubscribe();
      }
    }, []);
  return (
    <div className="App">
   <Header user={user} />
   <Main user={user}/>
   <Footer />
   
    </div>
  );
}

export default App;
