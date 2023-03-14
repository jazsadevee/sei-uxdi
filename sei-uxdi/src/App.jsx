
import Navigation from './components/Navigation'
import Carousel from './components/Carousel'
import TableCellCard from './components/TableCellCard';
import FullCard from './components/FullCard';
import Footer from './components/Footer';
// import logo from ‘./logo.svg’;
import './TableCellCard.css';
import SplitCard from './components/SplitCard'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Carousel></Carousel>
      <FullCard></FullCard>
      <TableCellCard></TableCellCard>
      <Footer></Footer>
      <SplitCard></SplitCard>
    </>
  );
}
export default App;


