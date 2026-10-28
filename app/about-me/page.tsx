import Image from "next/image";

export default function Page() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-4 sm:px-6 sm:pt-8 lg:px-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] md:gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
        <section className="order-1 flex min-w-0 flex-col items-center md:order-2 md:pt-4">
          <Image
            src="/img/Profilcv1.jpeg"
            alt="Budi Santoso"
            width={300}
            height={300}
            draggable={false}
            loading="eager"
            className="
              h-48 w-48 rounded-full object-cover
              border-r-6 border-t-6 border-transparent
              shadow-2xl transition-all duration-300
              hover:border-white
              sm:h-56 sm:w-56
              md:h-64 md:w-64
              lg:h-75 lg:w-75
            "
          />

          <span className="mt-3 text-xl font-bold italic text-white opacity-80 sm:text-2xl">
            Illustrator
          </span>
        </section>

        <section className="order-2 min-w-0 md:order-1 md:pt-56 lg:pt-64">
          <div className="space-y-3 text-base font-bold leading-relaxed text-white sm:text-lg lg:text-2xl">
            <p className="flex flex-wrap items-baseline gap-x-2">
              <a
                href="https://wa.me/6281219350478"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                WhatsApp
              </a>

              <span className="text-gray-300">(Chat):</span>

              <span>0812-1935-0478</span>
            </p>

            <p className="wrap-break-word">
              Portofolio:{" "}
              <a
                href="https://saytobusman.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-blue-400 underline hover:text-blue-300 sm:break-normal"
              >
                saytobusman.blogspot.com
              </a>
            </p>

            <p className="pt-2">Software:</p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
            <Image
              src="/img/photoshop-removebg-preview.png"
              alt="Adobe Photoshop"
              width={80}
              height={80}
              draggable={false}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />

            <Image
              src="/img/illustrator-removebg-preview-crop.png"
              alt="Adobe Illustrator"
              width={80}
              height={80}
              draggable={false}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />

            <Image
              src="/img/premiere-removebg-preview.png"
              alt="Adobe Premiere"
              width={80}
              height={80}
              draggable={false}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />

            <Image
              src="/img/freehand-cut.jpeg"
              alt="Macromedia FreeHand"
              width={80}
              height={80}
              draggable={false}
              className="h-14 w-14 rounded-2xl object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />

            <Image
              src="/img/blender-removebg-preview-crop.png"
              alt="Blender"
              width={80}
              height={80}
              draggable={false}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />
          </div>
        </section>
      </div>
    </main>
  );
}