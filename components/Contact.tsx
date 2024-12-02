"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
import emailjs from "@emailjs/browser";
import { GlobeMethods } from "react-globe.gl";

const socialMedia = [
  {
    icon: "/social/icons8-github-150.png",
    link: "https://github.com/Abi-097/",
  },
  {
    icon: "/social/icons8-facebook-144.png",
    link: "https://web.facebook.com/abishek.raja.142/",
  },
  {
    icon: "/social/icons8-instagram-144.png",
    link: "https://www.instagram.com/abi__1203_/",
  },
  {
    icon: "/social/icons8-linkedin-144.png",
    link: "https://www.linkedin.com/in/abishek-mahenderaraja-188286169/",
  },
  {
    icon: "/social/icons8-twitterx-150.png",
    link: "https://twitter.com/Abi_Mahen_012/",
  },
];

const Contact = () => {
  const globeRef = useRef<GlobeMethods | undefined>();
  const form = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (globeRef.current) {
      // Adjust camera zoom level
      globeRef.current.pointOfView({ altitude: 1.5 }, 1000); // Zoom to altitude 1.5
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_np3vdof",
        "template_mmxfqpd",
        form.current,
        "7347l2W9TkkATl3ah"
      )
      .then(
        () => {
          setOpen(true);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="relative flex items-center justify-around gap-2 mx-4 ">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-full p-2.5 mt-3 font-medium text-sm flex items-center justify-center dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500 cursor-pointer">
              Contact
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[425px] md:max-w-[625px]">
            <DialogHeader>
              <DialogDescription>
                <div className="absolute h-[200px] w-[300px] flex items-center justify-center left-11 md:left-40 top-36">
                  <Globe
                    ref={globeRef}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundColor="rgba(0,0,0,0)"
                    // width={580}
                    // height={200}
                    onZoom={(zoomLevel) =>
                      console.log("Zoom level changed:", zoomLevel)
                    }
                  />
                </div>
                <div className="flex flex-col justify-center relative z-[1px] items-center">
                  <div className="relative flex justify-between items-center flex-col w-full pb-20 px-0 pt-0 gap-3">
                    <h1 className="text-4xl text-center font-semibold mt-5 dark:text-gray-500 text-black">
                      Contact Me
                    </h1>
                    <p className="text-lg text-center dark:text-gray-500 text-black max-w-[600px]">
                      Feel free to reach out to me for any questions!!!
                    </p>
                    <form
                      className="w-[95%] max-w-[600px] flex flex-col gap-3 dark:text-gray-500 text-black"
                      ref={form}
                      onSubmit={handleSubmit}
                    >
                      <input
                        placeholder="Your Name"
                        name="from_name"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] dark:text-gray-500 text-black rounded-[12px] p-[12px_16px] focus:border-primary"
                      />

                      <input
                        placeholder="Your Email"
                        name="from_email"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] dark:text-gray-500 text-black rounded-[12px] p-[12px_16px] focus:border-primary"
                      />

                      <input
                        placeholder="Subject"
                        name="subject"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] dark:text-gray-500 text-black rounded-[12px] p-[12px_16px] focus:border-primary"
                      />

                      <textarea
                        rows={4}
                        placeholder="Message"
                        name="message"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] dark:text-gray-500 text-black rounded-[12px] p-[12px_16px] focus:border-primary"
                      />

                      <button
                        type="submit"
                        className="w-full text-center bg-gradient-to-br from-[#A352FF] to-[#FF4EFF] 
  p-[13px_16px] mt-[2px] rounded-[12px] border-none text-white font-semibold 
  text-[18px] hover:opacity-90 transition duration-300 ease-in-out"
                      >
                        Send
                      </button>

                      <div className="flex items-center justify-center gap-4 mx-4 mt-4 overflow-hidden">
                        {socialMedia.map((social, index) => (
                          <Link
                            key={index}
                            href={social.link}
                            className="hover:scale-110 transition-transform duration-300 ease-in-out border p-1 rounded-lg"
                            target="display"
                          >
                            <Image
                              src={social.icon}
                              alt={social.icon}
                              width={55}
                              height={55}
                              className="rounded-lg"
                            />
                          </Link>
                        ))}
                      </div>
                    </form>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="w-full p-2.5 mt-3 font-medium text-sm flex items-center justify-center dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500 cursor-pointer">
          <a
            href="/Abishek Mahenderaraja.pdf"
            download="Abishek Mahenderaraja.pdf"
            className="w-full flex items-center justify-center h-full"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mx-4 mt-4 overflow-hidden">
        {socialMedia.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            target="display"
          >
            <Image
              src={social.icon}
              alt={social.icon}
              width={55}
              height={55}
              className="rounded-lg"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Contact;
