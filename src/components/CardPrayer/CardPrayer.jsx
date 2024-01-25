import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

import './CardPrayer.css'


const CardPrayer = ({ title, img  , alt ,timeP} ) => {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={img}  alt={alt}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='display-3'>
          {timeP}
        </Card.Text>
        
        
      </Card.Body>
    </Card>
  )
}

CardPrayer.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  timeP: PropTypes.string.isRequired,
};

export default CardPrayer




