import { useLocation } from "react-router-dom";
import BlogEdit from "../components/blog/BlogEdit";

export default function EditBlog() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return <BlogEdit blog={data} />;
}
