import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  avatarImage: string;
  authorName: string;
};

export default function AvatarCircle({ avatarImage, authorName }: Props) {
  return (
    <div>
      <div className="">
        <Avatar>
          <AvatarImage src={avatarImage} />
          <AvatarFallback>{authorName.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
