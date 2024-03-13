import ReactDOM from "react-dom";

import { BlogBoard } from "..";
import { ClosedIcon } from "../../constants/image";
import { usePortal } from "../../hooks";
import Searchcard from "./SearchCard";

export default function SearchModal({
  searchValue,
  onSearch,
  blogs,
  onModalClosed,
  loading,
  error,
}) {
  const portalContainer = usePortal();

  return (
    <>
      {portalContainer &&
        ReactDOM.createPortal(
          <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
            {/* <!-- Search Container --> */}
            <div className="relative w-8/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
              {/* <!-- Search --> */}
              <div>
                <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
                  Search for Your Desire Blogs
                </h3>
                <input
                  type="text"
                  placeholder="Start Typing to Search"
                  value={searchValue}
                  onChange={onSearch}
                  className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
                />
              </div>

              {/* <!-- Search Result --> */}
              <div className="">
                <h3 className="text-slate-400 font-bold mt-6">
                  Search Results
                </h3>

                {error && (
                  <h2 className="mt-2 text-center">
                    {" "}
                    {`No results found  with ${searchValue}`}{" "}
                  </h2>
                )}
                {loading && <h1>Loading Search Data</h1>}
                <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
                  {!error && (
                    <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
                      {blogs?.data?.map((blog) => (
                        <Searchcard key={blog.id} blog={blog} />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button onClick={onModalClosed}>
                <img
                  src={ClosedIcon}
                  alt="Close"
                  className="absolute right-2 top-2 cursor-pointer w-8 h-8"
                />
              </button>
            </div>
          </section>,
          portalContainer
        )}
      {/* <!-- This remains outside of the portal --> */}
      <BlogBoard />
    </>
  );
}
