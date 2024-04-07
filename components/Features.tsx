import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Features = () => {
  return (
    <section>
      <div className="m-auto mt-28">
        <Heading
          heading="Features"
          subheading="Explore the latest features of Auth Rush, designed to meet all your authentication requirements with simplicity and security."
        />
  
        <div className="flex gap-10 flex-wrap justify-center mt-16">
          <div className="group bg-gradient-to-b from-[#4D4A4A] to-[#232323] h-full w-72 shadow-lg rounded-md flex flex-col justify-between gap-2 p-3">
            <p className="font-medium text-white">Multifactor Authentication</p>
            <Image
              src="/assets/icons/2fa.svg"
              alt="multifactor"
              width={100}
              height={100}
              className="m-auto w-52 h-40 group-hover:scale-110 transition-transform"
            />
            <p className="text-sm text-[#AE9F9F]">
              Each user&apos;s self-serve multifactor settings are enforced automatically during sign-in.
            </p>
          </div>
          <div className="group bg-gradient-to-b from-[#4D4A4A] to-[#232323] h-full w-72 shadow-lg rounded-md flex flex-col justify-between gap-2 p-3 transition">
            <p className="font-medium text-white">Password Management</p>
            <div className="group-hover:scale-110 transition-transform">
              <Image
                src="/assets/icons/lock.svg"
                alt="passwords"
                width={80}
                height={100}
                className="m-auto w-40 h-40"
              />
            </div>
            <p className="text-sm text-[#AE9F9F]">
              Simplify password management with our secure solutions.
            </p>
          </div>
          <div className="group bg-gradient-to-b from-[#4D4A4A] to-[#232323] h-full w-72 shadow-lg rounded-md flex flex-col justify-between gap-2 overflow-x-hidden">
            <p className="font-medium text-white p-3">Social Sign-ins</p>
            <Image
              src="/assets/icons/socials.svg"
              alt="social sign-ins"
              width={100}
              height={100}
              className="w-full h-40 group-hover:scale-110 transition-transform"
            />
            <p className="text-sm text-[#AE9F9F] p-3">
              Allow users to sign in seamlessly using their social accounts.
            </p>
          </div>
          <div className="group bg-gradient-to-b from-[#4D4A4A] to-[#232323] h-full w-72 shadow-lg rounded-md flex flex-col justify-between gap-2 overflow-x-hidden">
            <p className="font-medium text-white p-3">Magic Links (Comming Soon)</p>
            <Image
              src="/assets/icons/magic-link.svg"
              alt="magic links"
              width={100}
              height={100}
              className="w-full h-40 group-hover:scale-110 transition-transform"
            />
            <p className="text-sm text-[#AE9F9F] p-3">
              Streamline user authentication with magic links for hassle-free access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Features;
