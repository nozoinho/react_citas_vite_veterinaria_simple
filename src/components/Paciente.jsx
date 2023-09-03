const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  //console.log(paciente);
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    if (confirm("Desea eliminar este paciente?")) {
      eliminarPaciente(id);
    }
  };

  return (
    <>
      <div className="bg-white mx-5 px-5 py-10 rounded-xl shadow-md mb-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-400 uppercase font-bold text-center text-white rounded-lg"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-400 uppercase font-bold text-center text-white rounded-lg"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
export default Paciente;
