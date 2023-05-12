import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

import './App.css';

function App() {
  return ( 
    <div className="container-fluid">
    
    {/* Header */}
    <div className="row">
      <Header/>
    </div>

    {/* Sidebar & Main Content */}
    <div className="row">
      <Sidebar/>
      <Main/>
    </div>

    </div> 
  );
}

export default App;