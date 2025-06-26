"use client";

import React, { useState } from "react";
import Author from "@/components/organisms/Author";
import Tags from "@/components/organisms/Tags";

export default function FeatureBlog() {
  const [featureBlogs] = useState([
    {
      id: 1,
      title:
        "Unlocking the Secrets of Full-Stack Development: A Journey from Novice to Expert",
      author: "Karthik Ramasamy",
      tags: ["Web Development", "JavaScript", "Full-Stack"],
      avatar: "https://i.pravatar.cc/150?img=1",
      coverImage: "https://images.unsplash.com/photo-1750190437388-862aeca97f9e?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-02",
    },
    {
      id: 2,
      title:
        "Design Systems Demystified: Building Scalable UI with Consistency and Speed",
      author: "Anusha Devi",
      tags: ["UI/UX", "Design Systems", "Figma"],
      avatar: "https://i.pravatar.cc/150?img=2",
      coverImage: "https://images.unsplash.com/photo-1750440982726-d723eab666a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-02",
    },
    {
      id: 3,
      title:
        "Mastering State Management in React: From useState to Redux Toolkit",
      author: "Sathish Kumar",
      tags: ["React", "Redux", "Frontend"],
      avatar: "https://i.pravatar.cc/150?img=3",
      coverImage: "https://images.unsplash.com/photo-1750190437388-862aeca97f9e?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-05",
    },
    {
      id: 4,
      title:
        "The Rise of Serverless Architecture: Why It’s Changing How We Deploy Apps",
      author: "Divya Natarajan",
      tags: ["Cloud", "Serverless", "AWS"],
      avatar: "https://i.pravatar.cc/150?img=4",
      coverImage: "https://images.unsplash.com/photo-1750440982726-d723eab666a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-08",
    },
    {
      id: 5,
      title:
        "How to Craft Engaging Microcopy That Builds Trust and Improves UX",
      author: "Vignesh Subramanian",
      tags: ["UX Writing", "Content Design", "Microcopy"],
      avatar: "https://i.pravatar.cc/150?img=5",
      coverImage: "https://images.unsplash.com/photo-1750190437388-862aeca97f9e?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-10",
    },
    {
      id: 6,
      title:
        "Exploring the Intersection of AI and Education: Smarter Learning Tools for the Future",
      author: "Meena Raj",
      tags: ["AI", "EdTech", "Innovation"],
      avatar: "https://i.pravatar.cc/150?img=6",
      coverImage: "https://images.unsplash.com/photo-1750440982726-d723eab666a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-11",
    },
    {
      id: 7,
      title:
        "From Sketch to Code: The Art of Converting Design into Functional Interfaces",
      author: "Aravind Elango",
      tags: ["Frontend", "Figma", "HTML/CSS"],
      avatar: "https://i.pravatar.cc/150?img=7",
      coverImage: "https://images.unsplash.com/photo-1750190437388-862aeca97f9e?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-15",
    },
    {
      id: 8,
      title:
        "Optimizing Performance in Large-Scale React Apps: Tips, Patterns, and Pitfalls",
      author: "Swetha Balaji",
      tags: ["React", "Performance", "Optimization"],
      avatar: "https://i.pravatar.cc/150?img=8",
      coverImage: "https://images.unsplash.com/photo-1750440982726-d723eab666a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      publishedDate: "2025-06-18",
    },
  ]);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center space-x-5 overflow-x-hidden">
          {featureBlogs.map(
            ({ id, title, author, tags, avatar, coverImage, publishedDate }) => (
              <div key={id} className="bg-cover bg-center" style={{
                backgroundImage: `url(${coverImage})`
              }}>
                <h1>{title}</h1>
                <div>
                  <Author
                    avatarImage={avatar}
                    authorName={author}
                    publishedDate={publishedDate}
                  />
                  <Tags tags={tags} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
