import './App.css';
import Form from './components/Form';
import HoverCounter from './HoverCounter';
import ClickCounter from './ClickCounter';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';
function App() {

  return (
    <div className="App">
      {/* <FunctionClick/>
      <ClassClick/>
      <Counter/> */}
    {/* <ParentComp/> */}
      {/* <ClickCounter name='swan'/>
      <HoverCounter name='man'/> */}
      <ErrorBoundary>
      <Hero heroName='superman'/>
      
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName='joker'/>
      
    </ErrorBoundary>
  

    </div>
  );
}

export default App;
