import Posts from "./components/posts";

const Page = ({ searchParams: { page } }) => {
  return (
    <div className="mt-[70px] mx-auto md:max-w-6xl  ">
      <Posts page={page} />
    </div>
  );
};
export default Page;
