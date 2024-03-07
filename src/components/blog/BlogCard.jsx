import { ReactRoadMap } from "../../constans/image";
import { formatDate } from "../../utils";
import BlogAction from "./BlogAction";

const BlogCard = ({ blog }) => {
  console.log(blog.thumbnail);

  return (
    <div className="blog-card">
      <img className="blog-thumb" src={ReactRoadMap} alt="Blog_Template" />
      <div className="mt-2 relative">
        <a href="./single-blog.html">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            <a href="./single-blog.html">{blog?.title}</a>
          </h3>
        </a>
        <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">{blog?.author?.firstName.charAt(0)}</span>
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
