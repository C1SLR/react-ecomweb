import "./output.css";
import Header from './components/Header/Header.jsx';
import Herosection from './components/Herosection/Herosection.jsx';
import Rent_And_Lend from "./components/Rent_And_Lend/Rent_And_Lend.jsx";
import Explore_Item from "./components/Explore_Item/Explore_Item.jsx";
import Rental_Reveiws from "./components/Rental_Reveiws/Rental_Reveiws.jsx";
import News_Letter from "./components/News_Letter/News_Letter.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Rent_And_Lend/>
      <Explore_Item/>
      <Rental_Reveiws/>
      <News_Letter/>
      <Footer/>
    </div>
  );
}

export default App;
