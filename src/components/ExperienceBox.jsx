export const ExperienceBox = ({
  start_d,
  end_d,
  job_title,
  job_description,
}) => {
  return (
    <div className="font-light ml-8 mt-12">
      <h1 className="text-lg font-bold my-1"> {job_title}</h1>
      {start_d ? <h2 className="text-md">{start_d + " - " + end_d}</h2> : ""}
      <p className="my-2 text-bas"> {job_description}</p>
    </div>
  );
};
