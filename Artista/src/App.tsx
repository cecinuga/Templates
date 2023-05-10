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
import Prof1Page from './components/Prof1Page';
import Prof2Page from './components/Prof2Page';
import Prof3Page from './components/Prof3Page';
import Prof4Page from './components/Prof4Page';
import SalessoPage from './components/SalessoPage';
import AvivaPage from './components/AvivaPage';
import AvivaCorporatePage from './components/AvivaCorporatePage';
import AvivaSuccessiPage from './components/AvivaSuccessiPage';
import AvivaSuccessiViaCavourPage from './components/AvivaSuccessiViaCavourPage';
import AvivaSuccessiCosmixPage from './components/AvivaSuccessiCosmixPage,';
import AvivaSuccessiBodyParfumPage from './components/AvivaSuccessiBodyParfumPage';
import AvivaSuccessiChiocciolaPage from './components/AvivaSuccessiChiocciola';

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
        <Route path="/salesso" element={<SalessoPage />} />
        <Route path="/prof1" element={<Prof1Page />} />
        <Route path="/prof2" element={<Prof2Page />} />
        <Route path="/prof3" element={<Prof3Page />} />
        <Route path="/prof4" element={<Prof4Page />} />
        <Route path="/aviva" element={<AvivaPage />}></Route>
          <Route path="/aviva/progetti-e-servizi" element={<AvivaSuccessiPage />}></Route>
          <Route path="/aviva/i-nostri-successi" element={<AvivaSuccessiPage />}></Route>
            <Route path="/aviva/i-nostri-successi/via-cavour" element={<AvivaSuccessiViaCavourPage />}></Route>
            <Route path="/aviva/i-nostri-successi/cosmix-store" element={<AvivaSuccessiCosmixPage />}></Route>
            <Route path="/aviva/i-nostri-successi/idea-bellezza" element={<AvivaSuccessiBodyParfumPage />}></Route>
            <Route path="/aviva/i-nostri-successi/la-chiocciola" element={<AvivaSuccessiChiocciolaPage />}></Route>
          <Route path="/aviva/corporate-profile" element={<AvivaCorporatePage />}></Route>
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
