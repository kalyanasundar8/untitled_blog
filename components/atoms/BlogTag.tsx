import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  label: string;
  variant: "default" | "outline" | "secondary" | "destructive";
};

export default function BlogTag({ label, variant }: Props) {
  return (
    <div>
      <Badge variant={variant}>{label}</Badge>
    </div>
  );
}
