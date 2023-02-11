import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import { Suspense } from 'react';
import Loading from './components/Loading';
const Intro = React.lazy(() => import('./pages/Intro'));

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Intro />}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;