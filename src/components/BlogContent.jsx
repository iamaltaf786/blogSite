import React from "react";

function BlogContent() {
  const blog = {
    id: 1,
    title: "10 Days of Solidity",
    desc: "Learn on how to learn Solidity in 10 Days!",
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
  };

  return (
    <>
      <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
            <div className="col-span-2 gap-x-8 gap-y-8">
              <img
                src={blog.coverImg}
                alt="images"
                className="h-56 w-full object-cover"
              />
              <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1>
              <div className="pt-5">
                <p>{blog.content}</p>
              </div>
            </div>
            <div className="w-full rounded-xl bg-white overflow-hidden drop-shadow-md py-5 max-h-[250px]">
              <div>
                <img
                  src={blog.authorImg}
                  alt="auther details"
                  className="p-2 w-32 h-32 rounded-full mx-auto"
                />
                <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                  {blog.authorName}
                </h1>
                <p className="text-center text-gray-900 font-medium">
                  {blog.authorDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogContent;
