"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 8,
    text: "Projects completed",
  },
  {
    num: 2,
    text: "Domain mastered ( Data Science & MERN Stack)",
  },
  {
    num: 4,
    text: "Licenses & Certification",
  },
  {
    num: 500,
    text: "+ DSA Questions Solved",
  },
];

const Stats = () => {
  return (
    <section className="ot-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((items, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={items.num}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    items.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }leading-snug text-white/80`}
                >
                  {items.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
