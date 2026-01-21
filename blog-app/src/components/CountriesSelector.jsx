
import { countries } from "../countries";

const CountriesSelector = ({selectedCountry, setSelectedCountry}) => {
  
  
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select
        id="fruit-select"
        value={selectedCountry}
        onChange={handleChange}
        className="
    w-56
    px-4 py-2
    text-base
    border border-gray-300
    rounded-lg
    bg-white
    text-gray-700
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500
    focus:border-indigo-500
    hover:border-gray-400
    transition
  "
      >
        {Object.entries(countries).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountriesSelector;
