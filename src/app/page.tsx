"use client";

import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons
import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import FooterSection from "./component/FooterSection";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";
import ServiceSection from "./component/ServiceSection";
// import TestimonialSection from "./component/TestimonialSection";
import ProjectsSection from "./component/ProjectsSection";
import TeamSection from "./component/TeamSection";
import HistoryTimeline from "./component/History";

const LandingPage = () => {
  // ✅ Video data with title + description
  const videos = [
    {
      url: "https://www.youtube.com/embed/dTDheaqUTzM",
      title:
        "POSH (Prevention of Sexual Harassment) Training at Sudhanand Business Solutions | Building Safer Workplaces",
      description:
        "Sudhanand Business Solutions conducted POSH training with Rtn. Col. Ravi Shirahatti (Retd.), engaging 150 plus employees across Mysuru, Bengaluru, ARC Sportzone, and Sudhanand Four Seasons to reinforce a safe, respectful, and inclusive workplace.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className="font-sans">
      <NavBar />
      <HeroSection />
      <HistoryTimeline />
      <AboutSection />
      <ServiceSection />

      {/* ✅ Video Card Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="text-black">Our Stories</span> &{" "}
            <span className="text-orange-600">Highlights</span>
          </h2>

          {/* Video + Arrows Container */}
          <div className="relative flex items-center justify-center gap-x-2 sm:gap-x-4 mt-4">
            {/* Left Arrow (currently disabled) */}
            {/*
            <button
              onClick={handlePrev}
              className="bg-orange-100 hover:bg-orange-200 text-orange-600 p-3 rounded-full transition z-10"
              aria-label="Previous video"
            >
              <ChevronLeft size={22} />
            </button>
            */}

            {/* Video Frame */}
            <div className="relative w-full aspect-video rounded-2xl shadow-xl overflow-hidden bg-black">
              {currentVideo ? (
                <iframe
                  key={currentIndex}
                  className="w-full h-full"
                  src={currentVideo.url}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-gray-600">Insert your video link here</p>
              )}
            </div>

            {/* Right Arrow (currently disabled) */}
            {/*
            <button
              onClick={handleNext}
              className="bg-orange-100 hover:bg-orange-200 text-orange-600 p-3 rounded-full transition z-10"
              aria-label="Next video"
            >
              <ChevronRight size={22} />
            </button>
            */}
          </div>

          {/* Title + Description */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-orange-600">
              {currentVideo.title}
            </h3>
            <p className="text-md text-gray-600 mt-3 max-w-2xl mx-auto">
              {currentVideo.description}
            </p>
          </div>
        </div>
      </section>

      <TeamSection /> {/* Our Teams */}
      <ProjectsSection />
      {/* <TestimonialSection /> */}
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
