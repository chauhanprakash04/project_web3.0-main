import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa"
import { auth, provider } from './config';
import { signInWithPopup } from "firebase/auth";

import logo from "../../images/logo.png";

const Navbar = () => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [dropMenu, setDropMenu] = useState(false);
  const Login = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      setName(data.user.displayName);
      setImage(data.user.photoURL);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('name', data.user.displayName);
      localStorage.setItem('image', data.user.photoURL);
      setDropMenu(false);
      console.log(data);
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'));
    setName(localStorage.getItem('name'));
    setImage(localStorage.getItem('image'));
  }, [])

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    setDropMenu(false);
  }

  return (
    <nav>
      <div className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center fixed left-12 top-5">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <div className="text-white list-none fixed right-12 top-5">
          {!dropMenu && (
            <div>
              {value ?
                <img src={image} alt="ProfilePhoto" className="h-8 rounded-full cursor-pointer" onClick={() => setDropMenu(true)} />
                :
                <FaUser fontSize={25} className="text-white cursor-pointer" onClick={() => setDropMenu(true)} />
              }
            </div>
          )}
          {dropMenu && (
            <div>
              {value ?
                <img src={image} alt="ProfilePhoto" className="h-8 rounded-full cursor-pointer" onClick={() => setDropMenu(false)} />
                :
                <FaUser fontSize={25} className="text-white cursor-pointer" onClick={() => setDropMenu(false)} />
              }
            </div>
          )}
          {dropMenu && (
            <div className="flex justify-center items-center">
              {value ?
                <li className="cursor-pointer blue-glassmorphism px-3 rounded-none fixed top-14 border-none" onClick={Logout}>Logout</li>
                :
                <li className="cursor-pointer blue-glassmorphism px-3 rounded-none fixed top-12 border-none" onClick={Login}>Login</li>
              }
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
