import React from "react";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore eaque. Delectus animi molestias ad placeat consequatur reprehenderit cum laudantium!",
      coverImg:
        "https://s3-alpha.figma.com/hub/file/667619808/fd9075c7-5a78-4ecd-a98a-710190b568f6-cover.png",
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore eaque. Delectus animi molestias ad placeat consequatur reprehenderit cum laudantium!",
      coverImg:
        "https://s3-alpha.figma.com/hub/file/667619808/fd9075c7-5a78-4ecd-a98a-710190b568f6-cover.png",
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore eaque. Delectus animi molestias ad placeat consequatur reprehenderit cum laudantium!",
      coverImg:
        "https://s3-alpha.figma.com/hub/file/667619808/fd9075c7-5a78-4ecd-a98a-710190b568f6-cover.png",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
            {/* Product Card */}
            {blogs.map((blog) => (
              <div
                key={Math.random()}
                className="bg-white rounded-xl overflow-hidden drop-shadow-md"
              >
                <img
                  src={blog.coverImg}
                  alt="Figma Logo"
                  className="h-56 w-full object-cover"
                />
                <div className="p-8 ">
                  <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                  <p className="text-gray-600 text-xl">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
