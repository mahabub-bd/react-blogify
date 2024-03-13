import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { useProfile, useSingleBlog } from "../../../hooks";
import { formatDate } from "../../../utils";
import Comment from "./Comment";

export default function SingleBlogDetails() {
  const { state } = useSingleBlog();
  const { setAuthor } = useProfile();

  if (!state || !state.blog || !state.blog.author) {
    return <div className="text-center">Loading Blog...</div>;
  }

  const { blog } = state;

  const avatarUrl = blog.author.avatar
    ? `${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
        blog.author.avatar
      }`
    : null;

  return (
    <main>
      <section>
        <div className="container text-center py-8">
          <h1 className="font-bold text-3xl md:text-5xl">{blog.title}</h1>
          <div className="flex justify-center items-center my-4 gap-4">
            {/* Render the avatar if available */}
            {avatarUrl ? (
              <img className="w-10 rounded-full" src={avatarUrl} alt="avatar" />
            ) : (
              <div className="avater-img bg-indigo-600 text-white">
                <span>{blog.author.firstName.charAt(0)}</span>
              </div>
            )}
            <h5 className="text-slate-500 text-sm">
              <Link
                to="/author"
                onClick={(e) => {
                  e.stopPropagation();
                  setAuthor(blog.author.id);
                }}
              >
                {`${blog.author.firstName} ${blog.author.lastName}`}
              </Link>
            </h5>
            <span className="text-sm text-slate-700 dot">
              {formatDate(blog.createdAt)}
            </span>
            <span className="text-sm text-slate-700 dot">
              {blog.likes?.length ?? 0} Likes
            </span>
          </div>
          <img
            className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
            src={`http://localhost:3000/uploads/blog/${blog.thumbnail}`}
            alt={blog.title}
          />
          <ul className="tags">
            {/* Split tags and render them */}
            {blog.tags.split(", ").map((tag) => (
              <li key={tag}>{tag.toUpperCase()}</li>
            ))}
          </ul>

          <div
            className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog?.content),
            }}
          ></div>
        </div>
      </section>
      <Comment />
    </main>
  );
}
