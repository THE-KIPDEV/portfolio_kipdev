import Image from "next/image";

interface props {
  project: {
    title: string;
    logo: string;
    desc: string;
    tags: string[];
    link: string;
  };
}

export function Project({ project }: props) {
  return (
    <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
      <div className="flex flex-1 flex-col p-8">
        <Image
          className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
          width={128}
          height={128}
          src={project.logo}
          alt=""
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">
          {project.title}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{project.desc}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="mr-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
              >
                {tag}
              </span>
            ))}
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={project.link}
              target="_blank"
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              Visiter le site
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
