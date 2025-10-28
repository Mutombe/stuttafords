import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Filter,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Mail,
  Phone,
  Tag,
  ExternalLink,
} from "lucide-react";

// ImageCarousel Component for displaying multiple images
const ImageCarousel = ({ images, eventTitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex, isAutoPlaying, images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full group">
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
      </AnimatePresence>

      {/* Navigation Arrows (only show if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium z-10">
            {currentImageIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

// EventDetailModal Component for viewing full event details
const EventDetailModal = ({ event, isOpen, onClose, categories }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!event) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + event.images.length) % event.images.length
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{event.title}</h2>
                  <p className="text-white/90 text-sm">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-6xl mx-auto p-6 lg:p-8">
                {/* Image Gallery Section */}
                <div className="mb-8">
                  <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={event.images[currentImageIndex]}
                        alt={`${event.title} - Image ${currentImageIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {event.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium z-10">
                          {currentImageIndex + 1} / {event.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {event.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {event.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-orange-500 scale-105"
                              : "border-transparent hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Event Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Main Details */}
                  <div>
                    <div className="mb-6">
                      <span
                        className={`inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full mb-4`}
                      >
                        {categories.find((c) => c.id === event.category)?.label}
                      </span>

                      {event.status === "past" && (
                        <span className="ml-2 inline-block px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-full">
                          Past Event
                        </span>
                      )}

                      {event.featured && (
                        <span className="ml-2 inline-block px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      About This Event
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                        Topics
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Event Info */}
                  <div>
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">
                        Event Information
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-orange-100 rounded-lg">
                            <Calendar className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                              Date
                            </div>
                            <div className="text-gray-900 font-medium">
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <Clock className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                              Time
                            </div>
                            <div className="text-gray-900 font-medium">
                              {event.time}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-green-100 rounded-lg">
                            <MapPin className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                              Location
                            </div>
                            <div className="text-gray-900 font-medium">
                              {event.location}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-purple-100 rounded-lg">
                            <Users className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                              Attendees
                            </div>
                            <div className="text-gray-900 font-medium">
                              {event.attendees}+ Expected
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {event.status === "upcoming" && (
                        <div className="mt-6 space-y-3">
                          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
                            Register Now
                          </button>
                          <button className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 transition-all">
                            Add to Calendar
                          </button>
                        </div>
                      )}

                      {event.status === "past" && (
                        <div className="mt-6">
                          <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                            View Event Summary
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Info Section */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Need More Information?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Contact our events team for more details about this event.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:events@stuttafords.co.zw"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                    >
                      <Mail className="h-5 w-5" />
                      events@stuttafords.co.zw
                    </a>
                    <a
                      href="tel:+263772937275"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                    >
                      <Phone className="h-5 w-5" />
                      +263 772 937 275
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    { id: "all", label: "All Events", color: "from-gray-500 to-gray-600" },
    {
      id: "corporate",
      label: "Corporate",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "community",
      label: "Community",
      color: "from-green-500 to-teal-500",
    },
    { id: "training", label: "Training", color: "from-blue-500 to-cyan-500" },
    {
      id: "expo",
      label: "Expo & Trade Shows",
      color: "from-orange-500 to-red-500",
    },
  ];

  const events = [
    {
      id: 1,
      title:
        "Stuttafords Zimbabwe Sponsors the DSA Diplomatic Charity Bazaar 2025 as a Bronze Partner",
      date: "2025-10-25",
      time: "08:00 AM - 02:00 PM",
      location: "Various Locations, Harare",
      category: "community",
      attendees: 300,
      status: "past",
      description:
        "Stuttafords Zimbabwe (Pvt) Ltd proudly participated as a Bronze Partner Sponsor at the Diplomatic Spouses Association (DSA) Diplomatic Charity Bazaar 2025, held on 25th October 2025 at Old Georgians Sports Club, Mount Pleasant, in Harare.The annual DSA Diplomatic Charity Bazaar is a signature event that unites the diplomatic community, local businesses, and the public in supporting charitable causes across Zimbabwe. The 2025 edition showcased a vibrant mix of international cuisine, cultural exhibitions, art, and music — all in the spirit of global unity and giving back. As part of its strong commitment to corporate social responsibility (CSR), Stuttafords Zimbabwe was honored to contribute to this meaningful initiative. Our participation as a Bronze Partner reflects our ongoing dedication to community development, education, and social empowerment. `At Stuttafords, we believe that business success goes hand in hand with giving back to the community. Supporting the DSA Diplomatic Charity Bazaar allows us to play a small part in empowering local charities and fostering cross-cultural collaboration,` said a Stuttafords spokesperson. The event’s proceeds will go toward supporting several charities focused on education, health, women, and youth empowerment programs across Zimbabwe. Stuttafords Zimbabwe extends sincere appreciation to the Diplomatic Spouses Association, fellow sponsors, and everyone who participated in making the 2025 Bazaar a remarkable success. Together, we continue to build bridges of goodwill and create a positive impact in our communities.",
      images: [
        "/event1.jpeg",
        "/event11.jpeg",
        "/event111.jpeg",
        "/event1111.jpeg",
      ],
      tags: [
        "StuttafordsZimbabwe, DSABazaar2025, DiplomaticCharityBazaar, CorporateSocialResponsibility, CommunityImpact, GivingBack, HarareEvents, ZimbabweBusiness, BronzePartner, SocialEmpowerment, WomenAndYouth, CulturalExchange, CharitySupport",
      ],
      featured: false,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter((e) => e.status === "upcoming");
  const pastEvents = filteredEvents.filter((e) => e.status === "past");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
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
                <Calendar className="h-12 w-12" />
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Join us at our upcoming events, workshops, and community
              initiatives. Stay connected with Stuttafords Zimbabwe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
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

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Mark your calendar for these exciting events
            </p>
          </motion.div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group cursor-pointer ${
                    event.featured ? "lg:col-span-2" : ""
                  }`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div
                      className={`relative ${event.featured ? "lg:flex" : ""}`}
                    >
                      {/* Event Image Carousel */}
                      <div
                        className={`relative overflow-hidden ${
                          event.featured ? "lg:w-1/2 h-96" : "h-56"
                        }`}
                      >
                        <ImageCarousel
                          images={event.images}
                          eventTitle={event.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                        {event.featured && (
                          <div className="absolute top-4 left-4 z-20">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                              Featured Event
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-4 left-4 text-white z-20 pointer-events-none">
                          <div className="text-3xl font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-sm">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div
                        className={`p-6 ${event.featured ? "lg:w-1/2" : ""}`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full">
                            {
                              categories.find((c) => c.id === event.category)
                                ?.label
                            }
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Users className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">
                              {event.attendees}+ Expected Attendees
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                          Register Now
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No upcoming events found</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Past Events
              </h2>
              <p className="text-lg text-gray-600">
                Take a look at our recent successful events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all duration-500">
                      <ImageCarousel
                        images={event.images}
                        eventTitle={event.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-gray-800/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Past Event
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {event.description}
                      </p>
                      <div className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors flex items-center gap-2">
                        View Details
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter to receive updates about upcoming
              events and exclusive invitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <EventDetailModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        categories={categories}
      />
    </div>
  );
};

export default EventsPage;
