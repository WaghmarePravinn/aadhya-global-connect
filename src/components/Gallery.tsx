/* ------------------------------------------------------------------ */
/*  Gallery – animated horizontal carousel with modal (framer‑motion) */
/* ------------------------------------------------------------------ */
import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------- Local images -------------------- */
import first_image from "@/assets/gallery/first_image.jpeg";
import second_image from "@/assets/gallery/second_image.jpeg";
import third_image from "@/assets/gallery/third_image.jpeg";
import fourth_image from "@/assets/gallery/fourth_image.jpeg";
import fifth_image from "@/assets/gallery/fifth_image.jpeg";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  thumbnail?: string; // optional for videos
}

/* ------------------------------------------------------------------ */
// Helper motion variants (kept simple & reusable)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
  hover: {
    scale: 1.04,
    rotateX: 2,
    rotateY: 2,
    transition: { type: "spring", stiffness: 300 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

/* ------------------------------------------------------------------ */
const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialGalleryItems: GalleryItem[] = [
    {
      type: "image",
      src: first_image,
      title: "Delhivery",
      description: "Where it all happens!",
    },
    {
      type: "image",
      src: second_image,
      title: "Our Transportation",
      description:
        "Reliable trucking services – getting your goods where they need to be, on time",
    },
    {
      type: "image",
      src: third_image,
      title: "Packaging Excellence",
      description:
        "Quality packing ensures your goods arrive in perfect condition. Trust Delhivery for secure logistics",
    },
    {
      type: "image",
      src: fourth_image,
      title: "Fourth Image Title",
      description:
        "From careful packing to reliable delivery – we handle your shipments with expertise.",
    },
    {
      type: "image",
      src: fifth_image,
      title: "Inauguration Ceremony",
      description:
        "Dedicated to providing excellent logistics services across India, as celebrated at our recent inauguration with MLA Bapusaheb Pathare.",
    },
  ];

  const [galleryItems] = useState<GalleryItem[]>(initialGalleryItems);

  /* -------------------- Modal helpers -------------------- */
  const openModal = (item: GalleryItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };
  const closeModal = () => setSelectedMedia(null);
  const navigateMedia = (direction: "prev" | "next") => {
    const newIdx =
      direction === "next"
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(newIdx);
    setSelectedMedia(galleryItems[newIdx]);
  };

  /* -------------------- Render -------------------- */
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      {/* ---------- Header ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our state‑of‑the‑art facilities, advanced fleet, and dedicated
          team in action
        </p>
      </div>

      {/* ---------- Carousel (marquee) ---------- */}
      <div className="relative overflow-hidden group">
        {/* The inner flex row is twice as wide (original + duplicate) */}
        <div className="flex w-[200%] flex-nowrap animate-marquee">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-shrink-0 w-80 md:w-96 lg:w-[30rem] mx-4 cursor-pointer"
              onClick={() => openModal(item, idx)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-200">
                {/* Image / thumbnail */}
                <img
                  src={item.type === "video" ? item.thumbnail ?? "" : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Video play icon */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-transform duration-300">
                      <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </div>
                  </div>
                )}

                {/* Gradient overlay – appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* ---------- Duplicate list for seamless loop ---------- */}
          {galleryItems.map((item, idx) => (
            <motion.div
              key={`dup-${idx}`}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-shrink-0 w-80 md:w-96 lg:w-[30rem] mx-4 cursor-pointer"
              onClick={() => openModal(item, idx)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-200">
                <img
                  src={item.type === "video" ? item.thumbnail ?? "" : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-transform duration-300">
                      <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------- Modal (animated) ---------- */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative max-w-6xl max-h-full">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Prev arrow – pulsing */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 animate-pulse"
                onClick={() => navigateMedia("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {/* Next arrow – pulsing */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 animate-pulse"
                onClick={() => navigateMedia("next")}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Media (image or video) */}
              <div className="flex items-center justify-center">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="max-w-full max-h-[80vh] rounded-lg"
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                )}
              </div>

              {/* Caption */}
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-300">{selectedMedia.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

/* --------------------------------------------------------------- */
/*  This is AI generated code, please refer KPIT AI Policy before using this in your projects */
/* --------------------------------------------------------------- */