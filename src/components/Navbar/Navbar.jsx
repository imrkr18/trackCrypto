import './Navbar.css'
import crpytoLogo from '../../assets/trackCrypto.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currecyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={crpytoLogo} className='logo' alt="cryptoLogo" />
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/about'}><li>Featuers</li></Link>
        <Link to={'/pricing'}><li>Pricing</li></Link>
        <Link to={'/news'}><li>Latest News</li></Link>
      </ul>
      <div className='nav-right'>
        <select onChange={currecyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar