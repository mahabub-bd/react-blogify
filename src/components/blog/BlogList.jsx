import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <div className="space-y-3 md:col-span-5">
      {/* <!-- Blog Card Start --> */}
      {!!blogs && blogs.map((blog) => <BlogCard key={blog?.id} blog={blog} />)}
    </div>
  );
}
