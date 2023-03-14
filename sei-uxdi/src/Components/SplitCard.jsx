import { React } from 'react';
import '../TableCellCard.css';
import '../SplitCard.css'

function Pastries(props) {
  return (
    <div className='pastry'>

      <img src={props.image} alt="pastry" className='img' />
      <div className="pastry-content">
        <div className='splitcard-title'>
          {props.title}
        </div>
        <div className='summary'>
          {props.summary}
          <button className='btn'>
            Order Now
          </button>
        </div>
      </div>


    </div >
  )
}

function App() {
  return (
    <div>
      <div className='section-title'>
        Latest Pastries
      </div>
      <div className='snacks'>

        <Pastries
          image="https://i.imgur.com/CUt8RPR.png"
          title="Matcha Croissant"
          summary="Flaky crispy matcha croissants filled with creamy and sweet matcha custard" />

        <Pastries
          image="https://i.imgur.com/6CMIsof.png"
          title="Peach Tart"
          summary="Flaky crispy matcha croissants filled with creamy and sweet matcha custard"
        />
      </div>

    </div>

  )
}

export default App;