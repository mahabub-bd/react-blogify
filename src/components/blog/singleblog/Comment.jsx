import { useState } from "react";
import { Link } from "react-router-dom";
import { actions } from "../../../actions";
import { DeleteIcon } from "../../../constants/image";
import { useAuth, useAxios, useSingleBlog } from "../../../hooks";
import { commentColor } from "../../../utils";

export default function Comment() {
  const [comments, setComments] = useState("");
  const { auth } = useAuth();
  const { state, dispatch } = useSingleBlog();
  const { api } = useAxios();

  const handleCommnetAdd = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${
          state?.blog?.id
        }/comment`,
        { content: comments }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.singleblog.NEW_COMMENT_ADD,
          data: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.singleblog.NEW_COMMENT_ADD_ERROR,
        error: error.message,
      });
    } finally {
      setComments("");
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${
          state?.blog?.id
        }/comment/${commentId}`
      );

      dispatch({
        type: actions.singleblog.COMMENT_DELETE,
        commentId: commentId,
      });
    } catch (error) {
      dispatch({
        type: actions.singleblog.COMMENT_DELETE_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <section id="comment">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-2xl font-bold my-8">
          Comments{" "}
          <span className="inline-flex items-center justify-center w-5 py-1  text-xs font-semibold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-violet-600 rounded-full">
            {state?.blog?.comments?.length}
          </span>
        </h2>

        {auth?.user && (
          <div className="flex items -center space-x-4">
            <div className=" text-white">
              {auth?.user && auth.user.avatar ? (
                <img
                  className="w-10 rounded-full"
                  src={`${
                    import.meta.env.VITE_SERVER_BASE_URL
                  }/uploads/avatar/${auth.user.avatar}`}
                  alt="avatar"
                />
              ) : (
                auth.user && (
                  <div className="avater-img bg-orange-600 text-white">
                    <span className="">{`${auth.user.firstName.charAt(
                      0
                    )}`}</span>
                    {/* <!-- User's first name initial --> */}
                  </div>
                )
              )}
            </div>
            <form className="w-full" onSubmit={handleCommnetAdd}>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        )}

        {state?.blog?.comments?.map((comment, index) => {
          const commentBg = commentColor(index); // Define commentBg here
          return (
            <div key={comment.id} className="flex items-start space-x-4 my-8">
              <div>
                {comment?.author.avatar ? (
                  <img
                    className="w-10 rounded-full"
                    src={`${
                      import.meta.env.VITE_SERVER_BASE_URL
                    }/uploads/avatar/${comment?.author.avatar}`}
                    alt="avatar"
                  />
                ) : (
                  <div
                    className={`${commentBg} avater-img bg-orange-600 text-white`}
                  >
                    <span className="">{`${comment?.author.firstName.charAt(
                      0
                    )}`}</span>
                    {/* <!-- User's first name initial --> */}
                  </div>
                )}
              </div>
              <div className="w-full">
                <Link
                  to={`/author/${comment?.author?.id}`}
                  onClick={() => {}}
                  className="text-slate-500 font-bold"
                >
                  {comment?.author?.firstName} {comment?.author?.lastName}
                </Link>
                <div className="flex items-center w-50">
                  <p className="text-slate-300 w-3/4">{comment.content}</p>

                  {comment?.author?.id === auth?.user?.id && (
                    <button
                      onClick={() => handleCommentDelete(comment.id)}
                      className="ml-10 hover:opacity-70 w-1/4"
                    >
                      <img src={DeleteIcon} alt="delete" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
