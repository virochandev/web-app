import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function PostCard({ post }) {
  return (
    <article className="px-4 py-6 flex gap-3 flex-col">
      {post.images?.length > 1 ? (
        <div className="rounded-2xl overflow-hidden">
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            effect={"coverflow"}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            navigation={false}
            className="w-full"
            coverflowEffect={{
              rotate: 49,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            grabCursor={true}
            centeredSlides={true}
          >
            {post.images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt=""
                  className="w-full aspect-video object-cover"
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
            className="w-full aspect-video object-cover rounded-2xl"
          />
        )
      )}
      <div
        className="flex flex-col gap-2"
        style={{ fontFamily: post.font ?? 'inherit' }}
      >
        <h2 className="font-bold leading-snug text-lg">{post.title}</h2>
        <p className="text-neutral-600 leading-relaxed text-lg">
          {post.summary}
        </p>
        <div className="flex gap-3 items-center text-xs text-neutral-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.source && (
            <a className="underline" href={post.source} target="_blank">
              Source
            </a>
          )}
          <button
            onClick={async () => {
              const shareUrl = `${window.location.origin}?post=${post.id}`;
              if (navigator.share) {
                try {
                  await navigator.share({ title: post.title, url: shareUrl });
                } catch {}
              } else {
                await navigator.clipboard.writeText(shareUrl);
                alert("Link copied to clipboard");
              }
            }}
            className="ml-auto underline"
          >
            Share
          </button>
        </div>
      </div>
    </article>
  );
}
