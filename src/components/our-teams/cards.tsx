"use client";
import { useEffect, useState } from "react";
import { Dropdown, Card } from "flowbite-react";
import Image from "next/legacy/image";

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);
  console.log(data);

  return (
    <div className="mx-auto max-w-[900px]">
      <div className="flex flex-wrap container justify-center mx-auto gap-3">
        {data.map((user: any, idx) => (
          <div key={idx}>
            <Card className="max-w-sm">
              <div className="flex justify-end px-4 pt-4">
                <Dropdown inline label="">
                  <Dropdown.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div className="flex flex-col items-center pb-10 hover:shadow-xl hover:bg-gradient-to-b from-white to-blue-700">
                <div className="relative mb-3 h-24 w-24">
                  <Image
                    alt="..."
                    src={user.picture.medium}
                    className="rounded-full shadow-lg"
                  />
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user.name.first} {user.name.last}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
