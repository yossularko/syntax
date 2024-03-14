"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  className?: string;
}

const CardInfo = ({ title, description, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeIn" }}
      viewport={{ once: true }}
      className={cn("rounded-xl p-10 flex flex-col justify-between", className)}
    >
      <div className="w-[360px]">
        <h2 className="uppercase text-2xl font-bold">{title}</h2>
        <p className="text-sm mt-2 mb-8">{description}</p>
      </div>
      <div className="flex">
        <Button className="min-h-14 px-10 rounded-full">Learn More</Button>
      </div>
    </motion.div>
  );
};

export default CardInfo;
