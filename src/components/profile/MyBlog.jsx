import BlogCard from "../blog/BlogCard";

export default function MyBlog({ blogs, title }) {
  return (
    <>
      <h4 className="my-6 text-xl lg:mt-8 lg:text-2xl">{title}</h4>
      <div className="space-y-3 md:col-span-5 mt-3">
        {!!blogs &&
          blogs?.map((blog) => <BlogCard key={blog?.id} blog={blog} />)}
      </div>
    </>
  );
}
