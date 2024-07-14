import { getServerSession } from 'next-auth';
import React, { useEffect, useState } from 'react'
import UserCard, { User } from './components/UserCard';
import { Session } from 'inspector';

const Home = async () => {
  const session = await getServerSession();

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  )
}

export default Home;

