import { Link } from "react-router-dom";
import { useProfile, useSingleBlog } from "../../../hooks";
import { formatDate } from "../../../utils";
import Comment from "./Comment";

export default function SingleBlogDetails() {
  const { state } = useSingleBlog();
  const { setAuthor } = useProfile();

  state?.blog?.tags?.split(", ");

  return (
    <main>
      {/* <!-- Begin Blogs --> */}
      <section>
        <div className="container text-center py-8">
          <h1 className="font-bold text-3xl md:text-5xl">
            {state?.blog?.title}
          </h1>
          <div className="flex justify-center items-center my-4 gap-4">
            <div className="flex items-center capitalize space-x-2">
              {/* Avatar */}
              {state?.blog?.author?.avatar ? (
                <img
                  className="w-10 rounded-full"
                  src={`${
                    import.meta.env.VITE_SERVER_BASE_URL
                  }/uploads/avatar/${state?.blog?.author?.avatar}`}
                  alt="avatar"
                />
              ) : (
                <div className="avater-img bg-indigo-600 text-white">
                  <span className="">
                    {state?.blog?.author?.firstName?.charAt(0)}
                  </span>
                </div>
              )}
              <h5 className="text-slate-500 text-sm">
                <Link
                  to="/author"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAuthor(state?.blog?.author?.id);
                  }}
                >
                  {`${state?.blog?.author?.firstName} ${state?.blog?.author?.lastName}`}{" "}
                </Link>
              </h5>
            </div>
            <span className="text-sm text-slate-700 dot">
              {formatDate(state?.blog?.createdAt)}
            </span>
            <span className="text-sm text-slate-700 dot">
              {state?.blog?.likes?.length ?? 0} Likes
            </span>
          </div>
          <img
            className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
            src={`http://localhost:3000/uploads/blog/${state?.blog?.thumbnail}`}
            alt={state?.blog?.title}
          />

          {/* <!-- Tags --> */}

          <ul className="tags">
            {state?.blog?.tags?.split(", ").map((tag) => (
              <li key={tag}> {tag.toUpperCase()}</li>
            ))}
          </ul>

          {/* <!-- Content --> */}
          <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
            {state?.blog?.content}
          </div>
        </div>
      </section>

      <Comment />
    </main>
  );
}
