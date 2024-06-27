// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(
    `https://dev.to/api/articles/${personalData.devUsername}/${slug}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

// Fetch all slugs to generate static paths
async function fetchAllSlugs() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.map((article) => article.slug);
}

// Generate static paths
export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return <div></div>;
}

export default BlogDetails;
