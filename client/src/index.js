import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import RatingContainer from '../src/Ratings/RatingContainer.jsx';
import RelatedList from '../src/Related/RelatedList.jsx';
import Overview from './Overview/overview.jsx';
import "./index.css"
import QandA from '../src/Q&A/QandA.jsx';
import OutfitList from '../src/Related/OutfitList.jsx';

var App = (props) => {
  const max = 60000;
  const min = 59553;
  const randomProductId = Math.floor(Math.random() * (max - min + 1)) + min;
  const [productId, setproductId] = useState(randomProductId);

  return (
    <div id="app">
      <Overview className='relatedCard' />
      <RelatedList />
      <OutfitList />
      <QandA productId={productId}/>
      <RatingContainer productId={59553} />
    </div>
    )
}

ReactDOM.render(<App className="App" />, document.getElementById('root'));
