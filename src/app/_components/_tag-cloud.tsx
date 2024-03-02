"use client";

interface props {
  skills: { id: number; name: string; createdAt: Date; updateAt: Date }[];
}

import { TagCloud } from "@frank-mayer/react-tag-cloud";

export function TagCloudHome({ skills }: props) {
  const tags = skills.map((skill) => skill.name);
  return (
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      onClickOptions={{ passive: true }}
    >
      {tags}
    </TagCloud>
  );
}
