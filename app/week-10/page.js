"use client";

import { useUserAuth } from './_utils/auth-context';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for router
import Link from 'next/link'; 

const HomePage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigation = () => {
    console.log('Navigating to /shopping-list'); // Debug log
    router.push('/shopping-list'); // Navigate to the shopping list page
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className='text-3xl font-bold mb-4'>Shopping List App</h1>

      {!user ? (
        <button 
        className="w-half mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleSignIn} disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign in with GitHub'}
        </button>
      ) : (
        <div>
          <p>Signed in as {user.displayName || '~User~'} ({user.email})</p>
          <button 
          className="w-half mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handleSignOut} disabled={isLoading}>
            {isLoading ? 'Signing out...' : 'Sign out'}
          </button>
          <br />
          <br></br>
          <Link 
          className="w-half mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          href="./week-10/shopping-list">
              Continue to your Shopping List
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
