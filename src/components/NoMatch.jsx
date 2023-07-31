import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <section className="NoMtach">
      Ops, this is not the page you are looking for.
      <Link to={'/'}>Go Home</Link>
    </section>
  )
}
// 'url(https://assets.codepen.io/285131/coffee_1.jpg)'
export default NoMatch;