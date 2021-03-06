import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CalendarMain from './components/Calendar/CalendarMain';
import ToDoMain from './components/ToDoMain/ToDoMain';
import Footer from './components/Home/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';


function App() {
  return (
    <div style={{backgroundColor: '#EFFFFD'}}>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/completedTasks' element={<CompletedTasks/>}/>
          <Route path='/toDo' element={<ToDoMain/>}/>
          <Route path='/calendar' element={<CalendarMain/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
