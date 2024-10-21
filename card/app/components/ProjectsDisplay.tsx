import {
    CursorTextIcon,
    ClockIcon,
    CheckboxIcon
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Counter from "./Counter";

  const features = [
    {
      Icon: CursorTextIcon,
      name: "Virtual Card",
      description: "Send an interactive virtual card to your family and friends.",
      href: "/",
      cta: "Go to app",
      background: (
        <div className="lg:w-[180%] w-[140%] max-w-none h-auto absolute lg:-left-40  -left-10 -top-0 opacity-80">
            <video autoPlay muted loop  >
                <source src="/virtualCardDemo.mp4" type="video/mp4" />
            </video>
        </div>
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: ClockIcon,
      name: "Pomodoro timer",
      description: "Use the pomodoro technique to be productive and focus on work.",
      href: "/",
      cta: "Go to app",
      background: (

        <div className=" absolute lg:left-60 lg:top-2 top-9 left-20 ">
          <Counter />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: CheckboxIcon,
      name: "To do list",
      description:
        "Keep track of your tasks and projects with a to-do list.",
      href: "/",
      cta: "Go to app",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export async function ProjectsDisplay() {
    return (
      <BentoGrid className="lg:grid-rows-3 lg:grid-cols-2 px-60">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  }
  