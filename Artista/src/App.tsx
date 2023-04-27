import './App.css'
import Header, { LinkProps } from './components/Header'
import HomePage from './components/HomePage'
import {
  Route, Routes,
} from "react-router-dom";
import SculturaPage from './components/SculturaPage';
import ChiSonoPage from './components/ChiSonoPage';
import GalleriaPage from './components/GalleriaPage';


const Home: LinkProps = {label: 'Home', link: "/"}
const Opere: LinkProps = {label: 'Opere', link: "/opere"}
const ChiSono: LinkProps = {label: 'Chi Sono ?', link: "/chi-sono"}
const Gallerie: LinkProps = {label: 'Gallerie', link: "/gallerie"}


function App() {
  return (
    <>
      <Header mainLinks={[Home, Opere, ChiSono, Gallerie]} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/opere" element={<SculturaPage />} />
          <Route path="/chi-sono" element={<ChiSonoPage />} />
          <Route path="/gallerie" element={<GalleriaPage />} />
        </Routes>
      </>
  )
}

export default App
