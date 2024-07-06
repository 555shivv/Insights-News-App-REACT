import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const pageSize=15;
  const apikey=process.env.REACT_APP_API_KEY
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pageSize} apikey={apikey} country="in" category="general" />} />
          <Route  exact path="/business" element={<News key="business"pageSize={pageSize} apikey={apikey} country="in" category="business" />} />
          <Route  exact path="/entertainment" element={<News key="entertainment"pageSize={pageSize} apikey={apikey} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News key="general"pageSize={pageSize} country="in" apikey={apikey} category="general" />} />
          <Route exact path="/health" element={<News key="health"pageSize={pageSize} country="in" apikey={apikey} category="health" />} />
          <Route exact path="/science" element={<News key="science"pageSize={pageSize} country="in" apikey={apikey} category="science" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={pageSize}  apikey={apikey} country="in" category="technology" />} />
          <Route exact path="/sports" element={<News key="sports"pageSize={pageSize} country="in" apikey={apikey} category="sports" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
