import { useProfile } from "../../hooks";

export default function FavouriteBlog() {
  const { state } = useProfile();

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        {state?.blogs.map((blog) => (
          <li key={blog.id}>
            <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog.title}
            </h3>

            {blog?.tags?.split(", ").map((tag) => (
              <span className="text-slate-600 text-sm" key={tag}>
                {" "}
                # {tag}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
