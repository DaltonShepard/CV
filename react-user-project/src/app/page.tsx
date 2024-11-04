"use client";
import { useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup'; // Adjust path as needed
import User from './components/User';

type User = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

const USERS_INIT: User[] = [
  {
    id: 1,
    name: 'Buzz Lightyear',
    username: 'blightyear',
    email: 'buzz.lightyear@gmail.com',
    password: 'password',
    imageUrl: 'data:image/webp;base64,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',
  },
];

export default function Home() {

  const [users, setUsers] = useState<User[]>(USERS_INIT);

  const handleSignup = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
    
      <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-black">Welcome to the Home Page</h1>
        <Users users={users} />
      </div>  
      <Signup onSignup = {handleSignup}/>    
    </div>
  );
}
