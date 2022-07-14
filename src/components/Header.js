import '../styles/Header.css';
import search from '../photos/icons/magnify.png';
import cart from '../photos/icons/cart-outline.png';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <header>
      <Link to='/FakeSurf/'>FakeSurf</Link>
      <div className='searchBar'>
        <img src={search} alt=''></img>
        <input type='text' placeholder='Search...'></input>
      </div>
      <nav>
        <div className='nav about'>
          <Link to='/FakeSurf/about'>About</Link>
        </div>
        <div className='nav shop'>
          <Link to='/FakeSurf/catalog/surfboards'>Shop</Link>
        </div>
        <div className='nav cart'>
          <Link to='/FakeSurf/cart'>
          <img src={cart} alt=''></img>
          <p>{props.cartItemCount}</p>
          <p>Cart</p></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;