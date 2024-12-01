"use client";

import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import NameComponent from "./NameComponent";
import ImageComponent from "./Image";
import Position from "./position";
import Description from "./Description";
import ExperiencePopup from "./ExperiencePopup";
import EducationPopup from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import LoadingSpinner from "./LoadingSpinner";

const ResponsiveGridLayout = WidthProvider(Responsive);

const BoxOne = () => <NameComponent />;
const BoxTwo = () => <ImageComponent />;
const BoxThree = () => (
  <div className="h-full w-full">
    <ExperiencePopup />
  </div>
);
const BoxFour = () => <Position />;
const BoxFive = () => (
  <div className="h-full w-full">
    <EducationPopup />
  </div>
);
const BoxSix = () => (
  <div className="w-full h-full flex items-center justify-center ">
    <Skills />
  </div>
);
const BoxSeven = () => (
  <div className="h-full w-full">
    <Projects />
  </div>
);
const BoxEight = () => (
  <div className="overflow-y-auto w-full h-full custom-scrollbar">
    <Description />
  </div>
);
const BoxNine = () => (
  <div className="w-full overflow-auto">
    <Contact />
  </div>
);

const components = [
  <BoxOne key="box-1" />,
  <BoxTwo key="box-2" />,
  <BoxThree key="box-3" />,
  <BoxFour key="box-4" />,
  <BoxFive key="box-5" />,
  <BoxSix key="box-6" />,
  <BoxSeven key="box-7" />,
  <BoxEight key="box-8" />,
  <BoxNine key="box-9" />,
];

const GridPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  const layouts = {
    lg: [
      { i: "1", x: 1, y: 0, w: 2, h: 1 },
      { i: "2", x: 0, y: 0, w: 1, h: 3 },
      { i: "3", x: 3, y: 0, w: 1, h: 4 },
      { i: "4", x: 1, y: 1, w: 2, h: 1 },
      { i: "5", x: 3, y: 0, w: 1, h: 3 },
      { i: "6", x: 0, y: 2, w: 2, h: 2 },
      { i: "7", x: 2, y: 2, w: 1, h: 5 },
      { i: "8", x: 1, y: 1, w: 1, h: 1 },
      { i: "9", x: 0, y: 3, w: 2, h: 2 },
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 1, h: 1 },
      { i: "2", x: 0, y: 1, w: 1, h: 3 },
      { i: "4", x: 0, y: 3, w: 1, h: 1 },
      { i: "8", x: 0, y: 7, w: 1, h: 2 },
      { i: "3", x: 0, y: 2, w: 1, h: 3 },
      { i: "5", x: 0, y: 4, w: 1, h: 3 },
      { i: "6", x: 0, y: 5, w: 1, h: 1 },
      { i: "7", x: 0, y: 6, w: 1, h: 3 },
      { i: "9", x: 0, y: 8, w: 1, h: 2 },
    ],
  };

  return (
    <div className="container relative overflow-hidden">
      {isLoading && <LoadingSpinner />}
      {/* Background inside container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-4 left-64 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-4 left-[600px] w-[400px] h-[400px] bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-20 right-48 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-4 left-[400px] w-[400px] h-[400px] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute bottom-4 left-[800px] w-[400px] h-[400px] bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Grid Layout */}
      <ResponsiveGridLayout
        className="layout relative z-10 h-full"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 }}
        rowHeight={100}
        isResizable={false}
        isDraggable={false}
      >
        {components.map((Component, index) => (
          <div
            key={String(index + 1)}
            className="dark:bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center border dark:border-white/10 shadow-lg bg-white/10"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              borderRadius: "8px",
            }}
          >
            {Component}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default GridPage;
