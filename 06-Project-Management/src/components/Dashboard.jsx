import noProjectImage from "/src/assets/no-projects.png";
import Button from "./shared/Button";

export default function Dashboard({ handleCreateProject }) {
  return (
    <>
      <div className="mt-24 text-center w-2/3">
        <img
          src={noProjectImage}
          alt="An emtpy task list"
          className="w-16 h-16 object-contain mx-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project from the sidebar to get started.
        </p>
        <p className="mt-8">
          <Button onClick={handleCreateProject}>Create new project</Button>
        </p>
      </div>
    </>
  );
}