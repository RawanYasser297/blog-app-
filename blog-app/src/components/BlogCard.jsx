import useFetchCategory from "../hooks/useFetchCategory";


const BlogCard = ({ image , title,description, author, date, avatar}) => {
  const {category}=useFetchCategory(title,description,avatar)
  return (
    <div className="max-w-98 h-122  rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="max-w-90 w-[90%] h-60 overflow-hidden rounded-t-xl mx-auto py-4 ">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 h-50">
        {/* Category */}
        <span className="text-sm font-medium text-[#4B6BFB] bg-indigo-100 p-1.5  rounded-md" >
          {category}
        </span>

        {/* Title */}
        <h3 className="mt-6 h-3/5 line-clamp-2 text-2xl font-semibold text-gray-900">
          {title}
        </h3>

        {/* Author */}
        <div className="mt-4 flex items-center gap-3 w-11/12 ">
          <img
            src={avatar}
            alt={author}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-sm flex justify-between flex-1  flex-wrap">
            <p className="max-w-30 truncate font-medium text-[16px] text-[#97989F]">{author}</p>
            <p className="text-[#97989F] text-[16px] font-normal">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
