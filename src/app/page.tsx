import { getServerSession } from 'next-auth';
import React from 'react'
import UserCard, { User } from './components/UserCard';

const Home = () => {
  const session = getServerSession();

  return (
    <>
      {session ? (
        <UserCard user={session?.user as User } pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  )
}

export default Home;

