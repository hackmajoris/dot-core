import React from "react"
import { ClipboardListIcon, TruckIcon } from "@heroicons/react/solid"
import { CurrencyDollarIcon } from "@heroicons/react/outline"
export const JobsComponent = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Open positions
        </h2>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 rounded-2xl transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <TruckIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Driver</h6>
          <p className="text-sm text-gray-900">
            Baseball ipsum dolor sit amet cellar rubber win hack tossed.
            Slugging catcher slide bench league, left fielder nubber.
          </p>
        </div>
        <div className="p-5 duration-300 rounded-2xl transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <ClipboardListIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Dispatcher</h6>
          <p className="text-sm text-gray-900">
            We meet at one of those defining moments - a moment when our nation
            is at war, our economy is in turmoil, and the American promise has
            been threatened once more.
          </p>
        </div>
        <div className="p-5 duration-300 rounded-2xl  transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Manager</h6>
          <p className="text-sm text-gray-900">
            Strategic high-level 30,000 ft view. Drill down re-inventing the
            wheel at the end of the day but curate imagineer, or to be inspired
            is to become creative.
          </p>
        </div>
      </div>
      <div className="mt-5 py-10 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-darkBlue hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get in touch!
          </a>
        </div>
      </div>
    </div>
  )
}
