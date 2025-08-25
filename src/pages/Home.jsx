import { useMemo, useEffect, useRef } from "react";
import "swiper/css";
import data from "../data/news.json";
import MobileCategorySwiper from "../components/MobileCategorySwiper";


export default function Home({ category, postId }) {
  const appliedCategory = category || "All";

  const posts = useMemo(
    () => (appliedCategory === "All" ? data : data.filter((p) => p.category === appliedCategory)),
    [appliedCategory]
  );

  const postRefs = useRef({});

  useEffect(() => {
    if (postId && postRefs.current[postId]) {
      postRefs.current[postId].scrollIntoView({ behavior: "smooth", block: "center" });
      postRefs.current[postId].classList.add("ring-2", "ring-blue-400");
      setTimeout(() => {
        postRefs.current[postId]?.classList.remove("ring-2", "ring-blue-400");
      }, 2000);
    }
  }, [postId, posts]);


  return (
    <div className="h-screen flex flex-col bg-white text-neutral-900">
      <main
        id="feed"
        className="grow max-w-screen-lg mx-auto w-full overflow-hidden"
      >
        <div className="h-full">
          <MobileCategorySwiper
            initialPostId={postId}
            posts={posts}
          />
        </div>
      </main>
    </div>
  );
}
