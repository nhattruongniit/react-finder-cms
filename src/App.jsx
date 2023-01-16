import { Routes, Route } from 'react-router-dom'

// components
import SideBar from './components/SideBar';
import Header from './components/Header';

// pages
import Dashboard from "./pages/Dashboard";
import ListJob from "./pages/Jobs/ListJob";
import NewJob from './pages/Jobs/NewJob';
import DetailJob from './pages/Jobs/DetailJob';

function App() {
  return (
    <div className="w-full bg-blue-500 dark:hidden min-h-75">
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75" />

      <SideBar />

      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        <Header />

        <div className="w-full px-6 py-6 mx-auto">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/job' element={<ListJob />} />
            <Route path='/job/new' element={<NewJob />} />
            <Route path='/job/:id' element={<DetailJob />} />
          </Routes>
        </div>

        
      </main>
    </div>
  );
}

export default App;
