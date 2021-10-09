import React from "react"
import {
  AnnotationIcon,
  LightningBoltIcon,
  TruckIcon,
} from "@heroicons/react/outline"
import { EmojiHappyIcon } from "@heroicons/react/solid"
import logo from "../../../static/images/logos/main-logo.svg"

const features = [
  {
    name: "High Quality Delivery Services",
    description:
      "We manage our own branded Universe Logistics delivery team and cooperate with high-quality distribution partners throughout USA.",
    icon: TruckIcon,
  },
  {
    name: "Dedicated Personal Dispatcher",
    description:
      "Your goods will be monitored by our dedicated person all the way.",
    icon: EmojiHappyIcon,
  },
  {
    name: "Credit Checks",
    description: "Strategic customers & relationships.",
    icon: LightningBoltIcon,
  },
  {
    name: "Full and Partial Loads",
    description: "We specialize in flatbed, step-deck, reefer and conestoga.",
    icon: AnnotationIcon,
  },
  {
    name: "Full and Partial Loads",
    description: "We specialize in flatbed, step-deck, reefer and conestoga.",
    icon: AnnotationIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brandYellow font-semibold tracking-wide uppercase">
            Why Universe Logistics?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to delivery goods!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Universe Logistics builds relationships with strategic customers and
            provides high quality transportation services.
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-10 md:space-y-5 md:grid md:grid-cols-2 md:gap-x-20">
            <div>
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1506306460327-3164753b74c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                alt=""
              />
            </div>
            <div className="space-y-5">
              {features.map(feature => (
                <div key={feature.name}>
                  <dt className="space-y-5">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brandYellow text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
              <img className="rounded-2xl mt-10" src={logo} alt="" />
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
