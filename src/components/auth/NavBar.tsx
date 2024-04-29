"use client";
import { CircleUser, LeafyGreen, LightbulbIcon, Menu, Package2, Search } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function NavBar() {
  const session = useSession();
  // console.log(session.status);
  
  return (
    <>
    

<nav className="bg-[#c8ccd2] shadow-xl dark:bg-[#181818] z-50 fixed w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a  className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse">
      <i className="fa-solid fa-feather-pointed dark:text-white text-lg"></i>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Feathery</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg max-md:bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 max-md:dark:bg-[#000]">
        <li>
          <a className="cursor-pointer block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page"  data-collapse-toggle="navbar-default">Home</a>
        </li>
        <li>
          <a  className="cursor-pointer block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page"  data-collapse-toggle="navbar-default">Editor</a>
        </li>
        <li>
          <a  className="cursor-pointer block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white"  data-collapse-toggle="navbar-default">Profile</a>
        </li>
        <li>
          <a className="cursor-pointer block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white"  data-collapse-toggle="navbar-default">Monetize</a>
        </li>
        <li >
          <div >
          <Link href={'/message'} className="flex cursor-pointer gap-2 py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white" >

          Message 
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z"/>
          </svg>
          </Link>
          </div>
        </li>
        <li>
          <a className="cursor-pointer block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white">
            Dark mode
          </a>  
        </li>
        <li >
          <a className="cursor-pointer block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white"  data-collapse-toggle="navbar-default">Logout</a>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
      {/* <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <LeafyGreen className="h-6 w-6" />
            <span className="sr-only">Logo</span>
          </Link>
          {session.status === "unauthenticated" && (
            <>
              <Link
                href="/"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/sign-in"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Register
              </Link>
            </>
          )}
          {session.status === "authenticated" && (
            <>
              <Link
                href="#"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Dashboard
              </Link>
            </>
          )}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <LeafyGreen className="h-6 w-6" />
                <span className="sr-only">Feathery</span>
              </Link>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              {session.status === "unauthenticated" && (
                <Link
                  href="sign-in"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Login
                </Link>
              )}
              {session.status === "unauthenticated" && (
                <Link
                  href="sign-up"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Create an Account
                </Link>
              )}
              {session.status === "authenticated" && (
                <>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Analytics
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                
                {session.status==='unauthenticated'&&(
                  <CircleUser className="h-5 w-5" />
                )}
                {session.status==='authenticated'&&(
                  <>
                  {session.data.user.image?.length==0?(
                    <Avatar>
                    <AvatarImage alt={session.data.user.username} />
                    <AvatarFallback>
                      {session.data.user.fullname!
                        .split(" ")
                        .map((chunk) => chunk[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  ):(
                    <>
                    <Avatar>
                      <AvatarImage alt={session.data.user.image!}></AvatarImage>
                    </Avatar>
                    </>
                  )}
                  </>
                )}
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {session.status === "unauthenticated" && (
                <>
                  <DropdownMenuItem><Link href={'/sign-in'}>Login</Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href={'/sign-up'}>Register</Link></DropdownMenuItem>
                </>
              )}
              {session.status === "authenticated" && (
                <>
                  <DropdownMenuItem><Link href={`/${session.data.user.username}`}>Profile</Link></DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <LightbulbIcon className="h-6 w-6"/>
        </div>
      </header> */}
    </>
  );
}
