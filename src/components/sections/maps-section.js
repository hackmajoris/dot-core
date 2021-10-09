import React from "react"

export default function MapsSection() {
  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Where can you find us?
              </p>
            </div>
          </div>
          <div className=" rounded-2xl body-font relative">
            <div className=" rounded-2xl absolute inset-0 bg-gray-150">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="20"
                className="rounded-2xl py-10 rounded-lg"
                title="map"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.2923795525066!2d-88.39666104878175!3d42.0583519619913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f1a04e07e9141%3A0xd4c3c93a823381ef!2s764%20Richwood%20Ave%2C%20Elgin%2C%20IL%2060124%2C%20USA!5e0!3m2!1sen!2sro!4v1600621804365!5m2!1sen!2sro"
                style={{ filter: " grayscale(0.5)contrast(1.2) opacity(0.7)" }}
              />
            </div>
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Contact us!
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Leave you message here and we'll come back to you.
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="text-white dark:bg-darkBlue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
