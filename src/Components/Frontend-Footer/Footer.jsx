import React, { useState } from 'react'

export default function Footer() {
    const time =Date.now();
    const date =  new Date(time).toISOString();
    const year = date.slice(0,4);
  return (
    <footer className="bg-white shadow-lg mt-10 border-t-2 ">
        <div className='"w-full max-w-screen-xl mx-auto p-4 md:py-8"'>
            <div className="flex justify-center items-center flex-col">
                <div className="flex flex-col justify-center items-center md:justify-between w-full ">
                    <div className=" flex items-center space-x-3 text-gray-500 mb-3">
                        <img src="logo.jpg" className="h-12" alt="" />
                        <span className="text-sm">
                        Cambodia Schlarship Center មជ្ឈមណ្ឌលអាហារូបករណ៍កម្ពុជា
                        </span>
                    </div>
                </div>
                <div className='flex space-x-9'>
                    <div>
                        <a  href="https://www.facebook.com/scholarshipcenter">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 256 256"
                        >
                            <path
                            fill="#1877F2"
                            d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                            />
                            <path
                            fill="#FFF"
                            d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                            />
                        </svg>
                        </a>
                    </div>
                    <div>
                        <a href=" http://t.me/scholarshipcenter">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                        >
                        <defs>
                            <linearGradient
                            id="logosTelegram0"
                            x1="50%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                            >
                            <stop offset="0%" stopColor="#2AABEE" />
                            <stop offset="100%" stopColor="#229ED9" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#logosTelegram0)"
                            d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
                        />
                        <path
                            fill="#FFF"
                            d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"
                        />
                        </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.tiktok.com/@scholarshipcenter?_t=8hoC3NyqV2Q&_r=1">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.25"
                        height="32"
                        viewBox="0 0 256 290"
                        >
                        <path
                            fill="#FF004F"
                            d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67.115 67.115 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995h-.002Zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898ZM69.673 225.607a40.008 40.008 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.313 40.313 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.268 40.268 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9Z"
                        />
                        <path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857V92.85h-.001Z" />
                        <path
                            fill="#00F2EA"
                            d="M242.075 76.63V66.516a66.285 66.285 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163ZM176.53 11.57a67.788 67.788 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571h34.643ZM99.966 113.58v-10.769a88.787 88.787 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833Z"
                        />
                        </svg>
                        </a>
                    </div>
                </div>
                <div>
                <span className="border-t-2 mt-6 p-3 block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="/" className="hover:underline text-sm">CSC™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

