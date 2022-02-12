import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Head from './components/Head';



function App() {
  return (
    <div className='bg-green-500 disable-select font-nunito'>
      <Head/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
