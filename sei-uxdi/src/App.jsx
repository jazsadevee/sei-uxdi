
import './App.css';
import Navigation from './components/Navigation'
import Carousel from './components/Carousel'
import TableCellCard from './components/TableCellCard';
import FullCard from './components/FullCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Carousel></Carousel>
      <FullCard></FullCard>
      <TableCellCard></TableCellCard>
      <Footer></Footer>
    </>
  );
}
export default App;


