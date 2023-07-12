import axios from "axios";
import Updatepost from "../../components/updatepost";
const fetchPost = async (url) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_POST}/permalink/${url}`
  );
  const data = await res.data;
  return data;
};

const Page = async ({ params }) => {
  const posts = await fetchPost(params.url);
  const post = posts[0];
  return (
    <div>
      <Updatepost post={post} />
    </div>
  );
};
export default Page;
