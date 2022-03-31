import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import MovieCommentsFormAdd from "./movieCommentsFormAdd.component";
import MovieCommentsFormEdit from "./movieCommentsFormEdit.component";

function MovieComments() {
  const usersData = [
    { id: 1, nome: "isaque correa", description: "puta filme bom" },
    { id: 2, nome: "maria", description: "puta filme merda" },
    { id: 3, nome: "josé", description: "puta filme mais ou menos" },
  ];
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, nome: "", description: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      nome: user.nome,
      description: user.description,
    });
  };
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <Container>
        <div className="movieComments">
          <h4 className="movieComments-title">Comentários</h4>
          <div className="movieComments-cover">
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user.id} className="movieCommets-flex">
                  <div className="movieComments-update">
                    <a
                      className="movieComments-delete"
                      onClick={() => deleteUser(user.id)}
                    >
                      Deletar
                    </a>
                    <a
                      className="movieComments-edit"
                      onClick={() => {
                        editRow(user);
                      }}
                    >
                      Editar
                    </a>
                  </div>
                  <div className="movieComments-info">
                    <p className="movieComments-nome">{user.nome}</p>
                    <div className="movieComments-bottom"></div>
                    <p className="movieComments-description">
                      {user.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p colSpan={3}>sem comentários</p>
              </div>
            )}
          </div>
          <div>
            {editing ? (
              <div>
                <h5 className="movieCommentsForm-edit">
                  Editar seu comentário
                </h5>
                <MovieCommentsFormEdit
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <MovieCommentsFormAdd addUser={addUser} />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
export default MovieComments;
