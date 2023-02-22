import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import { Suspense } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

const Intro = React.lazy(() => import('./pages/Intro'));
const Aboutme = React.lazy(() => import('./pages/Aboutme'))
const Latest = React.lazy(() => import('./pages/Latest'))
const Exhibition = React.lazy(() => import('./pages/Exhibition'))

const ContentsStyle = styled.div`
    height: fit-content;
    min-height: 100%;
`

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Header/>
                <ContentsStyle>
                    <Routes>
                        <Route path='/' element={<Intro />}></Route>
                        <Route path='/aboutme' element={<Aboutme />}></Route>
                        <Route path='/latest' element={<Latest/>}></Route>
                        <Route path='/exhibition' element={<Exhibition/>}></Route>
                    </Routes>
                </ContentsStyle>
                <Footer/>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;