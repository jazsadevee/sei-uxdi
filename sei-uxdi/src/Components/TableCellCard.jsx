import { React } from 'react';
import '../styles/TableCellCard.css';

function Beverage(props) {
  return (

    <div className='beverage-container'>
      <img src={props.image} alt='drinks' />
      <div>
        <div className='beverage-title'>
          {props.title}
        </div>
        <div className='beverage-summary'>{props.summary}</div>
        <button className='beverage-btn'>Order Now</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <div className='beverage-header'>
        Beverage Specials
      </div>
      <div className='beverages'>

        <Beverage
          image="https://i.imgur.com/VPtTb6W.png"
          title="Ube Latte"
          summary="A delicious mixture of espresso, ube flavoring, and sweetened condensed coconut milk"
        />
        <div className='line-break'></div>
        <Beverage
          image="https://i.imgur.com/4Tr7HGT.png"
          title="Kashmiri Chai"
          summary="Often called Pink Tea, Kashmiri chai is a milk tea characterized by its dusty pink color"
        />
        <div className='line-break'></div>
        <Beverage
          image="https://i.imgur.com/hq8js8J.png"
          title="Pea Flower Tea"
          summary="Butterfly Pea Flower is a plant native to Southeast Asia that's commonly used in tea"
        />

      </div>
    </div>
  );
}

export default App;
