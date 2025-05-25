import { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import Profile from "./Profile";


import {
  BuildingOfficeIcon,
  BriefcaseIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";



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
        <div className="w-full lg:w-2/5 bg-gray-50 px-6 py-3 pl-10 rounded-lg text-center shadow-sm">
          <img
              className="w-35 h-35 md:w-40 md:h-40 mx-auto rounded-full object-cover border-4 border-white shadow-md"
              src={user.photo || "./Capture.png"}
              alt="Profile"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.session || "2019-2020"}</p>

          <p className="mt-4 text-[15px] font-[300] text-gray-500">{user.bio}</p>

          <div className="mt-6 text-gray-600 text-left space-y-2">
            {user.isEmployed ? (
            <>
                <div className="flex items-center gap-2 text-md">
                  {/* <img src="./briefcase.png" className="h-7 w-7" alt="" /> */}
                  <BriefcaseIcon  className="h-6 w-6 text-gray-800" />
                  <span className="font-medium text-gray-800">{user.job.title}</span>
                </div>
                <div className="flex items-center gap-2 text-md">
                  <BuildingOfficeIcon  className="h-6 w-6  text-gray-800" />
                  {/* <img src="./office-building.png" className="h-7 w-7" alt="" /> */}
                  <span  className="font-medium  text-gray-800">{user.job.company}</span>
                </div>
                <p className="text-xs text-gray-400">Since {user.job.since}</p>
            </>
            ) : (
            <p className="text-sm"> Student at {user.university}</p>
            )}
          </div>

          {/* Skills Section */}
          <div className="mt-8 text-left">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
              {user.skills?.map((skill, index) => (
                  <span
                  key={index}
                  className="bg-[#daf2f0] text-teal-700 text-xs px-3 py-1 rounded-full"
                  >
                  {skill}
                  </span>
              )) || <p className="text-sm text-gray-400 p-4">No skills added.</p>}
              </div>
          </div>
        </div>

        {/* Right Section */}
      <div className="w-full lg:w-3/5 h-[80vh] overflow-y-auto pr-4 pl-8">
          <nav className="flex space-x-12 text-[17px] sticky top-0 bg-white z-10 py-4">
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
          </nav>

        <div className="mt-4">
          {activeTab === "profile" && (
             <Profile user={user} />
          )}

          {activeTab === "posts" && (
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Posts</h3> */}
              <p className="text-gray-500">No posts yet.</p>
            </div>
          )}
          
          {activeTab === "photos" && (
            <PhotoGallery photos={user.photos || <p className="text-gray-500">No photos uploaded yet.</p>} />
          )}

          {activeTab === "contact" && (
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Posts</h3> */}
              <p className="text-gray-500">No posts yet.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}