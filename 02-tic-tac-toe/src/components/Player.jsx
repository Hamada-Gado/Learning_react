import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        autoFocus={true}
        className="player-name"
        value={name}
        onChange={handleChange}
        required
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
