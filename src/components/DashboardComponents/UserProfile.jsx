import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useGetData, { backendURL } from "../../routes/UseGetData";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
    license: user.license || "",
    image: user.image || "",
  });
  const isLawyer = user.role === "lawyer";

  const handleEditProfile = async () => {
    try {
      const updateProfileURL = `${backendURL}/users/update/${user.email}`;
      const response = await fetch(
        updateProfileURL,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData.success) {
        Swal.fire("Profile updated successfully");
      } else {
        Swal.fire("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire("Something went wrong");
    }
  };

  return (
    <div className="bg-[#1F2732] p-5 rounded-xl max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-[#D1B06B] mb-5 text-center">User Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-gray-400 mb-1 md:mr-2 block">Name:</label>
          <input
            type="text"
            className="form-input p-2 w-full"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="text-gray-400 mb-1 md:mr-2 block">Email</label>
          <input
            type="text"
            className="form-input p-2 w-full"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            disabled
          />
        </div>
        {isLawyer && (
          <div>
            <label className="text-gray-400 mb-1 md:mr-2 block">License:</label>
            <input
              type="text"
              className="form-input p-2 w-full"
              value={userData.license}
              onChange={(e) => setUserData({ ...userData, license: e.target.value })}
            />
          </div>
        )}
        <div className="flex items-center">
          <label className="text-gray-400 mr-2 block">User Image</label>
          {userData.image && (
            <img src={userData.image} alt="User" className="rounded-full h-20 w-20 object-cover" />
          )}
        </div>
      </div>
      <button
        className="bg-[#D1B06B] text-[#1F2732] px-4 py-2 mt-5 rounded-md w-full"
        onClick={handleEditProfile}
      >
        Save Changes
      </button>
    </div>
  );
};

export default UserProfile;
