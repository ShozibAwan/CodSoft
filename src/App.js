import './App.css';
import MainDesign from './components/MainDesign';
import MyWork from './components/MyWork';
import Expert from './components/Expert';
import Project from './components/Project';
function App() {
  return (
      <div className='main'>
        <MainDesign/>
        <MyWork/>
        <Expert/>
        <Project/>
        </div>
  );
}

export default App;
