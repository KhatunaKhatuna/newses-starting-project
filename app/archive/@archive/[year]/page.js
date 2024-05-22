import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";

export default function FilterdNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
