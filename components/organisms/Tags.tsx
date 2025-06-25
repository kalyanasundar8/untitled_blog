import React from "react";
import BadgeList from "../molecules/BadgeList";

type Props = {
  tags: string[];
};

export default function Tags({ tags }: Props) {
  return (
    <div>
      <div>
        <p>Blog under</p>
        <BadgeList tags={tags} />
      </div>
    </div>
  );
}
