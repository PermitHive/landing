import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const SpringCards = () => {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Card
          title="Smart Analysis"
          subtitle="Our advanced AI algorithms analyze building codes and zoning regulations in real-time, providing instant and accurate compliance assessments."
          className="bg-yellow-300"
        />
        <Card
          title="Comprehensive Database"
          subtitle="Access our extensive database of municipal codes, updated regularly to ensure you always have the latest regulatory information at your fingertips."
          className="bg-yellow-100 sm:-translate-y-6"
        />
        <Card
          title="Instant Checks"
          subtitle="Get instant compliance checks for your project, ensuring you stay ahead of the curve and save time."
          className="bg-yellow-100"
        />
        <Card
          title="Automated Compliance"
          subtitle="Streamline your compliance process with automated checks and validations, reducing manual effort and potential human error."
          className="bg-yellow-300 sm:-translate-y-6"
        />
      </div>
    </section>
  );
};

const Card = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.5,
      }}
    >
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-full border-2 border-black bg-emerald-300",
          className
        )}
      >
        <motion.div
          initial={{
            x: 0,
            y: 0,
          }}
          variants={{
            hovered: {
              x: -8,
              y: -8,
            },
          }}
          className={twMerge(
            "-m-0.5 border-2 border-black bg-emerald-300",
            className
          )}
        >
          <motion.div
            initial={{
              x: 0,
              y: 0,
            }}
            variants={{
              hovered: {
                x: -8,
                y: -8,
              },
            }}
            className={twMerge(
              "relative -m-0.5 flex h-72 flex-col justify-between overflow-hidden border-2 border-black bg-emerald-300 p-8",
              className
            )}
          >
            <p className="flex items-center text-2xl font-medium uppercase">
              <ArrowRight className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100" />
              {title}
            </p>
            <div>
              <p className="transition-[margin] duration-300 ease-in-out group-hover:mb-10">
                {subtitle}
              </p>
              <button
                onClick={() => {
                  window.open("https://app.permithive.com", "_blank");
                }}
                className="absolute bottom-2 left-2 right-2 translate-y-full border-2 border-black bg-white px-4 py-2 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
              >
                LET'S GO
              </button>
            </div>

            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{
                top: "0",
                right: "0",
                x: "50%",
                y: "-50%",
                scale: 0.75,
              }}
              width="200"
              height="200"
              className="pointer-events-none absolute z-10 rounded-full"
            >
              <path
                id="circlePath"
                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  fill="black"
                  className="fill-black text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                >
                  LEARN MORE • LEARN MORE • LEARN MORE • LEARN MORE •
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};
