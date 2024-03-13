import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { actions } from "../../actions";
import { useAxios, useBlog, useSingleBlog } from "../../hooks";
import Field from "../common/Field";

export default function BlogEntry() {
  const { dispatch, state } = useBlog();
  const { api } = useAxios();
  const fileUploaderRef = useRef();
  const navigate = useNavigate();
  const { setBlogId } = useSingleBlog;

  const lastID = state?.blogs[state?.blogs.length - 1]?.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploaderRef.current.click();
  };
  const handleBlogSubmit = async (data) => {
    dispatch({ type: actions.blog.DATA_FETCHING });

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("tags", data.tags);
      formData.append("content", data.content);
      formData.append("thumbnail", fileUploaderRef.current.files[0]);

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs`,
        formData
      );
      if (response.status === 201) {
        dispatch({ type: actions.blog.DATA_CREATED, data: response.data });
        setBlogId(lastID);
        navigate("/singleblog");
      }
    } catch (error) {
      dispatch({
        type: actions.blog.DATA_CREATED_FAILURE,
        error: error.message,
      });
      setError("root.random", {
        type: "random",
        message: `Something went wrong`,
      });
    }
  };

  return (
    <>
      <main>
        <section>
          <div className="container">
            <form
              onSubmit={handleSubmit(handleBlogSubmit)}
              className="createBlog"
            >
              <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
                <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
                  <button onClick={handleImageUpload} className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span className="ml-3">Upload Your Image</span>
                  </button>

                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    className="hidden"
                    onChange={handleBlogSubmit}
                    ref={fileUploaderRef}
                  />
                </div>
              </div>

              <Field label="" error={errors.title}>
                <input
                  {...register("title", { required: "Need Blog Title" })}
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                />
              </Field>

              <Field label="" error={errors.tags}>
                <input
                  {...register("tags", { required: "Need  Tags" })}
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                />
              </Field>

              <Field label="" error={errors.content}>
                <textarea
                  {...register("content", { required: "Add Blog Content" })}
                  id="content"
                  name="content"
                  placeholder="Write your blog content"
                  rows="8"
                ></textarea>
              </Field>
              <button type="submit">
                <a className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                  Create Blog
                </a>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
