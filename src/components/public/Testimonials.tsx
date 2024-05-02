import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import hiralShah from "../public/img/landing-page-people/hiral-shah.jpg";
import piyushPatel from "../public/img/landing-page-people/piyush-patel.png";
import darshilParikh from "../public/img/landing-page-people/darshil-parikh.png";
import khetal from "../public/img/landing-page-people/khetal.png";
import Image from "next/image";
interface TestimonialProps {
  image: any;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: piyushPatel,
    name: "Piyush Patel",
    userName: "Founder, Pintube.com",
    comment: "It's the ultimate space for transparency and collaboration in our continuous journey of growth.",
  },
  {
    image: hiralShah,
    name: "Hiral Shah",
    userName: "IOT Developer",
    comment:
      "Feathery is a good platform for expressing my achivements, get other's opinions thru comments, find people I can work with and solve my problems. I love the idea behind the paltform!",
  },

  {
    image: darshilParikh,
    name: "Darshil Parish",
    userName: "Web Designer",
    comment:
      "Platform much needed.",
  },
  {
    image: khetal,
    name: "Khetal Kankariya",
    userName: "Web Developer",
    comment:
      "A very good platform to share knowledge and information with others and publicize my thoughts and opinions too!",
  },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "John Doe React",
  //   userName: "@john_Doe3",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  // },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "John Doe React",
  //   userName: "@john_Doe4",
  //   comment:
  //     "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  // },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "John Doe React",
  //   userName: "@john_Doe5",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Feathery
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Explore Why Users Adore Feathery.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <Image
                   alt=""
                   src={image}>
                  </Image>
                 
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
