import { useAuth, useSingleBlog } from "../../../hooks";

export default function Comment() {
  const { auth } = useAuth();
  const { state } = useSingleBlog();

  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">
          Comments - {state?.blog?.comments?.length}
        </h2>

        {auth?.user && (
          <div className="flex items -center space-x-4">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>
            <div className="w-full">
              <textarea
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                  Comment
                </button>
              </div>
            </div>
          </div>
        )}

        {state?.blog?.comments?.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-4 my-8">
            <div className="avater-img bg-orange-600 text-white">
              <span className="">{comment?.author?.firstName?.charAt(0)}</span>
            </div>
            <div className="w-full">
              <h5 className="text-slate -500 font-bold">
                {comment?.author?.firstName} {comment?.author?.lastName}
              </h5>
              <p className="text-slate-300">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
