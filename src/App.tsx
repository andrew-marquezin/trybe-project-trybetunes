import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Search from './pages/search/Search';
import Album from './pages/album/Album';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
