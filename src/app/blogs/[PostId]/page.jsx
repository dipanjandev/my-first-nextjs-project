import React from "react";

// TODO: Fatch Data
const blogsData = [
  {
    id: 1,
    title: "Mastering Meta Ads for High Conversions",
    author: "Admin",
    date: "2026-09-10",
    excerpt:
      "Learn the hidden strategies to optimize your Meta ad campaigns, target the right audience, and increase your ROI significantly.",
    imageUrl: "https://picsum.photos/seed/meta/400/250",
  },
  {
    id: 2,
    title: "Why Tailwind CSS is the Future of Web Design",
    author: "Admin",
    date: "2026-09-12",
    excerpt:
      "Moving from plain CSS to utility-first frameworks like Tailwind can speed up your layout workflow tenfold.",
    imageUrl: "https://picsum.photos/seed/css/400/250",
  },
  {
    id: 3,
    title: "Essential Tech & Gadgets for a Freelancer's Workspace",
    author: "Admin",
    date: "2026-09-13",
    excerpt:
      "From responsive mechanical keyboards to reliable IPS backup systems, here is what you need for an uninterrupted workflow.",
    imageUrl: "https://picsum.photos/seed/tech/400/250",
  },
  {
    id: 4,
    title: "Top Graphic Design Trends This Year",
    author: "Admin",
    date: "2026-09-14",
    excerpt:
      "Discover the visual styles, color palettes, and branding techniques that are capturing audience attention right now.",
    imageUrl: "https://picsum.photos/seed/design/400/250",
  },
  {
    id: 5,
    title: "How to Optimize Your Freelance Gig Descriptions",
    author: "Admin",
    date: "2026-09-15",
    excerpt:
      "Writing a highly optimized 1200-character description and using the right tags can help you beat the algorithm and land more clients.",
    imageUrl: "https://picsum.photos/seed/freelance/400/250",
  },
];

const page = async ({ params }) => {
  const { PostId } = await params;
  const post = blogsData.find(
    (singlePost) => singlePost.id === parseInt(PostId),
  );
  console.log(PostId, post);

  return (
    <div>
      <h1>This is Content Page...</h1>
      <h2 className="font-bold">This is Page Number : {PostId}</h2>
      {PostId && (
        <div className="text-center pt-5">
          <h2 className="font-bold text-2xl text-yellow-300">
            Title: {post.title}
          </h2>
          <p>by {post.author}</p>
          <p>{post.excerpt}</p>
        </div>
      )}
    </div>
  );
};

export default page;
