import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagepage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  // to see custom notFound page in dynamic page
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
