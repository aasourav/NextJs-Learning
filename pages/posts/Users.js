import React from 'react'
import { useRouter } from 'next/router'

const Users = () => {
    const router = useRouter();
    const {id} = router.query;
  return (
    <div>Users {id}</div>
  )
}

export default Users