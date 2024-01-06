import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Accommodation Solutions:',
    description:
      'Explore a vast database of Paying Guest (PG) accommodations, shared apartments, and hostels verified for quality and comfort. Filter your preferences by location, budget, and facilities to find your ideal home.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Homely Food Services:',
    description:
      'Say goodbye to food worries! Discover authentic home-cooked meals through our network of verified tiffin services and mess facilities. We ensure quality control and hygienic food practices.',
    icon: LockClosedIcon,
  },
  {
    name: 'Community Engagement:',
    description:
      'Connect with other migrants through forums, events, and local guides. Embrace the spirit of community and make your transition smoother.',
    icon: ServerIcon,
  },
]

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-22 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
               Better Food,Better Sleep
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
               About-US
              </p>
              <p className="mt-4 text-md leading-8 text-gray-600">
                At Boarding Bites, we understand the challenges migrants face
                when relocating to new cities. Our mission is to bridge the gap
                between comfort and convenience, offering a wide range of
                verified accommodations and food services tailored to meet your
                needs.
              </p>
              <dl className="mt-8 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://imgs.search.brave.com/jxg-Es2FWz15YcM3S6pD4-m6kP2R_IVIqzsFfgU6JxA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MjMyOTM2Mi9waG90/by90YWJsZS10b3At/dmlldy1vZi1pbmRp/YW4tZm9vZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cUxH/ZUZ6alpsMTBEbXpn/dkY2bWkxS0FRVlhI/Z0NwQnFnS2FZeDlE/UnpYdz0"
            alt="Product screenshot"
            className="w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
           
          />
        </div>
      </div>
    </div>
  )
}
