import React, { Fragment, useEffect, useState } from "react";
import {
  saveNote,
  getNotes,
  onDeletNotes,
  updataNotes,
} from "../controler/firebase-init";
import { useForm, Controller } from "react-hook-form";
import "../view/Notes.css";
import "../view/Home.js";

const NoteMaker = () => {
  const { control, handleSubmit } = useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [listNotes, setListNotes] = useState([]);
  const [idUpdate, setidUpdate] = useState(null);
  const [oldData, setOldData] = useState("");
  const [editStatusNote, setEditStatusNote] = useState(false);

  const saveData = (data, e) => {
    e.preventDefault();
    saveNote(title, description);
    getListNotes();
    //Para reiniciar los campos como vacios luego que de se realizará una publicación
    setTitle("");
    setDescription("");
  };

  const getListNotes = () => {
    getNotes()
      .then((items) => {
        setListNotes(items);
      })
      .catch((error) => console.error("Estos catch", error));
  };

  useEffect(() => {
    getListNotes();
  }, []);

  const deleteNotesData = (id) => {
    onDeletNotes(id);
    getListNotes();
  };

  const editData = (item) => {
    setTitle(item.data.title);
    setDescription(item.data.description);
    setidUpdate(item.id);
    setOldData(item);
  };

  const postUpdatedNote = async (e) => {
    e.preventDefault();
    setEditStatusNote(true);
    if (!setOldData) {
    } else {
      await updataNotes(oldData, { title: title, description: description });
      getListNotes();
      //Para reiniciar los campos como vacios luego que de se realizará una publicación incluyendo el ID
      setTitle("");
      setDescription("");
      setEditStatusNote(false);
    }
  };

  return (
    <Fragment>
      <div className="notes-dataAll-user">
        <h4 className="notes-data-user">
          {" "}
          Usuario Conectado: {localStorage.getItem("name")}
        </h4>
        <h4 className="notes-data-user"> {localStorage.getItem("email")}</h4>
      </div>
      <h3>¡Escribe para no olvidar!</h3>

      <form
        onSubmit={editStatusNote ? postUpdatedNote : handleSubmit(saveData)}
      >
        <div className="note-maker-space">
          <Controller
            render={({ field: { onChange } }) => (
              <input
                placeholder="Titulo"
                className="titleNotes"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            )}
            control={control}
            name="title"
          />

          <Controller
            render={({ field: { onChange } }) => (
              <textarea
                placeholder="Descripcion"
                className="descripcionNotes"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            )}
            control={control}
            name="description"
          />
          <button type="submit" className="btn-notas-primary">
            <ion-icon name="checkmark"></ion-icon>
          </button>
          <button
            className="btn-notas-primary"
            onClick={(e) => postUpdatedNote(e)}
          >
            <ion-icon name="checkmark-done"></ion-icon>
            EDICIÓN
          </button>
        </div>
        <h3>Tus recordatorios</h3>
        <div className="containerAllNotes">
          {" "}
          {listNotes.map((item) => (
            <div className="individualNotesContainer" key={item.id}>
              <p>{item.data.title}</p>
              <p>{item.data.description}</p>
              <button
                type="button"
                className="individualNotesEdit"
                onClick={() => editData(item)}
              >
                {" "}
                <ion-icon name="create" className="notes-icon-edit"></ion-icon>
                {/* Editar */}
              </button>
              <button
                type="button"
                className="individualNotesDelet"
                onClick={() => deleteNotesData(item.id)}
              >
                {" "}
                <ion-icon
                  name="close-circle"
                  className="notes-icon-delet"
                ></ion-icon>
                {/* Eliminar */}
              </button>
            </div>
          ))}
        </div>
      </form>
    </Fragment>
  );
};

export default NoteMaker;

