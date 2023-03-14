import { React } from 'react';
import '../App.css';

function Beverage(props) {
  return (

    <div className='beverage'>
      <img src={props.image} alt='drinks' />
      <div>
        <div className='title'>
          {props.title}
        </div>
        <div className='summary'>{props.summary}</div>
        <button className='btn'>Order Now</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <div className='title'>
        Beverage Specials
      </div>
      <div className='beverages'>

        <Beverage
          image="https://i.imgur.com/VPtTb6W.png"
          title="Ube Latte"
          summary="A delicious mixture of espresso, ube flavoring, and sweetened condensed coconut milk"
        />
        <Beverage
          image="https://i.imgur.com/4Tr7HGT.png"
          title="Kashmiri Chai"
          summary="Often called Pink Tea, Kashmiri chai is a milk tea characterized by its dusty pink color"
        />
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
