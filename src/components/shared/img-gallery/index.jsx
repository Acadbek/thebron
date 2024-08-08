const ImgGallery = () => {
  return (
    <div className="h-[408px] grid grid-cols-4 grid-rows-2 gap-2 mt-10">
      <div className="bg-gray-200 grid-item-1 rounded-md flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x408"
          alt="Image 1"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
        <img
          src="https://via.placeholder.com/200x204"
          alt="Image 2"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
        <img
          src="https://via.placeholder.com/200x204"
          alt="Image 3"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
        <img
          src="https://via.placeholder.com/200x204"
          alt="Image 4"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="bg-gray-200 grid-item-2 flex rounded-md items-center justify-center">
        <img
          src="https://via.placeholder.com/200x204"
          alt="Image 5"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ImgGallery;
