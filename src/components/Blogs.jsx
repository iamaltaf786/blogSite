import React from "react";
import { Link } from "react-router-dom";

function Blogs({ blogs }) {
  const blogs1 = [
    {
      id: 1,
      title: "Blog 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore eaque. Delectus animi molestias ad placeat consequatur reprehenderit cum laudantium!",
      coverImg:
        "https://s3-alpha.figma.com/hub/file/667619808/fd9075c7-5a78-4ecd-a98a-710190b568f6-cover.png",
      content: `Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.`,
      authorName: "John Snow",
      authorImg:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorDesc: "Web Developer",
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore eaque. Delectus animi molestias ad placeat consequatur reprehenderit cum laudantium!",
      coverImg:
        "https://s3-alpha.figma.com/hub/file/667619808/fd9075c7-5a78-4ecd-a98a-710190b568f6-cover.png",
      content: `Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.`,
      authorName: "John Snow",
      authorImg:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorDesc: "Web Developer",
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore eaque. Delectus animi molestias ad placeat consequatur reprehenderit cum laudantium!",
      coverImg:
        "https://s3-alpha.figma.com/hub/file/667619808/fd9075c7-5a78-4ecd-a98a-710190b568f6-cover.png",
      content: `Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.
        Intro to web3 Day 1: Intro to web3 what is web3 To put it simply,
        web3 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, est voluptas fugiat 
        odio placeat hic natus omnis, facilis blanditiis provident sint, recusandae nam. A tenetur corrupti 
        animi quo fugiat fuga eveniet porro cupiditate nostrum. Eligendi eveniet velit exercitationem 
        provident consectetur, sed vero aspernatur adipisci. Laudantium placeat repellat illo magnam quis.`,
      authorName: "John Snow",
      authorImg:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorDesc: "Web Developer",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
            {/* Product Card */}

            {blogs.data.map((blog) => (
              <Link to={`/blog/${blog.id}`}>
                <div
                  key={Math.random()}
                  className="bg-white rounded-xl overflow-hidden drop-shadow-md"
                >
                  <img
                    src={`http://localhost:1337${blog.coverImg.url}`}
                    alt="Figma Logo"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-8 ">
                    <h3 className="font-bold text-2xl my-1">
                      {blog.BlogTitle}
                    </h3>
                    <p className="text-gray-600 text-xl">{blog.blogDesc}</p>
                  </div>
                </div>
              </Link>
            ))}

            {/* {blogs1.map((blog) => (
              <Link to={`/blog/${blog.id}`}>
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
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
