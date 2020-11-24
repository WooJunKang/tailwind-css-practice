import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './component/JobBoardComponent';


function App() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  // useEffect: 3가지 라이프사이클 사용가능 (componentDidMount, willUnmount, updated)
  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    const tags = [role, level];

    if (filters.length === 0) {
      return true;
    }
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }

    // return tags.some(tag => filters.includes(tag));
    return filters.every(filter => tags.includes(filter));
  }

  const filteredJobs = jobs.filter(filterFunc);

  const handleTagClick = (tag) => {
    // avoid reading the tag
    if (filters.includes(tag)) {
      return;
    }
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (clickedFilter) => {
    setFilters(filters.filter(f => (f !== clickedFilter)))
  }

  const clearFiltesrs = () => {
    setFilters([]);
  }

  return (
    <>
      <header className="bg-green-100 mb-12">
        <img
          src="/images/bg-header-desktop.svg"
          alt="bg-img"
          className="w-full"
        />
      </header>

      <div className="container m-auto">

        {
          filters.length > 0 && (
            <div
              className="flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded lg:my-4 z-10 relative"
            >
              {filters.map(filter => (
                <span
                  onClick={() => (handleFilterClick(filter))}
                  className="cursor-pointer rounded mr-4 rounded
                  text-green-500 bg-green-100 font-bold p-2"
                >
                  × {filter}
                </span>
              ))}
              <button
                onClick={clearFiltesrs}
                className="font-bold text-gray-700 ml-auto"
              >
                Clear
            </button>
            </div>
          )
        }

        {
          filteredJobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
              filteredJobs.map(job => {
                return (
                  <JobBoardComponent
                    job={job}
                    key={job.id}
                    handleTagClick={handleTagClick}
                  />
                )
              })
            )
        }
      </div>
    </>
  );
}

export default App;


// TODOs
// 1. Study the design & JSON                 (O)
// 2. Create then Job Board Component         (O)
// 3. Get the data from JSON                  (O)
// 4. Pass down the data to the JobBoardComp  (O)
// 5. Style it                                (O)
// 5-1 Style Mobile
// 6. Filter it
