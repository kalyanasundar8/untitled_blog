import React from "react";
import BlogTag from "../atoms/BlogTag";

type Props = {
  tags: string[];
};

export default function BadgeList({ tags }: Props) {
  return (
    <div>
      <div>
        {tags.map((tag, index ) => (
          <BlogTag key={index} label={tag} variant="outline" />
        ))}
      </div>
    </div>
  );
}
