import Link from "next/link";
import React from "react";

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-5 font-bold text-2xl">
        This is Users Page and Data of : {users.length} Peoples.
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
