"use client";

import { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {isLogin ? <Login /> : <SignUp />}
      <button 
        className="mt-4 btn btn-secondary" 
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
}
