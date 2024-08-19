import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import InsertCard from './InsertCard/InsertCard';
import Practice from './Practice/Practice';
import Question from './Question/Question';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <header className="App-header">
        <Link to={"/insertcard"}>插入问题</Link> 
        <Link to={"/question"}>问题选择</Link> 
        <Link to={"/practice"}>练习</Link> 
      </header>
      <Routes>
        <Route  path="/question" Component={Question} />
        <Route  path="/practice" Component={Practice} />
        <Route path="/insertcard" Component={InsertCard} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
