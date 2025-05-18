"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
        >
          Quickly find the home you want using our effective search filters!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Reliable and Authenticated Homes",
                    "Easily Explore Verified Rentals Today",
                    "Make Your Rental Hunt Easy and Smarter",
                  ][index]
                }
                description={
                  [
                    "Explore top rental choices backed by real reviews and ratings.",
                    "Read real reviews and ratings to better understand your rental choices.",
                    "Browse verified rental listings you can trust for a smooth, stress-free process.",
                  ][index]
                }
                linkText={["Explore", "Search", "Discover"][index]}
                linkHref={["/search", "/search", "/search"][index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className="border rounded p-4 hover:shadow-lg">
    <div className=" rounded-lg bg-secondary-20d0 mb-4 flex items-center justify-center h-56">
      <Image
        src={imageSrc}
        width={400}
        height={400}
        className="w-full h-full rounded "
        alt={title}
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <Link
      href={linkHref}
      className=" flex bg-secondary-500 max-w-[110px] justify-center mx-auto border border-gray-300 rounded px-4 py-2 hover:bg-secondary-500/80"
      scroll={false}
    >
      {linkText}
    </Link>
  </div>
);

export default FeaturesSection;
