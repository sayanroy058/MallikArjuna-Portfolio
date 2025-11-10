import { Card, CardContent } from "@/components/ui/card";

const amenityImages = [
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.41 PM (1).jpeg", alt: "Room amenity 1" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.41 PM.jpeg", alt: "Room amenity 2" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.42 PM (1).jpeg", alt: "Room amenity 3" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.42 PM (2).jpeg", alt: "Room amenity 4" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.42 PM.jpeg", alt: "Room amenity 5" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.43 PM (1).jpeg", alt: "Room amenity 6" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.43 PM.jpeg", alt: "Room amenity 7" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.44 PM (1).jpeg", alt: "Room amenity 8" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.44 PM.jpeg", alt: "Room amenity 9" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.45 PM (1).jpeg", alt: "Room amenity 10" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.45 PM.jpeg", alt: "Room amenity 11" },
  { src: "/Room amenities/WhatsApp Image 2025-11-10 at 1.14.46 PM.jpeg", alt: "Room amenity 12" },
];

const RoomAmenities = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background" id="room-amenities">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          Room Amenities
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Luxury guest room presentations and amenity designs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {amenityImages.map((image, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-glow transition-smooth overflow-hidden border-none"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomAmenities;
