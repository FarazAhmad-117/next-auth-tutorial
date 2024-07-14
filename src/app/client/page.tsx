'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Client = () => {
    const {data:session, status} = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(status === "unauthenticated"){
            router.push('/api/auth/signin?callbackUrl=/client');
        }
    },[status,router]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div>Client</div>
    )
}

export default Client