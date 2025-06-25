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
      publishedDate: "2025-06-02",
    },
    {
      id: 2,
      title:
        "Design Systems Demystified: Building Scalable UI with Consistency and Speed",
      author: "Anusha Devi",
      tags: ["UI/UX", "Design Systems", "Figma"],
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      title:
        "Mastering State Management in React: From useState to Redux Toolkit",
      author: "Sathish Kumar",
      tags: ["React", "Redux", "Frontend"],
      avatar: "https://i.pravatar.cc/150?img=3",
      publishedDate: "2025-06-05",
    },
    {
      id: 4,
      title:
        "The Rise of Serverless Architecture: Why It’s Changing How We Deploy Apps",
      author: "Divya Natarajan",
      tags: ["Cloud", "Serverless", "AWS"],
      avatar: "https://i.pravatar.cc/150?img=4",
      publishedDate: "2025-06-08",
    },
    {
      id: 5,
      title:
        "How to Craft Engaging Microcopy That Builds Trust and Improves UX",
      author: "Vignesh Subramanian",
      tags: ["UX Writing", "Content Design", "Microcopy"],
      avatar: "https://i.pravatar.cc/150?img=5",
      publishedDate: "2025-06-10",
    },
    {
      id: 6,
      title:
        "Exploring the Intersection of AI and Education: Smarter Learning Tools for the Future",
      author: "Meena Raj",
      tags: ["AI", "EdTech", "Innovation"],
      avatar: "https://i.pravatar.cc/150?img=6",
      publishedDate: "2025-06-11",
    },
    {
      id: 7,
      title:
        "From Sketch to Code: The Art of Converting Design into Functional Interfaces",
      author: "Aravind Elango",
      tags: ["Frontend", "Figma", "HTML/CSS"],
      avatar: "https://i.pravatar.cc/150?img=7",
      publishedDate: "2025-06-15",
    },
    {
      id: 8,
      title:
        "Optimizing Performance in Large-Scale React Apps: Tips, Patterns, and Pitfalls",
      author: "Swetha Balaji",
      tags: ["React", "Performance", "Optimization"],
      avatar: "https://i.pravatar.cc/150?img=8",
      publishedDate: "2025-06-18",
    },
  ]);
  return (
    <div>
      <div className="container mx-auto">
        {featureBlogs.map(
          ({ id, title, author, tags, avatar, publishedDate }) => (
            <div key={id}>
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
  );
}
