import React from "react";
import AvatarCircle from "../atoms/AvatarCircle";

type Props = {
  avatarImage: string;
  authorName: string;
  publishedDate?: string;
};

export default function AvatarBadge({
  avatarImage,
  authorName,
  publishedDate,
}: Props) {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <AvatarCircle avatarImage={avatarImage} authorName={authorName} />
      </div>
      <div>
        <h1>{authorName}</h1>
        <span>{publishedDate}</span>
      </div>
    </div>
  );
}
