"use client";
import { useState } from 'react';
import Card from './Card'; 
import Button from './Button';
import styles from './Signup.module.css'; 
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  imageUrl: string;
};

interface SignupProps {
  onSignup: (newUser: User) => void;
}

export default function Signup({ onSignup }: SignupProps) {

  const[enteredName, setEnteredName] = useState('');
  const[enteredUsername, setEnteredUsername] = useState('');
  const[enteredEmail, setEnteredEmail] = useState('');
  const[enteredPassword, setEnteredPassword] = useState('');
  const[enteredImageLink, setEnteredImageLink] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  }
  const imageChangeHandler = (event) => {
    setEnteredImageLink(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name: enteredName,
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
      imageUrl: enteredImageLink,
    };
    console.log(newUser);
    onSignup(newUser);
    setEnteredName('');
    setEnteredUsername(''); 
    setEnteredEmail('');
    setEnteredPassword('');
    setEnteredImageLink('');
  }
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
       <h1 className="text-black text-4xl font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={submitHandler}>
         <label htmlFor="name">Name</label>
          <input className="text-black p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            placeholder="Enter your name"
          />
          <label htmlFor="username">Username</label>
          <input className="text-black p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            placeholder="Enter your username"
          />
          <label htmlFor="email">Email</label>
          <input className="text-black p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="email"
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input className="text-black p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="password"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            placeholder="Enter your password"
          />
          <label htmlFor="imageLink">Image Link</label>
          <input className="text-black border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="imageLink"
            type="url"
            value={enteredImageLink}
            onChange={imageChangeHandler}
            placeholder="Enter image URL"
          />
  
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
      </div>
    );
  }
  