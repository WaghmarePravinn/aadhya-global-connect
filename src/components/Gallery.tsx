import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// 🖼️ Import your new local images
import first_image from "@/assets/gallery/first_image.jpeg";
import second_image from "@/assets/gallery/second_image.jpeg";
import third_image from "@/assets/gallery/third_image.jpeg";
import fourth_image from "@/assets/gallery/fourth_image.jpeg";
import fifth_image from "@/assets/gallery/fifth_image.jpeg";

// Define a type for your gallery items for better type safety
interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  thumbnail?: string; // Optional for videos
}

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🖼️ Updated gallery items using local images
  const initialGalleryItems: GalleryItem[] = [
    {
      type: 'image',
      src: first_image,
      title: 'First Image Title',
      description: 'Description for the first image'
    },
    {
      type: 'image',
      src: second_image,
      title: 'Second Image Title',
      description: 'Description for the second image'
    },
    {
      type: 'image',
      src: third_image,
      title: 'Third Image Title',
      description: 'Description for the third image'
    },
    {
      type: 'image',
      src: fourth_image,
      title: 'Fourth Image Title',
      description: 'Description for the fourth image'
    },
    {
      type: 'image',
      src: fifth_image,
      title: 'Fifth Image Title',
      description: 'Description for the fifth image'
    }
  ];

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % galleryItems.length
      : (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    setCurrentIndex(newIndex);
    setSelectedMedia(galleryItems[newIndex]);
  };

  const updateGalleryItems = (newGalleryItems: GalleryItem[]) => {
    setGalleryItems(newGalleryItems);
    setCurrentIndex(0);
    setSelectedMedia(newGalleryItems[0] || null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art facilities, advanced fleet, and dedicated team in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              onClick={() => openModal(item, index)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-200">
                <img
                  src={item.type === 'video' ? item.thumbnail || '' : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={() => navigateMedia('prev')}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={() => navigateMedia('next')}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {selectedMedia.type === 'video' ? (
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

            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-300">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
