import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
const SideNavigation = () => {
    const [activeButton, setActiveButton] = useState('home');

    const handleButtonClick = (button) => {
      setActiveButton(button);
    };
  return (
  <>
  <div className="flex">
      <nav className="bg-gray-600 text-white h-screen  flex flex-col justify-between">
        <div>
          <div className="p-4 m-10">
            <h1 className="text-xl font-bold">Nodeflix</h1>
          </div>
          <div>
            <ul className={`flex flex-col gap-6 `}>
              <li className="text-blue-500">
                <NavLink to="/home" onClick={() => handleButtonClick('home')}>
                  <button className={`bg-gray-500 hover:bg-blue-600 text-white
                   font-semibold py-2 px-4 w-full rounded-xl shadow-md transition
                    duration-300 ease-in-out ${activeButton === 'home' ? 'active' : ''}`}>
                    Home
                  </button>
                </NavLink>
              </li>
              <li className="text-blue-500">
                <NavLink to="/" onClick={() => handleButtonClick('population')}>
                  <button className={`bg-gray-500 hover:bg-blue-600 text-white 
                  font-semibold py-2 px-4 w-full rounded-xl shadow-md transition
                   duration-300 ease-in-out ${activeButton === 'population' ? 'active' : ''}`}>
                    Subscriptions
                  </button>
                </NavLink>
              </li>
              <li className="text-blue-500">
                <NavLink to="/" onClick={() => handleButtonClick('price')}>
                  <button className={`bg-gray-500 hover:bg-blue-600 text-white font-semibold
                   py-2 px-4 w-full rounded-xl shadow-md transition duration-300 ease-in-out ${activeButton === 'price' ? 'active' : ''}`}>
                    Your Channel
                  </button>
                </NavLink>
              </li>
              <li className="text-blue-500">
                <NavLink to="/" onClick={() => handleButtonClick('price')}>
                  <button className={`bg-gray-500 hover:bg-blue-600 text-white font-semibold
                   py-2 px-4 w-full rounded-xl shadow-md transition duration-300 ease-in-out ${activeButton === 'price' ? 'active' : ''}`}>
                    Liked Videos
                  </button>
                </NavLink>
              </li>
              <li className="text-blue-500">
                <NavLink to="/" onClick={() => handleButtonClick('price')}>
                  <button className={`bg-gray-500 hover:bg-blue-600 text-white font-semibold
                   py-2 px-4 w-full rounded-xl shadow-md transition duration-300 ease-in-out ${activeButton === 'price' ? 'active' : ''}`}>
                   History
                  </button>
                </NavLink>
              </li>
              <li className="text-blue-500">
                <NavLink to="/" onClick={() => handleButtonClick('price')}>
                  <button className={`bg-gray-500 hover:bg-blue-600 text-white font-semibold
                   py-2 px-4 w-full rounded-xl shadow-md transition duration-300 ease-in-out ${activeButton === 'price' ? 'active' : ''}`}>
                    Playlists
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </>
  )
}

export default SideNavigation
