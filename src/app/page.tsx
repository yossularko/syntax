import CardCounter from "@/components/CardCounter";
import CardInfo from "@/components/CardInfo";
import CardOffer from "@/components/CardOffer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[100px]">
      <div className="min-h-[calc(70svh-100px)] max-w-5xl mx-auto flex flex-col items-center justify-center text-center gap-5 px-4">
        <h5 className="uppercase text-gray-500 text-lg tracking-wider">
          We make innovation creation easy
        </h5>
        <h1 className="uppercase text-8xl font-bold tracking-wider">
          Deep Tech Company
        </h1>
        <Button className="bg-yellow-200 min-h-14 px-10 rounded-full mt-6 z-10">
          Learn more
        </Button>
      </div>
      <div className="relative max-w-6xl mx-auto w-full h-[1152px] mt-[-140px] px-4">
        <Image
          src="/abstract1.svg"
          alt="abstract 1"
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
          className="w-full h-full object-contain"
        />
        <div className="absolute left-[100px] top-[480px] rounded-2xl p-6 backdrop-blur-md w-[320px]">
          <h2 className="text-xl uppercase tracking-wider font-semibold">
            Cyber Security
          </h2>
          <p className="text-sm">
            Prevents threats at faster speed, greater scale, and higher accuracy
            than humanly possible
          </p>
        </div>
        <div className="absolute right-[100px] bottom-[280px] rounded-2xl p-6 backdrop-blur-md w-[320px]">
          <h2 className="text-xl uppercase tracking-wider font-semibold">
            Artificial Intelligence
          </h2>
          <p className="text-sm">
            We orchestrate a systematic approach to build hight impact AI
            ventures
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center min-h-[calc(100svh-100px)] bg-yellow-200 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex gap-5 text-black items-center">
            <div className="flex-1">
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
                  We prioritize on helping businesses and goverments to
                  stramline their daily core operations with technological and
                  digital solutions.
                </p>
                <Button
                  variant="secondary"
                  className="bg-black min-h-14 px-10 rounded-full mt-16"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <CardCounter value="320+" label="Clients around the world" />
              <CardCounter value="125+" label="Completed projects" />
              <CardCounter value="43+" label="Our Partners" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="uppercase text-8xl font-bold tracking-wider">
          Services
        </h1>
        <h1 className="uppercase text-8xl font-bold tracking-wider text-yellow-200">
          We Offer
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
          <div>
            <CardOffer
              title="Custom Software Development"
              img="/abstract2.svg"
              className="bg-orange-400"
            />
          </div>
          <div className="mt-[120px] mb-[-120px]">
            <CardOffer
              title="Embedded Hardware Development"
              img="/abstract3.svg"
              className="bg-purple-400"
            />
          </div>
          <div>
            <CardOffer
              title="Machine Vision Design"
              img="/abstract1.svg"
              className="bg-blue-400"
            />
          </div>
          <div className="mt-[120px] mb-[-120px]">
            <CardOffer
              title="IOT & Connected Devices"
              img="/abstract4.svg"
              className="bg-yellow-400"
            />
          </div>
        </div>
      </div>
      <div className="relative h-[1080px] overflow-hidden">
        <div className="w-[1000px] h-[800px] bg-orange-500 rounded-full blur-[260px] absolute bottom-[-840px] left-[-400px]" />
        <div className="absolute bottom-[-660px] left-[-300px]">
          <Image
            src="/abstract3.svg"
            alt="bottom abstract"
            width={1155}
            height={1155}
            className="object-contain"
          />
        </div>
        <div className="absolute w-full">
          <div className="max-w-6xl mx-auto pt-56 pb-16 px-4">
            <h1 className="uppercase font-bold text-5xl text-center tracking-wider">
              We Diligently serve
              <br />
              our customers with
              <br />
              <span className="text-yellow-200">superior products</span>
              <br />
              and performance
            </h1>
            <div className="flex gap-10 mt-24 overflow-x-auto my-scrollbar">
              <CardInfo
                title="Redefining enterprise grade"
                description="We live in an age in which cyber attack make front page news on a weekly, sometimes even daily basis."
                className="bg-violet-500"
              />
              <CardInfo
                title="Brings New Data Analytics"
                description="A traditional ransomware search may require a query for a file hash, this is evective if you only have a few examples of matches."
                className="bg-fuchsia-500"
              />
              <CardInfo
                title="Brings New Data Analytics"
                description="A traditional ransomware search may require a query for a file hash, this is evective if you only have a few examples of matches."
                className="bg-yellow-200 text-gray-900"
              />
              <CardInfo
                title="Redefining enterprise grade"
                description="We live in an age in which cyber attack make front page news on a weekly, sometimes even daily basis."
                className="bg-emerald-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
