import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../../actions";
import {
  useAuth,
  useAxios,
  useBlog,
  useProfile,
  useSingleBlog,
} from "../../hooks";
import { formatDate } from "../../utils";
import BlogAction from "./BlogAction";
const placeholderImageUrl = `https://via.placeholder.com/350x200/000000/FFFFFF`;

const BlogCard = ({ blog }) => {
  const { auth } = useAuth();
  const { setAuthor } = useProfile();
  const navigate = useNavigate();
  const { setBlogId } = useSingleBlog();
  const { dispatch, state } = useBlog();
  const { api } = useAxios();
  console.log(blog?.thumbnail, state);
  const handleSingleBlogDetails = (blogId) => {
    navigate("/singleblog");
    setBlogId(blogId);
  };

  const handleEditBlog = async (blogId, data) => {
    navigate("/editblog", { state: data });
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blogId}`
      );

      dispatch({
        type: actions.blog.DELETE_SUCCESS,
        blogId: blogId,
      });
      toast.success("Blog Deleted Sucessfull");
    } catch (error) {
      console.error("Error deleting blog:", error);

      dispatch({
        type: actions.blog.DELETE_FAILURE,
        error: error.message,
      });
    }
  };

  const editPermision = blog?.author?.id === auth?.user?.id;

  return (
    <div
      className="blog-card cursor-pointer"
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

      <div className="mt-2 relative">
        <h3 className="text-slate-300 text-xl lg:text-2xl">
          <p>{blog?.title}</p>
        </h3>

        <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            {blog?.author?.avatar ? (
              <img
                className="w-10 rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
                  blog?.author?.avatar
                }`}
                alt="avatar"
              />
            ) : (
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">{blog?.author?.firstName?.charAt(0)}</span>
              </div>
            )}

            <div>
              <h5 className="text-slate-500 text-sm">
                <Link
                  to="/author"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAuthor(blog?.author?.id);
                  }}
                >
                  {`${blog?.author?.firstName} ${blog?.author?.lastName}`}{" "}
                </Link>
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

        {editPermision && (
          <BlogAction
            onDelete={handleDeleteBlog}
            onedit={handleEditBlog}
            blog={blog}
          />
        )}
      </div>
    </div>
  );
};

export default BlogCard;
