import { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import Profile from "./Profile";
import ProfileBrief from "./ProfileBrief";
import EditProfileButton from "./EditProfileButton";

export default function ProfilePage({ isAuthUser = true }) {
  const [activeTab, setActiveTab] = useState("profile");

  const user = {
        name: "Alice Johnson",
        photo: "", // or URL
        location: "San Francisco, CA",
        bio: "Front-end engineer with a passion for UI, animations, and accessibility.",
        isEmployed: true,
        job: {
            title: "Senior Frontend Developer",
            company: "TechCorp",
            since: "2021",
        },
        university: "Stanford University",
        skills: ["React", "Tailwind CSS", "JavaScript", "Accessibility", "Framer Motion"]
  };


  return (
    <div className="mt-12 bg-white flex flex-col lg:flex-row w-full p-12 mx-auto shadow-md space-y-6 lg:space-y-0 lg:space-x-8">
      
      {/* Left Section */}
      <ProfileBrief user={user}/>

      {/* Right Section */}
<div className="w-full lg:w-3/5 h-[80vh] overflow-y-auto pr-4 pl-8">
  <nav className="flex items-center justify-between text-[17px] sticky top-0 bg-white z-10 py-4">
    <div className="flex space-x-12">
      {["profile", "posts", "photos", "contact"].map((tab) => (
        <button
          key={tab}
          className={`pb-2 capitalize font-medium ${
            activeTab === tab
              ? "border-b-3 border-teal-600 text-teal-700"
              : "text-gray-500 cursor-pointer"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Edit button shows only if on 'profile' tab AND viewing own profile */}
    {activeTab === "profile" && isAuthUser?._id === user?._id && (
      <EditProfileButton/>
    )}
  </nav>

  <div className="mt-4">
    {activeTab === "profile" && <Profile user={user} />}
    {activeTab === "posts" && (
      <p className="text-gray-500">No posts yet.</p>
    )}
    {activeTab === "photos" && (
      <PhotoGallery
        photos={
          user.photos?.length ? user.photos : <p className="text-gray-500">No photos uploaded yet.</p>
        }
      />
    )}
    {activeTab === "contact" && (
      <p className="text-gray-500">No posts yet.</p>
    )}
  </div>
</div>

    </div>
  );
}