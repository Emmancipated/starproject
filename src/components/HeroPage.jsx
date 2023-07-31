import heroImage from '../assets/images/image1.jpg'
const HeroPage = () => {
  return (
  <section className="HeroPage">   
    <div className="heroimage-container" style={{backgroundImage: `url(${heroImage})`}}>  
      <div className="herotext-container">
        <h1> A Place Of <span>Luxury</span></h1>
        <p>This is the place you want to be for your booking for an apartment.</p>
        <div>
            <a href='#Listing'>Chect Suites</a>
        </div>
      </div>
      <div className="shadowcast"></div>
    </div>
  </section>
  )
}

export default HeroPage;