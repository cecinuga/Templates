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
import AvivaSuccessiIdeaBellezzaPage from './components/AvivaSuccessiIdeaBellezzaPage';
import AvivaSuccessiIdeaBellezzaCavalerizza from './components/AvivaSuccessiIdeaBellezzaCavalerizza';
import AvivaSuccessiIdeaBellezzaBari from './components/AvivaSuccessiIdeaBellezzaBari';
import AvivaSuccessiIdeaBellezzaBattipaglia from './components/AvivaSuccessiIdeaBellezzaBattipaglia';
import AvivaSuccessiIdeaBellezzaFuorigrotta from './components/AvivaSuccessiIdeaBellezzaFuorigrotta';
import AvivaSuccessiIdeaBellezzaFoggia from './components/AvivaSuccessiIdeaBellezzaFoggia';
import AvivaSuccessiIdeaBellezzaMatera from './components/AvivaSuccessiIdeaBellezzaMatera';
import AvivaSuccessiIdeaBellezzaPotenza from './components/AvivaSuccessiIdeaBellezzaPotenza';
import AvivaSuccessiIdeaBellezzaRobologna from './components/AvivaSuccessiIdeaBellezzaRobologna';
import AvivaSuccessiIdeaBellezzaSalerno from './components/AvivaSuccessiIdeaBellezzaSalerno';
import AvivaSuccessiIdeaBellezzaSorrento from './components/AvivaSuccessiIdeaBellezzaSorrento';
import AvivaSuccessiIdeaBellezzaValmontone from './components/AvivaSuccessiIdeaBellezzaValmontone';
import AvivaSuccessiIdeaBellezzaVitteman from './components/AvivaSuccessiIdeaBellezzaVitteman';
import AvivaProfumeriePage from './components/AvivaProfumeriePage';
import AvivaFashionPage from './components/AvivaFashionPage';
import AvivaKidsPage from './components/AvivaKidsPage';
import AvivaWellnessPage from './components/AvivaWellnessPage';
import AvivaUfficiPage from './components/AvivaUfficiPage';
import AvivaRistorantiPage from './components/AvivaRistorantiPage';
import AvivaProfumerieViaCavourPage from './components/AvivaProfumerieViaCavourPage';
import AvivaProfumerieChiocciolaPage from './components/AvivaProfumerieChiocciolaPage';
import AvivaProfumerieBodyPage from './components/AvivaProfumerieBodyPage';
import AvivaProfumerieCosmixPage from './components/AvivaProfumerieCosmixPage';
import AvivaProfumerieMariannaPage from './components/AvivaProfumerieMariannaPage';
import AvivaProfumerieLineaPage from './components/AvivaProfumerieLineaPage';
import AvivaProfumerieLineaOristanoPage from './components/AvivaProfumerieLineaOristanoPage';
import AvivaProfumerieLineaCagliariPage from './components/AvivaProfumerieLineaCagliariPage';
import AvivaProfumerieStarPage from './components/AvivaProfumerieStarPage';
import AvivaProfumerieBluePage from './components/AvivaProfumerieBluePage';
import AvivaProfumeriePinalliPage from './components/AvivaProfumerieIdeaBellezzaPage';
import AvivaProfumerieSarzanaPage from './components/AvivaProfumerieSarzanaPage';
import AvivaProfumerieLaSpeziaPage from './components/AvivaProfumerieLaSpezia';
import AvivaProfumerieChiavaliPage from './components/AvivaProfumerieChiavaliPage';
import AvivaProfumerieLineaPiacenzaPage from './components/AvivaProfumerieLineaPiacenzaPage';
import AvivaProfumerieEtruscaPage from './components/AvivaProfumerieEtruscaPage';
import AvivaFashionMilanoPage from './components/AvivaFashionMilanoPage';
import AvivaFashionNewYorkPage from './components/AvivaFashionNewYorkPage';
import AvivaFashionArezzoPage from './components/AvivaFashionArezzoPage';
import AvivaFashionNNArezzoPage from './components/AvivaFashionNNArezzoPage';
import AvivaFashionNNMilanoPage from './components/AvivaFashionNNMilanoPage';
import AvivaKidsMkErbosaPage from './components/AvivaKidsMkErbosaPage';
import AvivaMkSacchettiPage from './components/AvivaMkSacchettiPage';
import AvivaKidsPriAduaPage from './components/AvivaKidsPriAduaPage';
import AvivaKidsFogginiPage from './components/AvivaKidsFogginiPage';

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
            <Route path="/aviva/i-nostri-successi/body-parfum" element={<AvivaSuccessiBodyParfumPage />}></Route>
            <Route path="/aviva/i-nostri-successi/idea-bellezza" element={<AvivaSuccessiIdeaBellezzaPage />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/cavallerizza" element={<AvivaSuccessiIdeaBellezzaCavalerizza />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/bari" element={<AvivaSuccessiIdeaBellezzaBari />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/battipaglia" element={<AvivaSuccessiIdeaBellezzaBattipaglia />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/fuorigrotta" element={<AvivaSuccessiIdeaBellezzaFuorigrotta />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/foggia" element={<AvivaSuccessiIdeaBellezzaFoggia />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/matera" element={<AvivaSuccessiIdeaBellezzaMatera />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/potenza" element={<AvivaSuccessiIdeaBellezzaPotenza />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/robologna" element={<AvivaSuccessiIdeaBellezzaRobologna />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/salerno" element={<AvivaSuccessiIdeaBellezzaSalerno />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/sorrento" element={<AvivaSuccessiIdeaBellezzaSorrento />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/valmontone" element={<AvivaSuccessiIdeaBellezzaValmontone />}></Route>
              <Route path="/aviva/i-nostri-successi/idea-bellezza/vitteman" element={<AvivaSuccessiIdeaBellezzaVitteman />}></Route>
            <Route path="/aviva/i-nostri-successi/la-chiocciola" element={<AvivaSuccessiChiocciolaPage />}></Route>
          <Route path="/aviva/corporate-profile" element={<AvivaCorporatePage />}></Route>
          <Route path="/aviva/profumerie" element={<AvivaProfumeriePage />}></Route>
            <Route path="/aviva/profumerie/viacavour" element={<AvivaProfumerieViaCavourPage />}></Route>
            <Route path="/aviva/profumerie/chiocciola" element={<AvivaProfumerieChiocciolaPage />}></Route>
            <Route path="/aviva/profumerie/body" element={<AvivaProfumerieBodyPage />}></Route>
            <Route path="/aviva/profumerie/cosmix" element={<AvivaProfumerieCosmixPage />}></Route>
            <Route path="/aviva/profumerie/marianonnaud" element={<AvivaProfumerieMariannaPage />}></Route>
            <Route path="/aviva/profumerie/linea-bellezza" element={<AvivaProfumerieLineaPage />}></Route>
              <Route path="/aviva/profumerie/linea-bellezza/oristano" element={<AvivaProfumerieLineaOristanoPage />}></Route>
              <Route path="/aviva/profumerie/linea-bellezza/cagliari" element={<AvivaProfumerieLineaCagliariPage />}></Route>
            <Route path="/aviva/profumerie/star" element={<AvivaProfumerieStarPage />}></Route>
            <Route path="/aviva/profumerie/blue" element={<AvivaProfumerieBluePage />}></Route>
            <Route path="/aviva/profumerie/pinalli" element={<AvivaProfumeriePinalliPage />}></Route>
              <Route path="/aviva/profumerie/pinalli/sarzana" element={<AvivaProfumerieSarzanaPage />}></Route>
              <Route path="/aviva/profumerie/pinalli/laspezia" element={<AvivaProfumerieLaSpeziaPage />}></Route>
              <Route path="/aviva/profumerie/pinalli/chiavali" element={<AvivaProfumerieChiavaliPage />}></Route>
              <Route path="/aviva/profumerie/pinalli/piacenza" element={<AvivaProfumerieLineaPiacenzaPage />}></Route>
            <Route path="/aviva/profumerie/idea-bellezza" element={<AvivaSuccessiIdeaBellezzaPage />}></Route>
            <Route path="/aviva/profumerie/etrusca" element={<AvivaProfumerieEtruscaPage />}></Route>
          <Route path="/aviva/fashion" element={<AvivaFashionPage />}></Route>
            <Route path="/aviva/fashion/bramilano" element={<AvivaFashionMilanoPage />}></Route>
            <Route path="/aviva/fashion/newyork" element={<AvivaFashionNewYorkPage />}></Route>
            <Route path="/aviva/fashion/braarezzo" element={<AvivaFashionArezzoPage />}></Route>
            <Route path="/aviva/fashion/nnarezzo" element={<AvivaFashionNNArezzoPage />}></Route>
            <Route path="/aviva/fashion/nnmilano" element={<AvivaFashionNNMilanoPage />}></Route>
          <Route path="/aviva/kids" element={<AvivaKidsPage />}></Route>
            <Route path="/aviva/kids/mkerbosa" element={<AvivaKidsMkErbosaPage />}></Route>
            <Route path="/aviva/kids/mksacchetti" element={<AvivaMkSacchettiPage />}></Route>
            <Route path="/aviva/kids/priadua" element={<AvivaKidsPriAduaPage />}></Route>
            <Route path="/aviva/kids/prifoggini" element={<AvivaKidsFogginiPage />}></Route>
            <Route path="/aviva/kids/pripontedera" element={<AvivaKidsMkErbosaPage />}></Route>
            <Route path="/aviva/kids/priquerce" element={<AvivaKidsMkErbosaPage />}></Route>
            <Route path="/aviva/kids/priviareggio" element={<AvivaKidsMkErbosaPage />}></Route>
          <Route path="/aviva/wellness" element={<AvivaWellnessPage />}></Route>
          <Route path="/aviva/uffici" element={<AvivaUfficiPage />}></Route>
          <Route path="/aviva/ristoranti" element={<AvivaRistorantiPage />}></Route>
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
