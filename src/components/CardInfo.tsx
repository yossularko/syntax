import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  className?: string;
}

const CardInfo = ({ title, description, className }: Props) => {
  return (
    <div
      className={cn(
        "rounded-xl p-10 flex flex-col justify-between",
        className
      )}
    >
      <div className="w-[360px]">
        <h2 className="uppercase text-2xl font-bold">{title}</h2>
        <p className="text-sm mt-2 mb-8">{description}</p>
      </div>
      <div className="flex">
        <Button className="min-h-14 px-10 rounded-full">Learn More</Button>
      </div>
    </div>
  );
};

export default CardInfo;
