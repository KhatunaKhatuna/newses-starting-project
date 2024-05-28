import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function Imagepage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  // to see custom notFound page in dynamic page
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
