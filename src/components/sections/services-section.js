import React from "react"
import { ChartBarIcon, ThumbUpIcon, TruckIcon } from "@heroicons/react/solid"
import { EmojiHappyIcon } from "@heroicons/react/outline"

export const ServicesSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <TruckIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Our trucks</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          The company's permanent objective is to occupy the leading position in
          the field of transport by diversifying the services offered and
          raising their quality.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <img
            className="object-cover rounded-2xl w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://i.pinimg.com/564x/4e/38/e1/4e38e15a919c68563792a0454a35f024.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            FLATBED
          </p>
          <p className="text-gray-700">
            A flatbed truck is a type of truck which can be either articulated
            or rigid. As the name suggests, its bodywork is just an entirely
            flat, level 'bed' with no sides or roof. This allows for quick and
            easy loading of goods, and consequently they are used to transport
            heavy loads that are not delicate or vulnerable to rain, and also
            for abnormal loads that require more space than is available on a
            closed body.
          </p>
        </div>

        <div>
          <img
            className="object-cover rounded-2xl w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://i.pinimg.com/564x/e2/5b/73/e25b73af24727791491ee9de50284d64.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            REEFER
          </p>
          <p className="text-gray-700">
            Refrigerated trailer that gets attached to a semi-truck in order to
            transport perishables and other temperature-sensitive goods. Reefer
            trucks range from simple ice cream trucks to large containers
            carrying perishable goods across the country.
          </p>
          <p>
            Most long-distance refrigerated transport by truck is done in
            articulated trucks pulling refrigerated semi-trailers.
          </p>
        </div>

        <div>
          <img
            className="object-cover rounded-2xl w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://i.pinimg.com/564x/c0/93/80/c09380443f64118490051daed0ab4882.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            CONESTOGA
          </p>
          <p className="text-gray-700">
            Conestoga trailers have advantages for drivers who no longer have to
            struggle with handling tarps or worry about bad weather disrupting
            their deliveries. their deliveries.
          </p>
          <p> Conestoga platforms are the best option if: </p>
          <p>
            - It is required to upload from the sides or the top of the truck,
            or it is an oversized and
          </p>
          <p>- It is necessary to protect the load from weather conditions.</p>
        </div>

        <div>
          <img
            className="object-cover rounded-2xl w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src=" https://i.pinimg.com/564x/69/67/c8/6967c8a8e6a26ffb74444fbf567dacd7.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            STEP DECK
          </p>
          <p className="text-gray-700">
            Similar to flatbed trucks, step deck is an open type of trailer with
            two deck levels: an upper deck and a lower deck that drops down
            after clearing the tractor unit. Generally, step deck trailers can
            haul taller loads than flatbed trailers and often have ramps for
            unloading.
          </p>
        </div>
        <div>
          <img
            className="object-cover rounded-2xl w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://i.pinimg.com/564x/b5/b0/8f/b5b08f993c9796d2c08663b1d25e697f.jpg"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">VAN</p>
          <p className="text-gray-700">
            A van is a type of road vehicle used for transporting goods.
            Minivans typically offer seven or eight-passenger seating capacity,
            and better fuel economy than full-sized vans, at the expense of
            power, cargo space, and towing capacity. Minivans are often equipped
            with dual side sliding doors.
          </p>
        </div>
      </div>
    </div>
  )
}
