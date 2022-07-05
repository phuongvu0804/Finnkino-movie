import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomeTemplate from './containers/HomeTemplate'
import HomePage from './containers/HomeTemplate/HomePage'
import StaySafePage from './containers/HomeTemplate/StaySafePage'
import EnjoyPage from './containers/HomeTemplate/EnjoyPage'
import AdminTemplate from './containers/AdminTemplate'
import Dashboard from './containers/AdminTemplate/Dashboard'
import AddMovie from './containers/AdminTemplate/AddMovie'
import PageNotFound from './containers/PageNotFound'
import MovieListPage from './containers/HomeTemplate/EnjoyPage/MovieListPage'
import MovieDetailPage from './containers/HomeTemplate/MovieDetailPage'
import AuthPage from './containers/HomeTemplate/AuthPage'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="nauti" element={<Navigate replace to="/nauti/ohjelmistossa"/>}/>

        <Route path="" element={<HomeTemplate/>}>
          <Route path="" element={<HomePage/>}/>
          <Route path="turvallisuus" element={<StaySafePage/>}/>
          <Route path="nauti" element={<EnjoyPage/>}>
            <Route path="ohjelmistossa" element={<MovieListPage/>}/>
            <Route path="tulossa" element={<MovieListPage/>}/>
          </Route>
          <Route path="detail/:id" element={<MovieDetailPage/>}/>
          <Route path="websales" element={<AuthPage/>}/>
        </Route>

        <Route path="admin" element={<Navigate replace to="/admin/dashboard"/>}/>

        <Route path="admin" element={<AdminTemplate/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="lisää-elokuva" element={<AddMovie/>}/>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
