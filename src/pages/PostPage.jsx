import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import data from "../data/news.json";
import AppHeadline from "../components/AppHeadline";

export default function PostPage() {
  const { id } = useParams();
  const post = useMemo(() => data.find((p) => p.id === id), [id]);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <AppHeadline />
          <p className="mt-4 text-neutral-600">Post not found</p>
          <Link
            to="/feed"
            className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to feed
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/feed?post=${id}`;

  const copy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-screen-lg mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/feed"
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <AppHeadline />
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-lg mx-auto px-4 py-6">
        <article className="bg-white rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <p className="text-neutral-700 leading-relaxed">{post.content}</p>
        </article>
      </div>
    </div>
  );
}
