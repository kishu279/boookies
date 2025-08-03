import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";

const navBarLinks = [
  // { name: "resources", href: "#", className: "", variant: "secondary" },
  { name: "turoial", href: "#", className: "", variant: "ghost" },
  // { name: "Pricing", href: "#", className: "", variant: "ghost" },
  { name: "Login", href: "#", className: "", variant: "ghost" },
  { name: "Dashboard", href: "#", className: "", variant: "outline" },
];

export default function NavBar() {
  // check for the authentication according to it show the content or not

  return (
    <nav className="relative z-10 w-full">
      <div className="fixed top-0 left-0 w-full h-[80px] flex">
        <div className="flex items-center justify-around w-full ">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* List of the buttons */}
          <div className="flex gap-1 items-center justify-center">
            {/* Buttons */}

            {navBarLinks.map((item) => (
              <Link key={`${item.name}-${item.name}`} href={item.href}>
                <Button className="capitalize" variant={`${item.variant}`}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
