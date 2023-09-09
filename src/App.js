import './App.css';
import {LayoutMain} from './components/Layout/LayoutMain';
import {Dashboard} from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <LayoutMain>
        <Dashboard />
      </LayoutMain>

    </div>
  );
}

export default App;
