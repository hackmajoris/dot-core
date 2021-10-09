import React from "react"
import { ChartBarIcon, ThumbUpIcon } from "@heroicons/react/solid"
import { EmojiHappyIcon } from "@heroicons/react/outline"

export const TeamComponent = () => {
  return (
    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Join our team!
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Join</span>
          </span>{" "}
          our team, and build your carrier with us!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Become in our team to change your vision about the business
          transportation.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <EmojiHappyIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Motivated persons
              </h6>
              <p className="text-sm text-gray-900">
                We are focused on customer satisfaction, which leads to a
                permanent adaptation of the company to market requirements. Team
                spirit and collaboration are two key elements in achieving
                common goals.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <ThumbUpIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Professionals</h6>
              <p className="text-sm text-gray-900">
                In the UNIVERSE LOGISTICS INC group, the collective performance
                counts, not only the individual one! The individual statement is
                based on the performance of a team.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Grow</h6>
              <p className="text-sm text-gray-900">
                The company's permanent objective is to occupy the leading
                position in the field of transport by diversifying the services
                offered and raising their quality.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://jgpr.net/wp-content/uploads/2021/04/ray-desk.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://cdn.parkrecord.com/wp-content/uploads/sites/11/2018/09/dispatchmerger-tpr-092218-1240x826.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://www.phila.gov/media/20210121100428/Carlie-905x700.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
