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
import toast, { Toaster } from "react-hot-toast";
import { Button } from "./ui/button";

const socialMedia = [
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
    icon: "/social/icons8-github-150.png",
    link: "https://github.com/Abi-097/",
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
  const [loading, setLoading] = useState(false);

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
          toast.success(
            "You have sent email Successfully. Abi will Contact you soon",
            {
              duration: 5000,
              position: "bottom-right",
              style: {
                background: "#10B981",
                color: "#fff",
                padding: "16px",
                borderRadius: "10px",
                zIndex: "9999",
              },
            }
          );
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again later", {
            duration: 5000,
            position: "bottom-right",
            style: {
              background: "#EF4444",
              color: "#fff",
              padding: "16px",
              borderRadius: "10px",
              zIndex: "9999",
            },
          });
        }
      );
  };

  //download
  const handleDownload = async () => {
    setLoading(true); // Start the loader
    try {
      // Simulate a slight delay for better UX (optional)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const link = document.createElement("a");
      link.href = "/Abishek Mahenderaraja.pdf";
      link.download = "Abishek Mahenderaraja.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    } finally {
      setLoading(false); // Stop the loader after the file is downloaded
    }
  };
  return (
    <>
      <div className="relative flex items-center justify-around gap-2 mx-4 ">
        <Dialog>
          <DialogTrigger asChild>
            <div className="font-semibold w-full p-2.5 mt-3 text-sm flex items-center justify-center dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500 cursor-pointer">
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
                    <h1 className="text-4xl text-center font-semibold mt-5 text-gray-500 ">
                      Contact Me
                    </h1>
                    <p className="text-lg text-center text-gray-500 max-w-[600px]">
                      Feel free to reach out to me for any questions!!!
                    </p>
                    <form
                      className="w-[95%] max-w-[600px] flex flex-col gap-3 text-gray-500"
                      ref={form}
                      onSubmit={handleSubmit}
                    >
                      <input
                        placeholder="Your Name"
                        name="from_name"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] text-gray-500 rounded-[12px] p-[12px_16px] focus:border-primary"
                      />

                      <input
                        placeholder="Your Email"
                        name="from_email"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] text-gray-500 rounded-[12px] p-[12px_16px] focus:border-primary"
                      />

                      <input
                        placeholder="Subject"
                        name="subject"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] text-gray-500 rounded-[12px] p-[12px_16px] focus:border-primary"
                      />

                      <textarea
                        rows={4}
                        placeholder="Message"
                        name="message"
                        className="flex-1 bg-transparent border border-text_secondary outline-none placeholder-gray-700 
  text-[18px] text-gray-500 rounded-[12px] p-[12px_16px] focus:border-primary"
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
                    <Toaster />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* <div className="w-full p-2.5 mt-3 font-medium text-sm flex items-center justify-center dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500 cursor-pointer">
          <a
            href="/Abishek Mahenderaraja.pdf"
            download="Abishek Mahenderaraja.pdf"
            className="w-full flex items-center justify-center h-full"
          >
            Resume
          </a>
        </div> */}

        <div
          onClick={handleDownload}
          className="w-full p-2.5 mt-3 font-semibold text-sm flex items-center justify-center dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500 cursor-pointer"
        >
          {loading ? (
            <div className="flex items-center">
              <svg
                className="w-5 h-5 animate-spin text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                ></path>
              </svg>
              <span className="ml-2">Downloading...</span>
            </div>
          ) : (
            <span>Resume</span>
          )}
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
