import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import InfoPage from '../pages/Info';

function RouteServices () {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/info' element={<InfoPage />} />
        </Routes>
    );
}

export default RouteServices;