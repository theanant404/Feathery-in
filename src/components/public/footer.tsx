import { Leaf } from "lucide-react";
import Link from "next/link";


export default function Footer(){
  return (
    <footer id="footer" className="overflow-hidden">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link
            href="/"
            className="font-bold text-xl flex"
          >
            Feathery
         </Link>
        </div>

        <div className="flex flex-col gap-2">
          {" "}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <Link
              href="https://www.linkedin.com/company/feathery-in"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
           </Link>
          </div>

          <div>
            <Link
              href="https://www.instagram.com/feathery.in/"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
           </Link>
          </div>

          <div>
            <Link
              href="https://twitter.com/Feathery_in"
              target="_blank"
              className="opacity-60 hover:opacity-100"
              >
              Twitter
           </Link>
          </div>
        </div>


        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <Link
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Team
           </Link>
          </div>

          <div>
            <Link
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              How it works
           </Link>
          </div>

          <div>
            <Link
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
           </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <div>
            <Link
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
           </Link>
          </div>

          <div>
            <Link
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Cookie Policy
           </Link>
          </div>

          <div>
            <Link
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Terms
           </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy;2024 Feathery.in, all rights reserved.
          <Link
            target="_blank"
            href="https://github.com/the-anant"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
         </Link>
        </h3>
      </section>
    </footer>
  );
};
