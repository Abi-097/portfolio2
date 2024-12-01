import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Description = () => {
  const { theme } = useTheme();
  return (
    <>
      <p className="p-2 text-sm dark:text-white text-black">About</p>
      <p
        className="p-2 text-sm dark:text-white text-black"
        style={{ wordSpacing: "0.3rem" }}
      >
        Keen to advance my software development career, I bring hands-on
        experience from a successful experience and a detail-oriented approach.
        Ready for a challenging role, I&apos;m committed to continuous learning
        and excited about contributing to the development of sophisticated
        software applications, collaborating with seasoned professionals to
        drive organizational growth.
      </p>{" "}
      <div className="flex items-center">
        {theme === "dark" ? (
          <Image
            src="/applewhite.gif"
            alt="/applewhite.gif"
            width={50}
            height={50}
          />
        ) : (
          <Image
            src="/applegray.gif"
            alt="/applegray.gif"
            width={50}
            height={50}
          />
        )}
        <p className="mt-3 p-2 text-sm dark:text-white text-black">
          &quot;The only way to do great work is to love what you do.&quot;-
          Steve Jobs{" "}
        </p>{" "}
      </div>
    </>
  );
};

export default Description;
