
import './App.css';
// COMPONENTS
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

// PAGES
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
   <Header />
   <Main />
   <Footer />
   <Login />
   
    </div>
  );
}

export default App;
