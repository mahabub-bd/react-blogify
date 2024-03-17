import BlogCard from "../blog/BlogCard";

export default function MyBlog({ blogs }) {
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
      <div className="space-y-3 md:col-span-5 mt-3">
        {!!blogs &&
          blogs?.map((blog) => <BlogCard key={blog?.id} blog={blog} />)}
      </div>
    </>
  );
}
