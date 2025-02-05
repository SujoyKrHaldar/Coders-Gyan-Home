function CourseSection() {
  return (
    <section className="relative py-20 text-center">
      <div className=" absolute inset-0 -z-10 max-w-300 bg-[#00000037] backdrop-blur-xl p-45 mx-auto rounded-xl"></div>
      <div className="space-y-4">
        <p className="uppercase text-sm tracking-[0.8rem]">Latest Course</p>
        <h2 className="text-[2.5rem] font-bold relative">
          Learn in-demand skills &{" "}
          <span className="text-[#f7d260]">Get Hired!</span>
        </h2>
        <p className="text-[1.2rem]/[2rem] max-w-lg mx-auto text-zinc-400">
          Whether you want to excel in development or software engineering
          skills, there is a course for you.
        </p>
      </div>
    </section>
  );
}

export default CourseSection;
