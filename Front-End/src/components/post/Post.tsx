import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  fetchPosts,
  createPost,
  deletePost,
  setNewPostField,
  clearNewPostFields,
} from "../../features/post/postSlice";
import { SearchIcon, PlusIcon, TrashIcon } from "@primer/octicons-react";
import type { Post } from "../../features/post/postSlice";

const Post = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, newPost } = useAppSelector((state) => state.post);
  const { newName, newDescription } = newPost;

  const [filterNombre, setFilterNombre] = useState("");
  const [nombreError, setNombreError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCrear = () => {
    const nombreValido = newName.trim().length > 3;
    const descripcionValida = newDescription.trim().length > 3;

    setNombreError(!nombreValido);
    setDescripcionError(!descripcionValida);

    if (!nombreValido || !descripcionValida) return;

    dispatch(
      createPost({ name: newName, description: newDescription })
    );
    setNombreError(false);
    setDescripcionError(false);
    dispatch(clearNewPostFields());
  };

  const handleEliminar = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    dispatch(deletePost(id));
  };

  const handleBuscar = () => {
    console.log("Buscar con:", filterNombre);
  };

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setNewPostField({ name, value }));
  };

  const filteredData =
    filterNombre === ""
      ? posts
      : posts.filter((item: Post) =>
          item.name.toLowerCase().includes(filterNombre.toLowerCase())
        );

  return (
    <div className="flex flex-col m-8">
      <div className="flex items-center justify-end gap-4 px-8">
        <h1 className="text-lg font-semibold text-[#4CB6AC]/80">Filtrar: </h1>
        <input
          type="text"
          placeholder="Nombre"
          value={filterNombre}
          onChange={(e) => setFilterNombre(e.target.value)}
          className="h-10 pl-2 border-b-1 placeholder-[#4CB6AC] border-[#4CB6AC]/80 focus:border-[#4CB6AC] focus:outline-none"
        />
        <button
          onClick={handleBuscar}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#1e8177] bg-[#82d6ce] hover:bg-[#bbfff9] focus:outline-none"
        >
          <SearchIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Buscar
        </button>
      </div>
      <form className="flex flex-col gap-4 p-8">
        <div className="overflow-x-auto shadow-md rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#4CB6AC] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-md w-[20%]">Nombre</th>
                <th className="px-6 py-3 text-left text-md w-[70%]">
                  Descripción
                </th>
                <th className="px-6 py-3 text-right w-[10%]">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No existen registros
                  </td>
                </tr>
              )}
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-[#b9faf3]">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {row.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex flex-row text-gray-400 hover:text-red-500">
                      <TrashIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      <button onClick={(e) => handleEliminar(e, row.id)}>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
      <div className="flex items-center justify-end gap-4 px-8">
        <input
          name="newName"
          type="text"
          placeholder="Nombre"
          value={newName}
          onChange={handleForm}
          className={`h-10 pl-2 border-b-2 ${
            nombreError ? "border-red-500" : "border-[#4CB6AC]/80"
          } placeholder-[#4CB6AC] focus:outline-none`}
        />
        <input
          name="newDescription"
          type="text"
          placeholder="Descripción"
          value={newDescription}
          onChange={handleForm}
          className={`h-10 pl-2 w-2xl border-b-2 ${
            descripcionError ? "border-red-500" : "border-[#4CB6AC]/80"
          } placeholder-[#4CB6AC] focus:outline-none`}
        />
        <button
          onClick={handleCrear}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#1e8177] bg-[#82d6ce] hover:bg-[#bbfff9] focus:outline-none"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Crear
        </button>
      </div>
    </div>
  );
};

export default Post;
