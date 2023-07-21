
import Navigation from './Components/Navigation.jsx';
import Carousel from './Components/Carousel.jsx'
import TableCellCard from './Components/TableCellCard.jsx';
import FullCard from './Components/FullCard.jsx';
import Footer from './Components/Footer.jsx';
// import logo from ‘./logo.svg’;
import SplitCard from './Components/SplitCard.jsx';
import './styles/Carousel.css';
import './styles/Footer.css';
import './styles/SplitCard.css';
import './styles/TableCellCard.css';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Carousel></Carousel>
      <FullCard></FullCard>
      <TableCellCard></TableCellCard>
      <SplitCard></SplitCard>
      <Footer></Footer>
    </>
  );
}
export default App;


