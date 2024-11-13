/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Socials from "@/components/Socials";
import Photos from "@/components/Photos";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center  xl:justify-between xl:pt-6  xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-accent">Swayam Kaushal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various Programming languages and technologies
            </p>

            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1MMc0_dW751OKz_6AZAi7_tg5ZaDwULSN/view?usp=sharing">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:text-white uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photos />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
