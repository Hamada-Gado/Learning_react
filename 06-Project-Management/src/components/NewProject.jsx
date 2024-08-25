import { forwardRef, useRef, useState } from "react";
import Input from "./shared/Input";
import Modal from "./shared/Modal";
import Button from "./shared/Button";

export default forwardRef(function NewProject(
  { setProjects, setSelectedProject },
  modalRef,
) {
  const invalidInputRef = useRef();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function reset() {
    setInputs({
      title: "",
      description: "",
      dueDate: "",
    });
  }

  function save() {
    const { title, description, dueDate } = inputs;
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      invalidInputRef.current.open();
      return;
    }

    setProjects((projects) => [...projects, { ...inputs }]);
    setSelectedProject(null);
    modalRef.current.close();
  }

  return (
    <>
      <Modal
        ref={invalidInputRef}
        className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a value for every input field
        </p>
        <form method="dialog" className="mt-4 text-right">
          <Button>Okay</Button>
        </form>
      </Modal>
      <Modal
        ref={modalRef}
        className="w-[35rem] p-4 border-2 rounded-xl border-black"
        onClose={reset}
      >
        <div>
          <menu className="flex items-center justify-end gap-4 my-4">
            <li>
              <button
                className="text-stone-800 outline-none hover:text-stone-950"
                onClick={() => modalRef.current.close()}
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={save}
              >
                Save
              </button>
            </li>
          </menu>
          <Input
            value={inputs["title"]}
            name="title"
            label="Title"
            type="text"
            onChange={handleChange}
          />
          <Input
            value={inputs["description"]}
            name="description"
            label="Description"
            onChange={handleChange}
            isTextArea
          />
          <Input
            value={inputs["dueDate"]}
            name="dueDate"
            label="Due Date"
            type="date"
            onChange={handleChange}
          />
        </div>
      </Modal>
    </>
  );
});
