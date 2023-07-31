import { Link } from 'react-router-dom';
import { rooms } from '../assets/data/data';

const Listing = () => {
  return (
    <section id="Listing">
      <div className="listing-container">
        <h2>Our Suites</h2>

        <div className="listing-items">
          {rooms.map(room => (
            <div className="listing-item" key={room.id}>
              <div className='listing-image'>
              <img src={room.image} alt="heroimage" /> 
              </div>
              <div className="listing-texts">
                <h3>{room.name}</h3>
                <h4>{room.houseType}</h4>
                <p className={`room-rating ${room.rating > 7 ? 'green' : room.rating < 5 ? 'red' : 'grey'}`}>{room.rating}</p>
                <p>{room.description}</p>
                <div className='pricing-container'>
                  <h4>&#8358;{room.price}</h4>
                  <Link to={`/book/${room.id}`}>Proceed</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Listing;