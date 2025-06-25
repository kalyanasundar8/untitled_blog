import React from "react";
import AvatarBadge from "../molecules/AvatarBadge";

type Props = {
  avatarImage: string;
  authorName: string;
  publishedDate?: string;
};

export default function AuthorAndPublishDate({
  avatarImage,
  authorName,
  publishedDate,
}: Props) {
  return (
    <div>
      <div>
        <p>Written by</p>
        <AvatarBadge
          avatarImage={avatarImage}
          authorName={authorName}
          publishedDate={publishedDate}
        />
      </div>
    </div>
  );
}
