import { useNavigate } from "react-router-dom";
import { useSingleBlog } from "../../hooks";

const placeholderImageUrl = `https://via.placeholder.com/350x200/000000/FFFFFF`;

export default function Searchcard({ blog }) {
  const navigate = useNavigate();
  const { setBlogId } = useSingleBlog();
  const handleSingleBlogDetails = (blogId) => {
    navigate("/singleblog");
    setBlogId(blogId);
  };
  return (
    <div
      key={blog?.id}
      className="flex gap-6 py-2 cursor-pointer"
      onClick={() => handleSingleBlogDetails(blog?.id)}
    >
      {blog?.thumbnail ? (
        <img
          className="blog-thumb"
          src={`http://localhost:3000/uploads/blog/${blog?.thumbnail}`}
          alt="Blog_Template"
        />
      ) : (
        <img
          className="blog-thumb"
          src={placeholderImageUrl}
          alt="Blog_Template"
        />
      )}
      <div className="mt-2">
        <h3 className="text-slate-300 text-xl font-bold cursor-pointer">
          {blog?.title}
        </h3>
        {/* <!-- Meta Informations --> */}
        <p className="mb-6 text-sm text-slate-500 mt-1 line-clamp-4 ">
          {blog?.content}
        </p>
      </div>
    </div>
  );
}
