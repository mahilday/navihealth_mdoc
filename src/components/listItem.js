const ListItem = ({ item, other }) => {
  return (
    <li className="flex mb-2 w-full pr-10 items-center space-x-3">
      <div className="w-2 h-2 ring-1 ring-offset-2 ring-gray-500  bg-gray-500 rounded-full"></div>
      <span className="flex flex-col"><span className="text-xl">{item}</span><span>{other && other}</span></span>
    </li>
  );
};

export default ListItem;
