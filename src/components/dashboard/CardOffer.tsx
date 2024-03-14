"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  img: string;
  className?: string;
}

const CardOffer = ({ title, img, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeIn" }}
      viewport={{ once: true }}
      className="relative bg-background max-w-md mx-auto min-h-[600px] rounded-xl px-12 pt-16 overflow-hidden"
    >
      <h3 className="uppercase text-3xl font-bold tracking-wider">{title}</h3>
      <div
        className={cn(
          "absolute left-[120px] bottom-[-40px] w-[200px] h-[200px] blur-[160px] rounded-full",
          className
        )}
      />
      <div className="absolute right-[-140px] bottom-[-140px]">
        <Image
          src={img}
          alt="card image"
          width={540}
          height={540}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default CardOffer;
