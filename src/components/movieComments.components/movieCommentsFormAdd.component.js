import { useState } from "react";

function MovieCommentsFormAdd(props) {
  const initialFormState = { id: null, name: "", description: "" };
  const [user, setUser] = useState(initialFormState);

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
          if (!user.name || user.description) return props.addUser(user);
          setUser(initialFormState);
          
        }}
      >
        <div className="movieCommentsForm-cover">
          <input className="form-control movieCommentsForm-name"
            type="text"
            placeholder="Digite seu nome"
            name="nome"
            value={user.nome}
            onChange={handleInputChange}
            required
          />
          <textarea className="form-control movieCommentsForm-description"            
            type="text"
            placeholder="Digite um comentário"
            name="description"
            value={user.description}
            onChange={handleInputChange}
            required
          />
          <button className="btn btn-primary movieCommentsForm-enviar">Enviar</button>
          
        </div>
      </form>
    </div>
  );
}

export default MovieCommentsFormAdd;
