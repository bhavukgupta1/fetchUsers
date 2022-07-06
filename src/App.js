import logo from './logo.svg';
import './App.css';
import FetchUsers from './componants/FetchUsers';
import Navbar from './componants/Navbar';

function App() {
  return (
    <div className="container my-3">
      <Navbar />
      <FetchUsers />
    </div>
  );
}

export default App;
