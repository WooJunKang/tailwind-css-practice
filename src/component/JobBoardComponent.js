import React from 'react';

// let x =   {
//   "id": 1,
//   "company": "Photosnap",
//   "logo": "/images/photosnap.svg",
//   "new": true,
//   "featured": true,
//   "position": "Senior Frontend Developer",
//   "role": "Frontend",
//   "level": "Senior",
//   "postedAt": "1d ago",
//   "contract": "Full Time",
//   "location": "USA Only",
//   "languages": [
//     "HTML",
//     "CSS",
//     "JavaScript"
//   ],
//   "tools": []
// }

const JobBoardComponent = ({ job, handleTagClick }) => {

  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-lg mx-10 my-16 p-4 rounded
        ${job.featured && ('border-l-4 border-green-500 border-solid')}
        lg:flex-row lg:my-4
      `}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 lg:mt-0 lg:h-24 lg:w-24 lg:my-0"
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3
          className="font-bold text-green-500"
        >
          {job.company}
          {job.isNew && (
            <span
              className="mx-2 bg-green-500 text-green-100 
                font-bold py-1 px-2 rounded-full uppercase text-sm">
              New
            </span>
          )}
          {job.featured && (
            <span
              className="bg-gray-800 text-white font-bold 
                py-1 px-2 rounded-full uppercase text-sm">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{job.position}</h2>
        <p>
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div
        className="flex flex-wrap 
          items-center mt-4 mx-4 pt-4 
          border-t-2 border-gray-400 border-solid
          lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0
        ">
        {
          tags ? (
            tags.map((tag) => (
              <span
                onClick={() => (handleTagClick(tag))}
                className="text-green-500 bg-green-100 font-bold 
                  mr-4 mb-4 p-2 rounded cursor-pointer
                  lg:mb-0"
              >
                {tag}
              </span>
            ))
          ) : (
              ''
            )
        }
      </div>
    </div>
  )
}

export default JobBoardComponent;