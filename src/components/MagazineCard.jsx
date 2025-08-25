import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

export default function PostCard({ post }) {
  return (
    <article className="max-h-full flex gap-3 flex-col">
      {post.images?.length > 1 ? (
        <div className="max-h-full">
          <Swiper
            modules={[Pagination, EffectCube]}
            effect={"cube"}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            navigation={false}
            className="w-full"
            cubeEffect={{
              shadowOffset: 15,
              shadowScale: 0.8
            }}
            grabCursor={true}
            centeredSlides={true}
          >
            {post.images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt=""
                  className="h-svh object-fill md:object-contain w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        post.images && (
          <img
            src={post.images[0]}
            alt=""
            className="h-svh object-fill md:object-contain w-full"
          />
        )
      )}
    </article>
  );
}
