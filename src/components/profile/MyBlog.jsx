import BlogCard from "../blog/BlogCard";

export default function MyBlog({ blogs }) {
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
      <div className="my-6 space-y-4">
        {/* <!-- Blog Card Start --> */}

        {!!blogs && blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </>
  );
}
