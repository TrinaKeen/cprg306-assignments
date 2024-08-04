"use client";

import { useUserAuth } from './_utils/auth-context';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for router
import Link from 'next/link'; // Import Link for navigation

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
      <h1>Shopping List App</h1>

      {!user ? (
        <button onClick={handleSignIn} disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign in with GitHub'}
        </button>
      ) : (
        <div>
          <p>Signed in as {user.displayName || '~User~'} ({user.email})</p>
          <button onClick={handleSignOut} disabled={isLoading}>
            {isLoading ? 'Signing out...' : 'Sign out'}
          </button>
          <br />
          <Link href="./week-10/shopping-list">
              Continue to your Shopping List
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
