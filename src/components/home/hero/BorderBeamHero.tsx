import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export function BorderBeamHero() {
  return (
    <div className="flex relative">
      <div className="absolute -top-[-6rem] lg:-top-[-4rem] left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/40 rounded-full blur-3xl"></div>
      <div className="relative flex h-[500px] mt-[8rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Image
          src="/assets/dashboard-home.png"
          fill={true}
          alt="dashboard home page"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[24rem] bg-gradient-to-b from-transparent to-black opacity-100"></div>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </div>
  );
}
