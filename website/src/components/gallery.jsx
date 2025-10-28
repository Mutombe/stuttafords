import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  X,
  ZoomIn,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight,
  Grid,
  Filter,
} from "lucide-react";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "corporate", label: "Corporate Moves" },
    { id: "residential", label: "Residential" },
    { id: "international", label: "International" },
    { id: "warehouse", label: "Warehouse & 3PL" },
    { id: "team", label: "Our Team" },
    { id: "events", label: "Events" },
  ];

  const galleryItems = [
    {
      id: 1,
      src: "/ware4.jpg",
      category: "residential",
      title: "Luxury Home Relocation",
      description: "Professional packing and moving services for high-end residences",
      size: "large",
    },
    {
      id: 2,
      src: "/Truck.jpg",
      category: "corporate",
      title: "Office Relocation Project",
      description: "Complete office move with minimal downtime",
      size: "medium",
    },
    {
      id: 3,
      src: "/ware2.jpg",
      category: "warehouse",
      title: "Modern Warehouse Facility",
      description: "State-of-the-art storage and distribution center",
      size: "tall",
    },
    {
      id: 4,
      src: "/ship.jpg",
      category: "international",
      title: "International Shipping",
      description: "Cross-border logistics and customs clearance",
      size: "medium",
    },
    {
      id: 5,
      src: "/event11.jpeg",
      category: "team",
      title: "Professional Moving Team",
      description: "Expert staff trained in professional moving techniques",
      size: "small",
    },
    {
      id: 6,
      src: "/truck3.jpg",
      category: "residential",
      title: "Furniture Assembly",
      description: "Expert furniture disassembly and reassembly services",
      size: "tall",
    },
    {
      id: 7,
      src: "/ware3.jpg",
      category: "events",
      title: "Logistics Summit 2024",
      description: "Annual industry gathering and networking event",
      size: "medium",
    },
    {
      id: 8,
      src: "/ware.jpg",
      category: "team",
      title: "Team Training Session",
      description: "Continuous professional development programs",
      size: "tall",
    },
    {
      id: 9,
      src: "/Truck2.jpg",
      category: "warehouse",
      title: "Inventory Management",
      description: "Advanced tracking and storage systems",
      size: "medium",
    },
    {
      id: 10,
      src: "/zambia.jpg",
      category: "events",
      title: "Customer Appreciation",
      description: "Celebrating our valued clients and partners",
      size: "small",
    },
    {
      id: 11,
      src: "/6.jpg",
      category: "international",
      title: "Global Network",
      description: "Connected logistics across continents",
      size: "large",
    },
  ];

  const filteredImages = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "tall":
        return "md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "small":
        return "";
      default:
        return "";
    }
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === "next"
      ? (currentImageIndex + 1) % filteredImages.length
      : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl shadow-2xl">
                <ImageIcon className="h-12 w-12" />
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our work through images - from residential moves to corporate
              relocations, international shipping to warehouse operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-600 font-medium whitespace-nowrap">
              <Filter className="h-5 w-5" />
              <span>Filter:</span>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Bento Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="text-lg text-gray-600">
              {filteredImages.length} {filteredImages.length === 1 ? "photo" : "photos"} in this collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${getSizeClasses(
                  item.size
                )}`}
                onClick={() => openLightbox(item, index)}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.src})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full mb-2">
                      {categories.find((c) => c.id === item.category)?.label}
                    </span>
                    <h3 className="text-white text-lg font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No photos found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all">
                <Share2 className="h-5 w-5 text-white" />
              </button>
              <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all">
                <Download className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-6xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="mt-6 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full mb-3">
                  {categories.find((c) => c.id === selectedImage.category)?.label}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience Our Service?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of satisfied customers who trust Stuttafords Zimbabwe
              for their relocation and logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
                Request a Quote
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;