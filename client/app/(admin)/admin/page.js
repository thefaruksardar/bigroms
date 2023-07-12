import Posts from "../components/posts";
import Sidebar from "../components/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Notadmin from "../components/notadmin";

const Page = async () => {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/signin");
  // }
  return (
    <div className="">
      {session?.user?.email === "theppssppgames@gmail.com" ? (
        <Sidebar>
          <Posts />
        </Sidebar>
      ) : (
        <div>
          <Notadmin />
        </div>
      )}
    </div>
  );
};
export default Page;
