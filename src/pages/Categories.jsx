import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Stethoscope,
  Brain,
  BookOpen,
  MapPin,
} from "lucide-react";
import AppHeadline from "../components/AppHeadline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Home from "./Home";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const CATS = {
  "Shop Smart": { icon: ShoppingBag, image: "/images/shop_smart.jpg" },
  "Wellness Insights": {
    icon: Stethoscope,
    image: "/images/wellness_insights.jpg",
  },
  "Think Bits": { icon: Brain, image: "/images/think_bits.jpg" },
  "Tiny Tales": { icon: BookOpen, image: "/images/tiny_tales.jpg" },
  "City Sights": { icon: MapPin, image: "/images/city_sights.jpg" },
};

export default function Categories() {
  const categories = Object.keys(CATS);
  const swiper = useRef(null);

  const [search, setSearch] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(search.get("category") || null);
  const postIdParam = search.get("post") || null;

  useEffect(() => {
    console.log("selectedCategory", selectedCategory);
    console.log("swiper", swiper.current);
    if ((selectedCategory || postIdParam) && swiper.current) {
      swiper.current.swiper.slideTo(1);
    }
  }, [selectedCategory, postIdParam]);

  const Card = ({ category, onSelect }) => {
    const { icon: Icon, image } = CATS[category];

    return (
      // <Link
      //   to={`/feed?category=${encodeURIComponent(category)}`}
      //   className="group block"
      //   onClick={() => onSelect(category)}
      //   key={category}
      // >

      // </Link>
      <div
        className="relative rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:shadow-lg transition-all duration-300 h-20 md:h-28"
        onClick={() => onSelect(category)}
      >
        <div className="relative h-full">
          <img
            src={image}
            alt={category}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 text-white">
            <div className="flex items-center gap-3 mb-1">
              <div className="rounded-lg bg-white/20 backdrop-blur-sm p-1 md:p-2">
                <Icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
              </div>
            </div>
            <h3 className="font-semibold text-[10px] md:text-sm">{category}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Swiper className="h-full" ref={swiper} nested>
      <SwiperSlide className="w-full h-full">
        <section id="categories" className="max-w-screen-lg mx-auto px-2 pb-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <AppHeadline />
          </div>

          <div className="md:mt-3 grid grid-cols-3 md:grid-cols-5 gap-1.5">
            {categories.map((c) => (
              <Card key={c} category={c} onSelect={setSelectedCategory} />
            ))}
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <Home category={selectedCategory} postId={postIdParam} />
      </SwiperSlide>
    </Swiper>
  );
}
