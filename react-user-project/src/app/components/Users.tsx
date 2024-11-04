import React from 'react';
import User from './User';

interface User {
    id: number;
    name: string;
    username: string;
    imageUrl: string;
    email: string;
    password: string;
}

interface UsersProps {
    users: User[];
}

export default function Users({ users }: UsersProps) {
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <User key={user.id} user={user} /> 
                </div>
            ))}
        </div>
    );
};