import Scrollspy from 'react-scrollspy';
import logo from '../../images/logo.png';

const items = [
  { path: 'home', title: 'Home' },
  { path: 'services', title: 'Services' },
  { path: 'login', title: 'Login' },
];

const Navbar = () => {
  const getItems = () => {
    return items.map((item) => item.title);
  };
  return (
    <div className='navigation' id='home'>
      <div className='navbar'>
        <div className='nav-img'>
          <img src={logo} className='nav-img' alt='' />
        </div>
        <div className='nav-items'>
          <Scrollspy items={getItems()} currentClassName='is-current'>
            <ul>
              {items.map((item) => (
                <li key={item.path}>
                  <a href={`#${item.path}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </Scrollspy>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
