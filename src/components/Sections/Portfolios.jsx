import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Shop",
  },
  {
    id: 3,
    name: "Business Site",
  },
  {
    id: 4,
    name: "Landing Page",
  },
  {
    id: 5,
    name: "Design",
  },
  {
    id: 6,
    name: "Blog",
  },
];

const allData = [
  {
    id: 1,
    name: "Business Site",
    link: "https://lukasdomingos.vercel.app/",
    category: ["business site"],
    image: "images/portfolio/18.svg",
  },
  {
    id: 2,
    name: "Shop",
    link: "https://us.mototalk.com/new-site-mototalk/",
    category: ["shop"],
    image: "images/portfolio/4.svg",
  },
  {
    id: 3,
    name: "Business Site",
    link: "https://webera.com/",
    category: ["business site"],
    image: "images/portfolio/17.svg",
  },
  {
    id: 4,
    name: "Business Site",
    link: "https://sibimpact.com/",
    category: ["business site"],
    image: "images/portfolio/15.svg",
  },
  {
    id: 5,
    name: "Business Site",
    link: "https://webera.jorlans.com/",
    category: ["business site"],
    image: "images/portfolio/6.svg",
  },
  {
    id: 6,
    name: "Shop",
    link: "https://shop.jorlans.com/",
    category: ["shop"],
    image: "images/portfolio/7.svg",
  },
  {
    id: 7,
    name: "Landing Page",
    link: "https://projetos.jorlans.com/landing1/",
    category: ["landing page"],
    image: "images/portfolio/8.svg",
  },
  {
    id: 8,
    name: "Landing Page",
    link: "https://projetos.jorlans.com/webera/",
    category: ["landing page"],
    image: "images/portfolio/9.svg",
  },
  {
    id: 9,
    name: "Landing Page",
    link: "https://projetos.jorlans.com/portfolio",
    category: ["landing page"],
    image: "images/portfolio/12.svg",
  },
  {
    id: 10,
    name: "Design",
    link: "https://www.youtube.com/watch?v=Ztc-7unmgMA&t=2s",
    category: ["design"],
    image: "images/portfolio/13.svg",
  },
  {
    id: 11,
    name: "Blog",
    link: "https://blog.greenmainframe.com/",
    category: ["blog"],
    image: "images/portfolio/14.svg",
  },
  {
    id: 12,
    link: "https://projetos.jorlans.com/ilustracao/",
    name: "Shop",
    category: ["shop"],
    image: "images/portfolio/2.svg",
  },
  {
    id: 13,
    name: "Business Site",
    link: "https://beerwiththeboss.jorlans.com/",
    category: ["business site"],
    image: "images/portfolio/16.svg",
  },
  {
    id: 14,
    name: "Shop",
    link: "https://projetos.jorlans.com/",
    category: ["shop"],
    image: "images/portfolio/3.svg",
  },
  {
    id: 15,
    link: "https://projetos.jorlans.com/ilustracao4/",
    name: "Shop",
    category: ["shop"],
    image: "images/portfolio/1.svg",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
