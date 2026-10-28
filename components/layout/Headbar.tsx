import localFont from "next/font/local";

const jawara = localFont({
  src: "../../public/font/SANG JAWARA.ttf",
});

const subtitle = "COMMERCIAL ART";

export default function Headbar() {
  return (
    <header className="relative min-h-24 cursor-default select-none sm:min-h-32 md:min-h-40">
      <div className="relative z-10 mx-4 flex flex-col items-start sm:mx-8 md:mx-12 lg:mx-20 xl:mx-30">
        <h1
          className={`${jawara.className} text-5xl leading-none text-white sm:text-7xl md:text-8xl xl:text-9xl`}
        >
          DIORATORET
        </h1>

        <div className="-mt-1 flex w-full max-w-120 justify-between sm:-mt-4 md:-mt-7">
          {subtitle.split("").map((char, index) => (
            <span
              key={index}
              className="font-sans text-xs text-white sm:text-base md:text-xl"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}