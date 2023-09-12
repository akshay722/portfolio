import { forwardRef } from "react";
import { Tab } from "@headlessui/react";
import { experiences } from "../constansts";

export const Experiences = forwardRef((props, ref) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="h-fit min-h-screen bg-neutral-800 sm:px-20 px-6 py-10" ref={ref}>
      <span className="sm:text-6xl text-4xl flex flex-col items-center mb-4 uppercase font-light">
        Experience
        <div className="bg-sky-800 h-0.5 my-9 sm:w-[10%] w-[25%]" />
      </span>
      <div className="w-full py-4 sm:px-0">
        <Tab.Group vertical={true}>
          <Tab.List className="flex flex-wrap sm:flex-nowrap space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(experiences).map((title) => (
              <Tab
                key={title}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(experiences).map((jobs, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-transparent sm:p-3 text-white hover:bg-transparent",
                  "focus:outline-none cursor-default"
                )}
              >
                <ul className="sm:px-4">
                  {jobs.map((job) => (
                    <li
                      key={job.id}
                      className="relative rounded-md sm:p-3 pt-3"
                    >
                      <h className="text-2xl">{job.position}</h>
                      <div className="bg-sky-800 h-0.5 my-4 w-1/4" />
                      <div className="mb-10 sm:text-lg">
                        {job.work.map((item, index) => (
                          <li className="mb-10">{item}</li>
                        ))}
                      </div>
                      <ul className="mt-1 flex gap-2 space-x-1 text-xs font-normal leading-4 text-white-500 flex-wrap">
                        {job.tags.map((item, index) => (
                          <li className="border border-sky-800 px-1.5 py-0.5 rounded-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
});
