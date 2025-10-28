import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  

  return (
    <div id="about" className="w-screen py-4">
      <div className="relative mb-2 mt-4 flex flex-col items-center gap-3">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Eventrix
        </p>

        <AnimatedTitle
          title="A smart way to plan and manage your events"
          containerClass="!text-black text-center"
        />

        
      </div>

      
    </div>
  );
};

export default About;
