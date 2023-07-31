import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const FormComponent = ({startDate, endDate, imageLink, roomName, roomType, roomPrice} ) => {
  const [nightsNum, setNightsNum] = useState(0);
  const { updateGlobalState } = useGlobalContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startDate: startDate,
    endDate: endDate,
    price: 0,
    night: 0,
    vat: 0,
    total: 0,
    grandTotal: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    dateConverter(startDate, endDate);
  }, [startDate, endDate]);

  const dateConverter = (startDate, timeEnd) => {
    const newStartDate= new Date(startDate);
    const newEndDate=new Date(timeEnd);
    const one_day = 1000*60*60*24;
    let result
    result = Math.ceil((newEndDate.getTime()-newStartDate.getTime())/(one_day))
    setNightsNum(result)
    if (result < 0 ) {return 0}
    
    return result
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const upDatedForm = {
      ...formData,
      startDate: startDate,
      endDate: endDate,
      night: nightsNum,
      total: nightsNum * roomPrice,
      vat: ((nightsNum * roomPrice) * (1.5 / 100)).toFixed(2),
      grandTotal: ((nightsNum * roomPrice) * (1.5 / 100) + (nightsNum * roomPrice)).toFixed(2),
    };
  
    updateGlobalState(upDatedForm);
    navigate('/checkout');
  };

  return (
    <section className='FormComponent'>
      <div className="container">
      <div className="card">
        <div className="card-image" style={{backgroundImage: `url(${imageLink})`}}>	
          <h2 className="card-heading">
            {roomName}
            <small>{roomType}</small>
          </h2>
        </div>

        <form className="card-form" onSubmit={handleSubmit}>
          <div className="input">
            <input 
              type="text" 
              className="input-field" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="input-label">Full Name</label>
          </div>
          
          <div className="input">
            <input 
              type="email" 
              className="input-field" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <label htmlFor="email" className="input-label">Email</label>
          </div>

          <div className="input">
            <input 
              type="date" 
              className="input-field" 
              id="startDate"
              name="startDate"
              value={startDate}
              disabled={true} 
              required 
            />
            <label htmlFor="startDate" className="input-label">Start Date</label>
          </div>

          <div className="input">
            <input 
              type="date" 
              className="input-field" 
              id="endDate"
              name="endDate"
              value={endDate}
              disabled={true} 
              required 
            />
            <label htmlFor="endDate" className="input-label">End Date</label>
          </div>
          <input 
              type="hidden"
              id="price"
              name="price"
              value={0}
            />
            <input 
              type="hidden"
              id="night"
              name="night"
              defaultValue={nightsNum}
            />
            <input 
              type="hidden"
              id="vat"
              name="vat"
            />
            <input 
              type="hidden"
              id="total"
              name="total"
            />
            <input 
              type="hidden"
              id="grandTotal"
              name="grandTotal"
            />
            <div className="cart-container">
              <h3 className='cart-header'>Cart</h3>
              <div className="cart-wrapper">
                <div className='cart-item'>
                  <p>Price:</p>
                  <h4>&#8358;{roomPrice}</h4>
                </div>
                <div className='cart-item'>
                  <p>Night(s):</p>
                  <h4>{nightsNum}</h4>
                </div>
                <div className='cart-item'>
                  <p>Total:</p>
                  <h4>&#8358;{nightsNum * roomPrice}</h4>
                </div>
                <div className='cart-item'>
                  <p>Vat (1.5%):</p>
                  <h4>{((nightsNum * roomPrice) * (1.5 / 100)).toFixed(2)}</h4>
                </div>
              </div>
              <div className='grand-total'>
                  <p>Grand Total:</p>
                  <h3>&#8358;{((nightsNum * roomPrice) * (1.5 / 100) + (nightsNum * roomPrice)).toFixed(2)}</h3>
                </div>
            </div>

          <div className="action">
            <button type="submit" className="action-button">Book Room</button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

FormComponent.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired,
  roomPrice: PropTypes.number.isRequired,
};

export default FormComponent;
