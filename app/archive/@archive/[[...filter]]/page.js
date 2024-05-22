// import NewsList from "@/components/NewsList";
import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

// import { getNewsForYear } from "@/lib/news";

export default function FilterdNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);
  const links = getAvailableNewsYears();
  // const news = getNewsForYear(newsYear);

  // return <NewsList news={news} />;
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
