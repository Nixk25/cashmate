import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
type UserNavTypes = {
  email: string;
  name: string;
  surname: string;
  userImage: string | undefined;
};
const UserNav = ({ email, name, surname, userImage }: UserNavTypes) => {
  const fullName = ` ${name}  ${surname}`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={userImage} />
          <AvatarFallback className="text-black bg-white ">
            {fullName
              .split(" ")
              .map((word: string) => word[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-5 ">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium leading-none">{fullName}</span>
            <span className="text-xs leading-none text-muted-foreground">
              {email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile" className="cursor-pointer">
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>

        <LogoutLink>
          <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
