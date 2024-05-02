import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../public/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Share",
    description:
      "Document your learning journey, Share your progress, challenges, and insights with others.",
  },
  {
    icon: <MapIcon />,
    title: "Connect",
    description:
      "Connect with like-minded learners, Join groups, communities.",
  },
  {
    icon: <PlaneIcon />,
    title: "Personal Branding",
    description:
      "Define your unique value proposition, showcase your expertise, and build a strong online presence.",
  },
  {
    icon: <GiftIcon />,
    title: "Grow",
    description:
      "Cultivate a mindset of continuous growth and self-improvement.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Strengthen your online image with our personal branding platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
