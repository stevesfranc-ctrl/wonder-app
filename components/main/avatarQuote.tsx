export default function AvatarQuote() {
  return (
    <div className="relative flex flex-col items-center justify-center ">

      {/* Bubble */}
      <div className="relative max-w-md bg-white rounded-full px-2 py-2 text-center shadow-lg">
        <p className="text-gray-500 text-sm font-light">
          Software Engineer
        </p>

        {/* Small connector dot */}
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-md" />
      </div>

      {/* Avatar */}
  <div className=" md:-mr-[-30px] ml-0">
              <img
                src="/steve'swork.png"
                alt="Logo"
                draggable={false}
                className="cursor-pointer rounded-full object-cover w-full h-full"
              />
            </div> 
    </div>
  );
}
