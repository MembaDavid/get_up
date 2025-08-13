// pages/blog.tsx
import { link } from "fs";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Harnessing AI for Next-Level Productivity",
    description: "Learn how AI can transform your workflow and make you unstoppable.",
    date: "August 13, 2025",
    link: "/blog/blog1",
    image: "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFybmVzc2luZyUyMHRoZSUyMHBvd2VyJTIwb2YlMjBhaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Design Tips for Stunning UIs",
    description: "Create beautiful and functional user interfaces that wow your users.",
    date: "August 10, 2025",
    link: "/blog/blog2",
    image: "https://plus.unsplash.com/premium_photo-1721269383376-36a79e1b9846?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZnR3YXJlJTIwZGVzaWduJTIwdGlwc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    description: "Explore modern web technologies that will dominate the next decade.",
    date: "August 5, 2025",
    link: "/blog/blog3",
    image: "https://plus.unsplash.com/premium_photo-1718198497330-08b58f749d4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1dHVyZSUyMG9mJTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          My Blog
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700">{post.description}</p>
                <a href={post.link}>
                <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
