"use client"


import { Facebook, Youtube, Instagram, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      <footer className="container mx-auto  py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Our Sister Concern */}
          <div>
            <h2 className="text-lg font-bold mb-4 ">Our Sister Concern</h2>
            <ul className="space-y-3">
              {[
                "HM Import Export",
                "HM Software Firm",
                "HM Web Design And Development Service",
                "HM Tender BD",
                "HM Travel Agency",
                "HM WEDDINGS",
                "Taatka Ltd.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm hover:translate-x-1 transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                  <Link href="#" className="hover:text-red-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-lg font-bold mb-4 ">Our Services</h2>
            <ul className="space-y-3">
              {[
                "Web Site One Page Design",
                "Web Site Multi Page Design",
                "Web Site Development",
                "Ecommerce Website Design",
                "Hotel Room Booking Management website Design",
                "WordPress Website Design And Development",
                "Website Maintenance",
              ].map((service) => (
                <li key={service} className="flex items-center gap-1.5 text-sm hover:translate-x-1 transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                  <Link href="#" className="hover:text-red-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <div className="space-y-3">
              <h2 className="text-lg font-bold mb-4 ">Contact Us</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-sm mb-1">Address:</h3>
                  <p className="text-zinc-300 leading-relaxed text-sm">
                    Twin Brooks-House,No-08,Road- 2B,Block J,
                    <br />
                    level -2 Flat B2 Baridhara ,vatara Gulshan -2
                    <br />
                    Dhaka 1212
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm  mb-1">Phone:</h3>
                  <p className="text-zinc-300 text-sm">
                    +8817114166611, +8801775281033,
                    <br />
                    +8801711353034
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">TNT:</h3>
                  <p className="text-zinc-300 text-sm">Your TNT number here</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm  mb-1">Email:</h3>
                  <p className="text-zinc-300 text-sm">
                    <Link href="mailto:hmexpoprivateltd@gmail.com" className="hover:text-red-500 transition-colors">
                      hmexpoprivateltd@gmail.com
                    </Link>
                    <br />
                    <Link href="mailto:hmltdbd@gmail.com" className="hover:text-red-500 transition-colors">
                      hmltdbd@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours & Social Networks */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold mb-4 ">Office Hours</h2>
              <div className="bg-zinc-800/50 rounded-lg overflow-hidden shadow-lg">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { day: "Saturday", time: "10.00 AM - 6.00 PM" },
                      { day: "Sunday", time: "10.00 AM - 6.00 PM" },
                      { day: "Monday", time: "10.00 AM - 6.00 PM" },
                      { day: "Tuesday", time: "10.00 AM - 6.00 PM" },
                      { day: "Wednesday", time: "10.00 AM - 6.00 PM" },
                      { day: "Thursday", time: "10.00 AM - 6.00 PM" },
                      { day: "Friday", time: "Off - Day" },
                      { day: "All Govt. Holiday", time: "Off - Day" },
                    ].map((schedule, index) => (
                      <tr
                        key={schedule.day}
                        className={`${
                          index % 2 === 0 ? "bg-zinc-800/30" : "bg-zinc-800/10"
                        } hover:bg-zinc-700/30 transition-colors duration-200`}
                      >
                        <td className="py-1.5 px-3 border-b border-zinc-700/50">{schedule.day}</td>
                        <td className="py-1.5 px-3 border-b border-zinc-700/50 text-right text-red-200">{schedule.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4 text-red-500">Our Social Networks</h2>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="bg-red-600/90 p-2 rounded-lg hover:bg-red-500 hover:scale-110 transition-all duration-200 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="bg-red-600/90 p-2 rounded-lg hover:bg-red-500 hover:scale-110 transition-all duration-200 shadow-lg"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="bg-red-600/90 p-2 rounded-lg hover:bg-red-500 hover:scale-110 transition-all duration-200 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center text-xs text-zinc-400">
          <p className="hover:text-red-400 transition-colors duration-200">
            Copyright © 2012-{new Date().getFullYear()} All Right Reserved. HM HM Angel Overseas Limited.
          </p>
          <p className="hover:text-red-400 transition-colors duration-200 mt-2 ">
            Developed by - <Link href="https://wevloper.com" target="_blank" rel="noopener noreferrer" className="text-primaryColor">
    wevloper
  </Link>
          </p>
        </div>
      <div className="mt-8 text-center">
        <button
          className="w-12 h-12 bg-red-600 hover:bg-white hover:text-red-600 rounded-full shadow-md fixed bottom-6 right-6 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          &uarr;
        </button>
      </div>
      </footer>
    </div>
  )
}

