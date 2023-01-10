import Navbar from './components/Navbar';
import Topsection from './components/Topsection';
import Midsection from './components/Midsection';

const App = () => {
  return (
    <div className='max-w-[14400px] max-h-auto bg-white'>
      <Navbar />
      <Topsection/>
      <Midsection/>
    </div>
  );
};

export default App;
