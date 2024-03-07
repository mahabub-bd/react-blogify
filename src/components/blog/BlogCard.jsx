import { Link, useNavigate } from "react-router-dom";
import { useSingleBlog } from "../../hooks";
import { formatDate } from "../../utils";
import BlogAction from "./BlogAction";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { setBlogId } = useSingleBlog();

  const handleSingleBlogDetails = (blogId) => {
    navigate("/singleblog");
    setBlogId(blogId);
  };
  return (
    <div className="blog-card" onClick={() => handleSingleBlogDetails(blog.id)}>
      <img
        className="blog-thumb"
        src={`http://localhost:3000/uploads/blog/${blog?.thumbnail}`}
        alt="Blog_Template"
      />

      {/* uploads/blog/thumbnail-1708703405446-607606083.jpeg */}
      <div className="mt-2 relative">
        <Link href="./single-blog.html">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            <a href="./single-blog.html">{blog?.title}</a>
          </h3>
        </Link>
        <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">{blog?.author?.firstName?.charAt(0)}</span>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">
                <a href="./profile.html">{}</a>
              </h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>{formatDate(blog?.createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="text-sm px-2 py-1 text-slate-700">
            <span>{blog?.likes?.length ?? 0} Likes</span>
          </div>
        </div>

        <BlogAction />
      </div>
    </div>
  );
};

export default BlogCard;
