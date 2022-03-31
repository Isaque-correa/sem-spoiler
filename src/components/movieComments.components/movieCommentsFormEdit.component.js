import { useState } from "react";

function MovieCommentsFormEdit(props) {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form
        className="movieCommentsForm container"
        onSubmit={(e) => {
          e.preventDefault();
          props.updateUser(user.id, user)
        }}
      >
        <div className="movieCommentsForm-cover">
          <input
            className="form-control movieCommentsForm-name"
            type="text"
            name="nome"
            value={user.nome}
            onChange={handleInputChange}
            required
          />
          <textarea
          className="form-control movieCommentsForm-description" 
            type="text"
            name="description"
            value={user.description}
            onChange={handleInputChange}
            required
          />
          <div className="movieCommentsForm-buttons">
          <button className="btn btn-primary movieCommentsForm-enviar">Atualizar</button>
          <button className="btn btn-primary movieCommentsForm-cancel" onClick={()=> props.setEditing(false)}>Cancelar</button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default MovieCommentsFormEdit;
