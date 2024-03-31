import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth, useAxios } from "../../hooks";

export default function FavouriteBlog() {
  const [favoriteBlogs, setfavoriteBlogs] = useState([]);

  const navigate = useNavigate();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (auth?.authToken) {
        try {
          const response = await api.get(
            `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/favourites`
          );
          setfavoriteBlogs([...response.data.blogs]);
        } catch (error) {
          new Error(error);
        }
      }
    };
    fetchData();
  }, [api, auth?.authToken]);

  const handleSingleBlogDetails = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      {!auth?.authToken && (
        <p className="mt-5 text-center text-slate-400 font-medium hover:text-slate-300 transition-all">
          Need Login see Favourite Blog{" "}
        </p>
      )}
      <ul className="space-y-5 my-5">
        {favoriteBlogs?.map((blog) => (
          <li
            className="sidebar-card"
            key={blog.id}
            onClick={() => handleSingleBlogDetails(blog.id)}
          >
            <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog?.title}
            </h3>
            <p className="text-slate-600 text-sm">
              {blog.tags?.split(", ").map((tag) => (
                <span key={tag}> # {tag}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
