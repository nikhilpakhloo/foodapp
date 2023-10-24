import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Signupheader from './Signupheader';
import HeroImg from './HeroImg';
import { FcGoogle } from 'react-icons/fc';
import { AiTwotoneMail } from 'react-icons/ai';

Modal.setAppElement('#root');

const Hero = () => {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loggedin, setLoggedin] = useState(localStorage.getItem('loggedin') === 'true');



  const openRegisterModal = () => {
    setRegisterModalIsOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalIsOpen(false);
    setPhoneNumber('');
  };

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const setBlank = () => {
    setUsername('');
    setEmail('');
    setPhoneNumber('');
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post('http://localhost:4000/usercredentials', data, config)
      .then((res) => {
        console.log('Response:', res.data);
        console.log('Registered successfully');
        setBlank();
        setRegisterModalIsOpen(false);
        setLoggedin(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get('http://localhost:4000/usercredentials')
      .then((response) => {
        const users = response.data.data;



        localStorage.setItem('loggedin', true);

        const user = users.find((user) => user.phoneNumber.toString() === phoneNumber);

        if (user) {
          console.log('User Found');
          setBlank();
         
          setLoggedin(true);
          setLoginModalIsOpen(false);
        } else {
          console.error('Phone number not Found');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  const handleLogout = () => {

   

    localStorage.removeItem('token');

    setLoggedin(false);
  };

  return (
    <>
      <HeroImg logout={handleLogout} openRegisterModal={openRegisterModal} openLoginModal={openLoginModal} loggedin={loggedin} setLoggedin={setLoggedin} />

      <Modal
        isOpen={registerModalIsOpen}
        onRequestClose={closeRegisterModal}
        contentLabel="Registration Modal"
        className="fixed inset-0 flex items-center justify-center z-60 backdrop-brightness-[0.1]"
      >
        <div className="bg-white p-8 rounded-lg shadow-md md:w-[450px] md:h-[500px] w-[300px] h-[350px] flex flex-col items-center">
          <Signupheader closemodel={closeRegisterModal} />
          <form onSubmit={handleSignup} className="w-full flex flex-col items-center">
            <input
              type="text"
              className="w-full h-[50px] shadow-sm rounded-md border flex items-center justify-around hover:shadow-xl hover:border-blue-400 mt-12 p-2"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter Username..."
              pattern="[a-zA-Z0-9]+"
              required
            />
            <input
              type="email"
              className="w-full h-[50px] shadow-sm rounded-md border flex items-center justify-around hover:shadow-xl hover:border-blue-400 mt-6 p-2"
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
            />
            <input
              type="tel"
              className="w-full h-[50px] shadow-sm rounded-md border flex items-center justify-around hover:shadow-xl hover:border-blue-400 mt-6 p-2"
              placeholder="Phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              pattern="[0-9]*"
              required
            />
            <button type="submit" className="p-2 bg-red-500 text-white mt-8 rounded-md w-full">
              Create Account
            </button>
          </form>
          <span className="mt-4 text-gray-400">or</span>

          <button className="p-2 border border-gray-700 text-gray-500 text-xl mt-8 rounded-md flex items-center cursor-pointer">
            <span className="text-2xl mx-2">
              <FcGoogle />
            </span>{' '}
            Continue with Google
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={loginModalIsOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        className="fixed inset-0 flex items-center justify-center z-60 backdrop-brightness-[0.1]"
      >
        <div className="bg-white p-8 rounded-lg shadow-md md:w-[450px] md:h-[500px] w-[300px] h-[350px] flex flex-col items-center">
          <Signupheader closemodel={closeLoginModal} />
          <form onSubmit={handleLogin} className="w-full">
            <input
              type="tel"
              className="w-full h-[50px] shadow-sm rounded-md border border-2 flex items-center justify-around hover:shadow-xl hover:border-blue-400 mt-12 p-2"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              placeholder="Phone"
              pattern="[0-9]*"
              required
            />
            <button type="submit" className="p-2 bg-red-500 text-white mt-8 rounded-md w-full">
              Log in
            </button>
          </form>
          <span className="mt-4 text-gray-400">or</span>
          <button className="p-2 border border-gray-700 text-gray-500 text-xl mt-6 rounded-md flex items-center cursor-pointer">
            <span className="text-2xl text-red-500 mr-2">
              <AiTwotoneMail />
            </span>{' '}
            Continue with Email
          </button>
          <button className="p-2 border border-gray-700 text-gray-500 text-xl mt-6 rounded-md flex items-center cursor-pointer">
            <span className="text-2xl mr-2">
              <FcGoogle />
            </span>{' '}
            Continue with Google
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
