import React, { useState } from "react";
import Head from "next/head";
export default function MyApp() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  return (
    <div id="faq">
      <div className=" flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
        <div className="md:py-36 py-20">
          <h1
            role="heading"
            className="xl:text-6xl md:text-4xl text-xl font-bold leading-10 text-white"
          >
            Frequently asked questions
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
          <div className="bg-white shadow rounded p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                  How many Women Doods are there?
                </h2>
              </div>
              <button
                onClick={() => setFaq1(!faq1)}
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq1 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {faq1 && (
              <ul className="">
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4">
                   There are a total of 7,000 Women Doods.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                  What is the price?
                </h2>
              </div>
              <button
                onClick={() => {
                  setFaq2(!faq2);
                }}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq2 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq2 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                    The first 1,000 NFTs will be FREE. The remaining 6,000 will cost 0.008ETH per.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                  WEN REVEAL?
                </h2>
              </div>
              <button
                onClick={() => {
                  setFaq3(!faq3);
                }}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq3 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq3 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                    All NFTs will be instantly revealed.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                  When can I get myself a woman?
                </h2>
              </div>
              <button
                onClick={() => setFaq4(!faq4)}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq4 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq4 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                    Now! Minting is officially live!
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
