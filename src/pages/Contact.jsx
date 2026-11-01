import React, { useState } from "react";

function Contact() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handlechange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
    setSuccess("");
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Contact:", JSON.stringify(formdata));

    setSuccess("Message is sent successfully");

    setFormData({
      username: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#0B0B18] min-h-screen flex flex-col items-center justify-center px-5 py-16">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-xl flex flex-col bg-[#17132B] p-4 gap-4 border border-[#8B5CF6]/30 rounded-2xl p-6 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 sm:p-10"
      >
        <h1 className="text-center font-bold text-2xl text-[#C4B5FD] mb-4">
          Contact Form
        </h1>

        <label className="text-white font-medium">Username:</label>
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={handlechange}
          placeholder="Enter your name"
          required
          className="bg-[#0B0B18] text-white placeholder:text-gray-500 border border-[#8B5CF6]/30 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
        />

        <label className="text-white font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handlechange}
          placeholder="Enter your email"
          required
          className="bg-[#0B0B18] text-white placeholder:text-gray-500 border border-[#8B5CF6]/30 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
        />

        <label className="text-white font-medium">Subject:</label>
        <input
          type="subject"
          name="subject"
          value={formdata.subject}
          onChange={handlechange}
          placeholder="Subject"
          required
          className="bg-[#0B0B18] text-white placeholder:text-gray-500 border border-[#8B5CF6]/30 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
        />
        <label className="text-white font-medium">Message:</label>
        <textarea
          name="message"
          value={formdata.message}
          onChange={handlechange}
          placeholder="Your message"
          required
          className="bg-[#0B0B18] text-white placeholder:text-gray-500 border border-[#8B5CF6]/30 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
        ></textarea>

        <button
          className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border border-[#8B5CF6] py-3 rounded-xl cursor-pointer shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300 px-20 "
          type="submit"
        >
          Send Message
        </button>
      </form>
      {success && <p className="text-green-500 text-center mt-2">{success}</p>}
    </div>
  );
}

export default Contact;

//localStorage

// full name,email,subject ,message and send button

// npm i react-icons react-router-dom
