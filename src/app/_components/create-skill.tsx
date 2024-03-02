"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateSkill() {
  const router = useRouter();
  const [name, setName] = useState("");

  const createSkill = api.skill.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createSkill.mutate({ name });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Nom de la compétence"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createSkill.isLoading}
      >
        {createSkill.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
