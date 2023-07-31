import DatePicker, {registerLocale} from 'react-datepicker'
import en from 'date-fns/esm/locale/en-US'
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useEffect } from 'react'
import FormComponent from './FormComponent'
import {tabSelectors, rooms} from '../assets/data/data'
import {useParams} from 'react-router-dom'

registerLocale('en', en)

const SelectedApartment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const formattedStartDate = `${startDateObj.getFullYear()}-${String(startDateObj.getMonth() + 1).padStart(2, '0')}-${String(startDateObj.getDate()).padStart(2, '0')}`;
  const formattedEndDate = `${endDateObj.getFullYear()}-${String(endDateObj.getMonth() + 1).padStart(2, '0')}-${String(endDateObj.getDate()).padStart(2, '0')}`;
  const { apartment } = useParams();
  const selectedRoom = rooms[+apartment];

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    setEndDate(tomorrow);
  }, []);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end)
  }

  const updateActiveTab = (el) => {
    setActiveTab(el)  
  }

  return (
    <section className="Selected-Apartment">
      <div className="selected-apartment-container">
        <div className="calender-container">
          <div className="calender-wrapper">
          <p>Pick a booking date</p>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange
            selectsDisabledDaysInRange
            dateFormat='MMM d'
          />
          </div>
        </div>

        <div className="room-container">
          <div className='room-image'>
              <img src={selectedRoom.image} alt="room" /> 
          </div>
          <div className="tab-controls-container">
            <div className="tab-controls">
              {tabSelectors.map(tab => (
                <div className={`tab-name ${tab === activeTab ? 'active' : ''}`} onClick={(e) => updateActiveTab(e.target.innerText)} key={tab}>
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="room-details">
          <div className={`overview tab-content ${activeTab === 'Overview' ? 'active' : ''}`}>
            <h2 className="detail-name">
              {selectedRoom.name}
            </h2>

            <div className='room-type'>
              <h3>Type</h3> 
              <p>{selectedRoom.houseType}</p> 
            </div>

            <div className='room-price'>
              <h3>Price</h3> 
              <p>&#8358;{selectedRoom.price}</p> 
            </div>

            <div className="rating">
              <h3>Rating</h3>
              <p className={`rating-item ${selectedRoom.rating > 7 ? 'green' : selectedRoom.rating < 5 ? 'red' : 'grey'}`}>{selectedRoom.rating}</p>
            </div>

            <div className='room-amenities'>
              <h3>Amenities</h3>
              <div className="room-amenities-items">
              {selectedRoom.amenities.map((item, ind) => (
                <div key={ind}>
                  {item.name}: {item.status}
                </div>
              ))}
              </div>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{selectedRoom.description}</p>
            </div>
          </div>

          <div className={`cancellation-policy tab-content ${activeTab === 'Cancellation Policy' ? 'active' : ''}`}>
            <div className="cancellation-name">
              {selectedRoom.cancellation.map((ite, ide) => (
                <div key={ide} className='cancellation-items'>
                  <h3>{ite.caption}</h3>
                  <p>{ite.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`pet-policy tab-content ${activeTab === 'Pet Policy' ? 'active' : ''}`}>
            <div className="pet-policy-items">
              {selectedRoom.pet.map((ite, ide) => (
                <div key={ide} className='pet-policy-item'>
                  <h3>{ite.caption}</h3>
                    {ite.content.map((trem, indexx)=>(
                      <p key={indexx}>{trem}</p>
                    ))}
                </div>
              ))}
            </div>      
          </div>

          <div className={`smoke-policy tab-content ${activeTab === 'Smoking Policy' ? 'active' : ''}`}>
          <div className="smoke-policy-items">
              {selectedRoom.smoking.map((ite, ide) => (
                <div key={ide} className='smoke-policy-item'>
                  <h3>{ite.caption}</h3>
                    {ite.content.map((trem, indexx)=>(
                      <p key={indexx}>{trem}</p>
                    ))}
                </div>
              ))}
            </div> 
          </div>
        </div>
      </div>

      <FormComponent 
        startDate={formattedStartDate}
        endDate={formattedEndDate}
        imageLink={selectedRoom.image}
        roomName={selectedRoom.name}
        roomType={selectedRoom.houseType}
        roomPrice={selectedRoom.price}
      />
    </section>
  )
}

export default SelectedApartment;