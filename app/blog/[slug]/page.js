// import { personalData } from "@/utils/data/personal-data";

// // Fetch blog data by slug
// export async function getBlog(slug) {
//   const res = await fetch(
//     `https://dev.to/api/articles/${personalData.username}/${slug}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();
//   return data;
// }

// // Fetch all slugs to generate static paths
// async function fetchAllSlugs() {
//   const res = await fetch(
//     `https://dev.to/api/articles?username=${personalData.username}`
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();
//   return data.map((article) => article.slug);
// }

// // Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const slugs = await fetchAllSlugs();

//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// // Blog details component
// // Multiple versions of this page will be statically generated
// // using the `params` returned by `generateStaticParams`
// export default async function BlogDetails({ params }) {
//   const blog = await getBlog(params.slug);

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <p>{blog.description}</p>
//       <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
//     </div>
//   );
// }
