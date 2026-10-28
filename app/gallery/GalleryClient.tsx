
"use client";

import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from "react";

type Category = {
  id: number;
  name: string;
};

type Gallery = {
  id: number;
  imageUrl: string;
  categoryId: number;
  category: Category;
};

type Props = {
  galleries: Gallery[];
  categories: Category[];
};

export default function GalleryClient({ galleries, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const filteredGallery = useMemo(
    () =>
      selectedCategory === "All"
        ? galleries
        : galleries.filter(
            (item) => item.category.name === selectedCategory,
          ),
    [selectedCategory, galleries],
  );

  const navigateImage = useCallback(
    (direction: 1 | -1) => {
      if (!selectedImage || filteredGallery.length === 0) return;

      const currentIndex = filteredGallery.findIndex(
        (item) => item.imageUrl === selectedImage,
      );

      if (currentIndex === -1) return;

      const nextIndex =
        (currentIndex + direction + filteredGallery.length) %
        filteredGallery.length;

      setSelectedImage(filteredGallery[nextIndex].imageUrl);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    },
    [selectedImage, filteredGallery],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setScale(1);
        setPosition({ x: 0, y: 0 });
        return;
      }

      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateImage(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateImage(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, navigateImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const offsetX = mouseX - rect.width / 2;
    const offsetY = mouseY - rect.height / 2;

    setScale((prevScale) => {
      const newScale = Math.min(
        Math.max(prevScale - e.deltaY * 0.002, 1),
        5,
      );

      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
        return 1;
      }

      const ratio = newScale / prevScale;

      setPosition((prevPosition) => ({
        x: prevPosition.x - offsetX * (ratio - 1),
        y: prevPosition.y - offsetY * (ratio - 1),
      }));

      return newScale;
    });
  };

  const closePreview = () => {
    setSelectedImage(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative z-10 mb-12 sm:mb-16 lg:mb-20">
      <nav
        aria-label="Gallery categories"
        className="
          mx-4 -mt-2 flex flex-wrap justify-center gap-2
          sm:mx-8 sm:-mt-5 sm:gap-3
          lg:mx-16 xl:mx-30
        "
      >
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          aria-pressed={selectedCategory === "All"}
          className={`
            cursor-pointer rounded-xl
            bg-[url('/img/NameTag_BTN.jpg')] bg-cover bg-center
            px-3 py-2 text-sm font-bold text-black
            transition-transform duration-300 hover:scale-[1.03]
            sm:rounded-2xl sm:px-4 sm:text-base
            md:text-xl lg:text-2xl
            ${selectedCategory === "All" ? "scale-[1.03] ring-2 ring-white sm:ring-3" : ""}
          `}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setSelectedCategory(category.name)}
            aria-pressed={selectedCategory === category.name}
            className={`
              max-w-full cursor-pointer rounded-xl
              bg-[url('/img/NameTag_BTN.jpg')] bg-cover bg-center
              py-2 text-sm font-bold text-black
              transition-transform duration-300 hover:scale-[1.11]
              sm:rounded-2xl sm:px-4 sm:text-base
              md:text-xl lg:text-2xl
              ${selectedCategory === category.name ? "scale-[1.05] ring-2 ring-white sm:ring-3" : ""}
            `}
          >
            {category.name}
          </button>
        ))}
      </nav>

      <div
        className="
          mx-4 mt-8 grid grid-cols-1 gap-4
          sm:mx-8 sm:mt-10 sm:grid-cols-2 sm:gap-5
          md:grid-cols-3
          lg:mx-16
          xl:mx-30 xl:grid-cols-4 xl:gap-6
        "
      >
        {filteredGallery.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setSelectedImage(item.imageUrl);
              setScale(1);
              setPosition({ x: 0, y: 0 });
            }}
            aria-label={`Open gallery image ${item.id}`}
            className="group block w-full cursor-zoom-in text-left"
          >
            <Image
              src={item.imageUrl}
              alt="Gallery artwork"
              width={500}
              height={500}
              loading="lazy"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 50vw,
                (max-width: 1279px) 33vw,
                25vw
              "
              className="
                h-64 w-full rounded-xl object-cover
                transition-transform duration-300
                group-hover:scale-[1.03]
                sm:h-72 md:h-80 xl:h-100
              "
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          data-escape-modal="true"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            overflow-hidden bg-black/90 p-3
            sm:p-6
          "
          onWheel={handleWheel}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={closePreview}
            className="
              absolute right-3 top-3 z-50
              flex h-11 w-11 items-center justify-center
              rounded-full bg-black/50
              text-4xl text-white transition-colors
              hover:bg-black/80
              sm:right-6 sm:top-6 sm:h-12 sm:w-12 sm:text-5xl
            "
          >
            ×
          </button>

          {filteredGallery.length > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => navigateImage(-1)}
              className="
                absolute left-3 top-1/2 z-50
                -translate-y-1/2 rounded-full
                bg-black/60 px-3 py-2
                text-3xl text-white transition-colors
                hover:bg-black/80
                sm:left-6 sm:px-4 sm:text-4xl
              "
            >
              ‹
            </button>
          )}

          {filteredGallery.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={() => navigateImage(1)}
              className="
                absolute right-3 top-1/2 z-50
                -translate-y-1/2 rounded-full
                bg-black/60 px-3 py-2
                text-3xl text-white transition-colors
                hover:bg-black/80
                sm:right-6 sm:px-4 sm:text-4xl
              "
            >
              ›
            </button>
          )}

          <Image
            src={selectedImage}
            alt="Gallery preview"
            width={2000}
            height={2000}
            sizes="100vw"
            draggable={false}
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: `
                translate(${position.x}px, ${position.y}px)
                scale(${scale})
              `,
              transformOrigin: "center",
              transition: "transform 0.05s linear",
            }}
            className="
              max-h-[85dvh] max-w-[94vw]
              rounded-lg object-contain
              sm:max-h-[90vh] sm:max-w-[90vw] sm:rounded-xl
            "
          />
        </div>
      )}
    </div>
  );
}
