"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "ABOUT ME", path: "/about-me" },
  { label: "GALLERY", path: "/gallery" },
  { label: "HOW TO ORDER", path: "/how-to-order" },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="relative">
        <div className="relative h-40 w-full sm:h-52 md:h-60 lg:h-70">
          <Image
            src="/img/Bingkai1.png"
            alt="Bingkai Dioratoret"
            width={1920}
            height={280}
            priority
            sizes="100vw"
            className="
              absolute inset-0 h-full w-full object-cover object-left
              mask-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.3))]
              [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.3))]
            "
          />

          <Image
            src="/img/Profil.jpg"
            alt="Budi Santoso"
            width={200}
            height={200}
            draggable={false}
            sizes="(max-width: 639px) 96px, (max-width: 1023px) 160px, 200px"
            className="
              absolute -top-4 right-4 z-10
              h-24 w-24 rounded-full object-cover
              transition-transform duration-300 hover:scale-110
              sm:-top-8 sm:right-8 sm:h-32 sm:w-32
              md:right-16 md:h-40 md:w-40
              lg:-top-20 lg:right-[18%] lg:h-50 lg:w-50
            "
          />
        </div>
      </section>

      <nav
        aria-label="Main navigation"
        className="
          relative mx-4 mt-6 flex flex-col gap-3 text-white
          sm:mx-8 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center
          md:justify-between
          lg:mx-16 lg:mt-16
          xl:mx-30 xl:mt-20
        "
      >
        {navItems.map((item) => (
          <button
            key={item.path}
            type="button"
            onClick={() => router.push(item.path)}
            className="
              w-full cursor-pointer rounded-2xl
              bg-[url('/img/NameTag_BTN.jpg')] bg-cover bg-center
              px-4 py-3 text-base font-bold text-black
              transition-transform duration-300 hover:scale-[1.1]
              sm:w-auto sm:px-5 sm:py-4 sm:text-xl
              lg:text-2xl
            "
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}