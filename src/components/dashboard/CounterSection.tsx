"use client";

import React from "react";
import { Button } from "../ui/button";
import CardCounter from "./CardCounter";
import { motion } from "framer-motion";

const CounterSection = () => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100svh-100px)] bg-yellow-200 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex gap-5 text-black items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.4 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="max-w-xl">
              <h1 className="uppercase text-7xl font-black tracking-wider max-w-[340px]">
                What we do
              </h1>
              <p className="text-gray-700 font-light mt-5">
                We have been developing digital products and providing
                consulting services to our clients on Blockchain and AI
                technologies.
              </p>
              <p className="text-gray-700 font-light mt-2">
                We prioritize on helping businesses and goverments to stramline
                their daily core operations with technological and digital
                solutions.
              </p>
              <Button
                variant="secondary"
                className="bg-black min-h-14 px-10 rounded-full mt-16"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-12">
            <CardCounter
              value="320+"
              label="Clients around the world"
              duration={1}
            />
            <CardCounter
              value="125+"
              label="Completed projects"
              duration={1.2}
            />
            <CardCounter value="43+" label="Our Partners" duration={1.4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
