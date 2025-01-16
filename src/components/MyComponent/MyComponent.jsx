import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const MyComponent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
  });

  async function fetchData() {
    let response = await fetch("https://dummyjson.com/users");
    let data = await response.json();
    if (response.ok) {
      toast("data fetched successfully", {
        type: "success",
      });
    }
    console.log(data);

    return data.users;
  }
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast(error.message),
      {
        type: "error",
      };
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div className="bg-[#dde6ed]">
      <h1 className="text-3xl text-center font-semibold p-5">
        React Query and React-tostify
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {data.map((user) => (
          <div key={user.id}>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex justify-center mt-4">
                <img
                  className="w-24 h-24 rounded-full"
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </div>
              <div className="p-6">
                <h1 className="text-center text-2xl font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-center text-sm text-gray-600">
                  {user.email}
                </p>
                <p className="text-center text-sm text-gray-600">
                  {user.phone}
                </p>
                <p className="text-center text-sm text-gray-600">
                  {user.gender}
                </p>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Address
                  </h2>
                  <p className="text-sm text-gray-600">
                    {user.address.address}, {user.address.city},{" "}
                    {user.address.state} ({user.address.stateCode}) -{" "}
                    {user.address.postalCode}
                  </p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Company
                  </h2>
                  <p className="text-sm text-gray-600">
                    {user.company.name} ({user.company.department})
                  </p>
                  <p className="text-sm text-gray-600">{user.company.title}</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Bank Details
                  </h2>
                  <p className="text-sm text-gray-600">
                    Card Type: {user.bank.cardType}
                  </p>
                  <p className="text-sm text-gray-600">
                    Card Number: {user.bank.cardNumber}
                  </p>
                  <p className="text-sm text-gray-600">
                    Currency: {user.bank.currency}
                  </p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Education
                  </h2>
                  <p className="text-sm text-gray-600">{user.university}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
