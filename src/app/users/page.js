import Link from 'next/link';
import React from 'react'
import { API_BASE_URL } from '../../../utils/basePath';

const fetchUsers = async () => {
    const users = await fetch(`${API_BASE_URL}/api/user`);
    const usersData = await users.json();
    return usersData;
}

function Users() {

    const users = []//await fetchUsers();

  return (
    <>
        <h1>Users List</h1>
        {
            users.map((item) => {
                return <div key={item.id}>
                    <span>{ item.name }</span>
                    <span style={{ marginLeft: "15px" }}><Link href={`/users/${item.id}`}>View</Link></span>
                    <span style={{ marginLeft: "15px" }}><Link href={`/users/${item.id}/update`}>Edit</Link></span>
                </div>
            })
        }
    </>
  )
}

export default Users