import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { CreateSkill } from "~/app/_components/create-skill";
import { TagCloudHome } from "~/app/_components/_tag-cloud";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Logo } from "~/app/_svg/logo";
import { Project } from "~/app/_components/_project";

export interface Skill {
  id: number;
  name: string;
  createdAt: Date;
  updateAt: Date;
}


export default async function Home() {
  noStore();
  //const hello = await api.post.hello.query({ text: "from tRPC" });
  //const session = await getServerAuthSession();

  const skills: Skill[] = await api.skill.getAll.query();
  const projects = [
    {
      title: "LeClubGolf",
      logo: "/project/lcg.png",
      desc: "Site de réservation de parcours de golf",
      tags: ["NodeJS", "Express"],
      link: "https://leclub-golf.com",
    },
    {
      title: "LeClubGolf",
      logo: "/project/lcg.png",
      desc: "Site de réservation de parcours de golf",
      tags: ["NodeJS", "Express"],
      link: "https://leclub-golf.com",
    },
    {
      title: "LeClubGolf",
      logo: "/project/lcg.png",
      desc: "Site de réservation de parcours de golf",
      tags: ["NodeJS", "Express"],
      link: "https://leclub-golf.com",
    },
    {
      title: "LeClubGolf",
      logo: "/project/lcg.png",
      desc: "Site de réservation de parcours de golf",
      tags: ["NodeJS", "Express"],
      link: "https://leclub-golf.com",
    },
    {
      title: "LeClubGolf",
      logo: "/project/lcg.png",
      desc: "Site de réservation de parcours de golf",
      tags: ["NodeJS", "Express"],
      link: "https://leclub-golf.com",
    },
    {
      title: "LeClubGolf",
      logo: "/project/lcg.png",
      desc: "Site de réservation de parcours de golf",
      tags: ["NodeJS", "Express"],
      link: "https://leclub-golf.com",
    },
  ];
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <Logo />
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    Développeur full-stack
                  </span>
                  <span className="ml-2 rounded-full bg-red-600/10 px-3 py-1 text-sm font-semibold leading-6 text-red-600 ring-1 ring-inset ring-red-600/10">
                    Bordeaux
                  </span>

                  <span className="ml-2 rounded-full bg-yellow-600/10 px-3 py-1 text-sm font-semibold leading-6 text-yellow-600 ring-1 ring-inset ring-yellow-600/10">
                    + 65K followers
                  </span>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Yohann KIPFER
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Développeur web, freelance depuis 9 ans. Je suis spécialisé en
                  back-end sur NodeJS (Express, NextJS, Adonis) mais également
                  en développeur front-end avec React, Next, Vue, Nuxt ou React
                  Native pour les applications mobiles.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Mes compétences
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Mes projets
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            ></div>
            <div className="shadow-lg md:rounded-3xl">
              <Image
                src="/img/yohann.webp"
                width={672}
                height={908}
                alt="Yohann Kipfer"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
        <div>
          <h2 className="mb-8 justify-center  text-center flex items-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <Image
              src="/img/bomb.png"
              alt="Bomb"
              className="mr-6"
              width={40}
              height={40}
            />
            Mes compétences
          </h2>
          <div className="flex justify-center">
            {skills.length > 0 && <TagCloudHome skills={skills} />}
          </div>
        </div>
        <div className="m-auto max-w-5xl p-4">
        <h2 className="mb-8 justify-center text-center flex items-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <Image
              src="/img/exploding-head.png"
              alt="Bomb"
              className="mr-6"
              width={40}
              height={40}
            />
            Mes projets
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
