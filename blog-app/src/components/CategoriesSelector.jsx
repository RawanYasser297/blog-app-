
import { categories } from "../categories";

const CategoriesSelector = ({selectedCategory, setSelectedCategory}) => {
  
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select
        id="fruit-select"
        value={selectedCategory}
        onChange={handleChange}
        className="w-32 pl-2  py-2 text-base border border-gray-300 rounded-lg  bg-white  text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500  focus:border-indigo-500  hover:border-gray-400 transition"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesSelector;
