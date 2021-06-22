const Checkbox = ({clasme}) => {
  return (
    <input
      type="checkbox"
      className={`cursor-pointer form-checkbox border-2 ${clasme && clasme} border-gray-400 text-green-free rounded-sm focus:ring-green-free`}
    />
  );
};

export default Checkbox;
