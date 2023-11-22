import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import MainData from "./components/MainData";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Our_winnning from "./components/Our_winnning";
import SoImportant from "./components/SoImportant";

import TogetherContainer from "./components/TogetherContainer";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <div className="App">
      <Header />

      <MainData />

      <SoImportant />
      <FAQSection />
      <Our_winnning />

      <TogetherContainer />

      <Footer />
    </div>
  );
}

export default App;
