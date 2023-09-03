const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white p-3 mb-5 text-center font-bold uppercase rounded-md">
      {children}
    </div>
  );
};
export default Error;
