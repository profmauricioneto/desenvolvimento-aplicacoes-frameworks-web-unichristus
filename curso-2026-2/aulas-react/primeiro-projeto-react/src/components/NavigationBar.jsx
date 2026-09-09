import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
      <div className='flex gap-10 list-none justify-center'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
      </div>
    );
}

export default NavigationBar;