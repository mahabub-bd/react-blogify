import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function PopularBlog() {
  const [popularBlogs, setPopularBlog] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/popular`
        );

        if (response.status === 200) {
          setPopularBlog([...response.data.blogs]);
        }
      } catch (error) {
        new Error(error);
      }
    };

    fetchPopularBlogs();
  }, []);

  const handleSingleBlogDetails = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {popularBlogs.map((blog) => (
          <li
            className="sidebar-card"
            key={blog.id}
            onClick={() => handleSingleBlogDetails(blog.id)}
          >
            <h3 className="text-slate-300 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog?.title}
            </h3>
            <p className="text-slate-400 text-sm ">
              Write by
              <Link
                className="mx-1"
                to={`/author/${blog?.author?.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {`${blog?.author?.firstName} ${blog?.author?.lastName}`}{" "}
              </Link>
              <span className="mx-1">·</span> {blog?.likes?.length} Likes
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
