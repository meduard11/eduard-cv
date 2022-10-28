export const ExperienceBox = ({
  start_d,
  end_d,
  job_title,
  job_description,
  title_color
}) => {
  return (
    <div className="font-light lg:ml-8 sm:mx-auto mt-12 justify-center">
      <h1 className={"text-lg font-bold " + title_color}> {job_title}</h1>
      {start_d ? <h2 className="text-md mt-2">{start_d + " - " + end_d}</h2> : ""}
      <p className="mt-4 text-bas"> {job_description}</p>
    </div>
  );
};
