import React from "react";

const UserDetailPage = async ({ params }) => {
  const { UserId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${UserId}`,
  );
  const user = await res.json();
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h2>{user.phone}</h2>
      <h2>{user.website}</h2>
      <h2>{user.company.name}</h2>
    </div>
  );
};

export default UserDetailPage;
