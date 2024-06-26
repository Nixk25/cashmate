import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AnimatedNavbar from "./AnimatedNavbar";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return <AnimatedNavbar user={user} />;
};

export default Navbar;
