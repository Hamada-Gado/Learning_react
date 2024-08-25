export default function Task({ liKey, task, handleDeleteTask }) {
  return (
    <li key={liKey} className="flex justify-between my-4">
      <span>{task}</span>
      <button className="text-stone-700 hover:text-red-500" onClick={handleDeleteTask}>Clear</button>
    </li>
  );
}
