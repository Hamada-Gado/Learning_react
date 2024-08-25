import { useRef, useState } from "react";
import Dashboard from "./components/Dashboard";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const newProject = useRef();

  function handleCreateProject() {
    newProject.current.open();
  }

  function handleDeleteProject() {
    setProjects((projects) => {
      const newProjects = [...projects];
      newProjects.splice(selectedProject, 1);
      return newProjects;
    });
    setSelectedProject(null);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <NewProject
        ref={newProject}
        setProjects={setProjects}
        setSelectedProject={setSelectedProject}
      />
      <ProjectsSidebar
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        handleCreateProject={handleCreateProject}
      />
      {selectedProject !== null ? (
        <Project
          project={projects[selectedProject]}
          tasks={tasks}
          setTasks={setTasks}
          handleDeleteProject={handleDeleteProject}
        />
      ) : (
        <Dashboard
          projects={projects}
          handleCreateProject={handleCreateProject}
        />
      )}
    </main>
  );
}

export default App;
