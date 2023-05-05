import './App.css'
import Header, { LinkProps } from './components/Header'
import HomePage from './components/HomePage'
import {
  Route, Routes,
} from "react-router-dom";
import AvivaAAPage from './components/AvivaAAPage';
import BackgroundGradient from './components/BackgroundGradient';
import BrunePage from './components/BrunePage';
import CapoPage from './components/CapoPage';
import ViaCavourPage from './components/ViaCavourPage';
import ColombiaPage from './components/ColombiaPage';
import FilziPage from './components/FilziPage'
import IqPage from './components/IqPage';
import MarCaspioPage from './components/MarCaspioPage';
import LibroPage from './components/LibroPage';
import KishIslandPage from './components/KishIslandPage';
import MonsuPage from './components/MonsuPage';
import RestauroPage from './components/RestauroPage';
import ViaPistoiesePage from './components/ViaPistoiesePage';

const Home: LinkProps = {label: 'Home', link: "/"}

function App() {
  return (
    <>
      <Header mainLinks={[Home]} />
      <BackgroundGradient bgColor={"#1a1b27"} gradient={true} move={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iq" element={<IqPage />} />
        <Route path="/mar-caspio" element={<MarCaspioPage />} />
        <Route path="/kish-island" element={<KishIslandPage />} />
        <Route path="/monsu" element={<MonsuPage />} />
        <Route path="/via-pistoiese" element={<ViaPistoiesePage />} />
        <Route path="/restauro" element={<RestauroPage />} />
        <Route path="/libro" element={<LibroPage />} />
        <Route path="/aviva-associateds-architect" element={<AvivaAAPage />}></Route>
        <Route path="/piazza-brunelleschi" element={<BrunePage />}></Route>
        <Route path="/capo" element={<CapoPage />}></Route>
        <Route path="/viacavour" element={<ViaCavourPage />}></Route>
        <Route path="/colombia" element={<ColombiaPage />}></Route>
        <Route path="/filzi" element={<FilziPage />}></Route>
      </Routes>
      </>
  )
}

export default App
