"use client";

import { cn } from "@/src/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { contacts } from "../lib/const/contacts";

export const Online = () => {
    const [active, setActive] = useState(false);
    return (
        <div
            id="floatingBlock"
            className="fixed w-10 h-10 right-[12vw] bottom-[25vw] md:bottom-[12vw] z-20  cursor-pointer"
        >
            <a
                id="whatsapp_icon"
                className={cn(
                    "flex justify-center items-center w-16 h-16 left-[2px] rounded-full absolute bg-[#4dbd75] z-[2] duration-500",
                    active ? "top-[-140px]" : "top-[2px]"
                )}
                href={contacts.whatsapp}
                target="_blank"
            >
                <svg
                    style={{ width: "50%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="whatsapp"
                    role="img"
                    viewBox="0 0 448 512"
                    className="svg-inline--fa fa-whatsapp fa-w-14 fa-2x"
                >
                    <path
                        fill="currentColor"
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                        className=""
                        style={{ fill: "white" }}
                    />
                </svg>
            </a>

            <a
                id="telegram_icon"
                className={cn(
                    "flex justify-center items-center w-16 h-16 left-[2px] rounded-full absolute bg-[#0088cc] z-[1] duration-500",
                    active ? "top-[-70px]" : "top-[2px]"
                )}
                href={contacts.telegram}
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "60%" }}
                    viewBox="0 0 192 192"
                    fill="white"
                >
                    <path
                        stroke="#0088CC"
                        strokeWidth="12"
                        d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"
                    />
                </svg>
            </a>
            {!active && (
                <div
                    onClick={() => setActive(!active)}
                    className="flex justify-center items-center w-[68px] h-[68px] rounded-full absolute  "
                >
                    <div className="z-[3] w-[68px] h-[68px] overflow-hidden rounded-full border relative bg-white">
                        <Image src={"/manager.jpg"} fill alt="manager" />
                    </div>
                    <div
                        id="greenCircle"
                        className=" absolute w-[10px] h-[10px] bg-[#21b121] rounded-full right-1 border border-white z-[4] top-[2px]"
                    ></div>
                    <div
                        id="animationCircle"
                        className=" w-12 h-12 bg-primary animate-ping absolute rounded-full duration-1000 "
                    ></div>
                    <div
                        id="managerMessage"
                        className="absolute right-[110%] bottom-[5px] text-white bg-[#383d62] p-3 text-sm rounded-2xl rounded-tr-none w-max"
                    >
                        <p>Пишите, мы онлайн</p>
                    </div>
                </div>
            )}
            {active && (
                <div
                    className="border border-gray-500 bg-white z-[4] top-[2px] flex justify-center items-center w-16 h-16 rounded-full absolute"
                    onClick={() => setActive(!active)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "40%" }}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};
