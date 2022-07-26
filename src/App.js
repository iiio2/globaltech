import Navbar from './components/common/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Login from './components/login';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <Services />
      <Login />
    </div>
  );
}

export default App;
