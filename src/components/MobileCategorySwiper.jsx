import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import PostCard from "./PostCard.jsx";
import MagazineCard from "./MagazineCard.jsx";
import { useState } from "react";

export default function MobileCategorySwiper({
  initialPostId = null,
  posts = [],
}) {
  const [index, setIndex] = useState(
    Math.max(
      0,
      posts.findIndex((p) => p.id === initialPostId)
    )
  );

  return (
    <SwiperSlide className="h-full">
      <Swiper
        direction="vertical"
        mousewheel
        modules={[Mousewheel]}
        className="h-full"
        initialSlide={index}
      >
        {posts.map((p) => (
          <SwiperSlide
            key={p.id}
            className="flex items-center max-w-xl mx-auto"
          >
            {p.type == "magazine" ? <MagazineCard post={p} /> : <PostCard post={p} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperSlide>
  );
}
