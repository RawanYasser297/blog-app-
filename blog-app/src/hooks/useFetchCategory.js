import { useEffect, useState } from "react";
const CATEGORY_KEYWORDS = {
  technology: ["AI", "software", "startup", "tech", "Apple", "Google"],
  business: ["market", "stock", "finance", "economy"],
  sports: ["football", "NBA", "FIFA", "match"],
  health: ["health", "medical", "disease",'hospital','doctors'],
  entertainment: ["movie", "music", "TV", "celebrity"],
  science:['lab'],
};
// general 
const useFetchCategory = (title,description) => {
  const [category, setCategory] = useState('')

  useEffect(() => { 
      function detectCategory() {
        const text = `${title} ${description}`.toLowerCase();
        
        for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
          if (keywords.some((k) =>text.includes(k.toLowerCase()))) {
            setCategory(category);
            return
        }
        
        setCategory("general");
      }
    }
      detectCategory();
    }, [description, title]);

  return {category:category}
}

export default useFetchCategory