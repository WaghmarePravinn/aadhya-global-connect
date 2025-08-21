import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import box from "@/assets/gallery/box.jpeg";

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

  // Initial gallery items (can be replaced later)
  const initialGalleryItems: GalleryItem[] = [
    {
      type: 'image',
      src: 'box.jpeg',
      title: 'Modern Logistics Hub',
      description: 'State-of-the-art warehouse facilities'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fleet Management',
      description: 'Our extensive truck fleet ready for delivery'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'International Shipping',
      description: 'Global cargo operations at the port'
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/6169671/6169671-uhd_2560_1440_30fps.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Warehouse Operations',
      description: 'Behind the scenes of our operations'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Technology Integration',
      description: 'Advanced tracking and management systems'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Team Excellence',
      description: 'Our dedicated logistics professionals'
    }
  ];

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems); // State for the gallery items

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

    // Function to update the gallery items.  You can call this from elsewhere in your application.
  const updateGalleryItems = (newGalleryItems: GalleryItem[]) => {
    setGalleryItems(newGalleryItems);
    setCurrentIndex(0);  // Reset to the first item when updating
    setSelectedMedia(newGalleryItems[0] || null); // Select the first image
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      {/* ... rest of your component code using `galleryItems` ... */}
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

