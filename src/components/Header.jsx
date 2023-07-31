import { Link } from "react-router-dom";

const Header = () => {
  return (
  <section className="Header">   
    <nav>
      <div className="logo">
        <h1>Luxury<span>.</span></h1>
      </div>

      <div className="navlinks">
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <div>
        <Link to={'/about'}>Listing</Link>
        </div>
      </div>
    </nav>
  </section>
  )
}

export default Header;