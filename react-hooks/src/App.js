import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import HookDemo from './components/HookDemo';
import HookCounterThree from './components/HookCounterThree';
import UseEffectDemo from './components/UseEffectDemo';

function App() {
  return (
    <div className="App">
      {/* <HookCounterThree/> */}

      <UseEffectDemo/>
    </div>
  );
}

export default App;
