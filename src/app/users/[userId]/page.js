import React from 'react'
import { API_BASE_URL } from '../../../../utils/basePath';

const fetchUser = async (userId) => {
  const users = await fetch(`${API_BASE_URL}/api/user/${userId}`);
  const usersData = await users.json();
  return usersData;
}

async function ShowUserDetailsUsingUserId({ params }) {
  const { userId } = params;

  const users = await fetchUser(userId);
  return (
    <div>
      <h1>User Details Page</h1>
      {
        users.result.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <b>Name: </b>
                <span>{item.name}</span>
              </div>
              <div>
                <b>Email: </b>
                <span>{item.email}</span>
              </div>
              <div>
                <b>Age: </b>
                <span>{item.age}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowUserDetailsUsingUserId