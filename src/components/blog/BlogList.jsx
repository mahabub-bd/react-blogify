import BlogCard from "./BlogCard";

export default function BlogList({ blogs, loading }) {
  if (loading) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <h2>Loading Blog</h2>
      </div>
    );
  }
  return (
    <div className="space-y-3 md:col-span-5">
      {/* <!-- Blog Card Start --> */}
      {!!blogs &&
        blogs.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} loading={loading} />
        ))}
    </div>
  );
}
