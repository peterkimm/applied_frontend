// oauth
import { useState, useEffect } from 'react';
import { auth } from './services/firebase';

import './App.css';
// COMPONENTS
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

// PAGES
import Login from './pages/Login';


function App() {
  // oauth
  const [ user, setUser ] = useState(null);
    // use useEffect to observe object/changes to perform functionality
    useEffect(() => {
      auth.onAuthStateChanged(user => setUser(user));
    }, []);
  return (
    <div className="App">
   <Header user={user} />
   <Main />
   <Footer />
   <Login />
   
    </div>
  );
}

export default App;
