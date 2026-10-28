import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <h2 className="text-xl font-bold sm:text-2xl">
        Contact:
      </h2>

      <div className="mt-8 space-y-5 sm:mt-10">
        <a
          href="https://wa.me/6281219350478"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80 sm:gap-5"
        >
          <Image
            src="/img/logowhatsapp.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="h-10 w-10 shrink-0 object-contain sm:h-12.5 sm:w-12.5"
          />

          <span className="break-all text-base font-bold text-green-400 underline sm:text-xl md:text-2xl">
            0812-1935-0478
          </span>
        </a>

        <a
          href="mailto:saytobusman@gmail.com"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80 sm:gap-5"
        >
          <Image
            src="/img/logogmail.webp"
            alt="Gmail"
            width={50}
            height={50}
            className="h-10 w-10 shrink-0 object-contain sm:h-12.5 sm:w-12.5"
          />

          <span className="break-all text-base font-bold text-blue-400 underline sm:text-xl md:text-2xl">
            saytobusman@gmail.com
          </span>
        </a>
      </div>
    </main>
  );
}