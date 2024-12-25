import { useRef } from "react";
// import "/css/slick-slider.css";

import cat1 from "/img/blog/blog2-meets1.png";
import cat2 from "/img/blog/blog2-meets2.png";
import cat3 from "/img/blog/blog2-meets3.png";
import cat4 from "/img/blog/blog2-meets4.png";
// import cat5 from '/img/blog/blog2-meets1.png'

import categoryHead from "/img/icons/span2.svg";

const Categories = () => {
  const cro = useRef();
  const next = () => {
    if (cro.current.scrollLeft < 1) {
      cro.current.scrollLeft = 450;
    } else {
      cro.current.scrollLeft -= 250;
    }
  };
  const prev = () => {
    if (cro.current.scrollLeft > 400) {
      cro.current.scrollLeft = 0;
    } else {
      cro.current.scrollLeft += 250;
    }
  };
  return (
    <div className="blog2-meets bg-cover sp bg-grey">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading2">
              <span
                className="sub-titile mb-16"
                data-aos-offset="50"
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-delay="100"
              >
                <img src={categoryHead} alt="vexon" /> Meet Alex Robertson
              </span>
              <h2 className="text-anime-style-3">
                Insights Storyteller Vexon Blog
              </h2>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos-offset="50"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="100"
          >
            <div className="blog2-meets-btns text-end md:text-start sm:text-start sm:mt-20 md:mt-20">
              <button className="blog2-slider-prev" onClick={next}>
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="blog2-slider-next" onClick={prev}>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="row"
          data-aos-offset="50"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="100"
        >
          <div className="col-lg-12">
            <div
              ref={cro}
              className="blog2-meets-slider mt-60 d-flex overflow-auto cro"
            >
              {[
                { imgSrc: `${cat1}`, label: "Finance" },
                { imgSrc: `${cat2}`, label: "Accounting" },
                { imgSrc: `${cat3}`, label: "Business" },
                { imgSrc: `${cat4}`, label: "Business" },
                { imgSrc: `${cat2}`, label: "Insurances" },
                { imgSrc: `${cat2}`, label: "Agency" },
              ].map((item, index) => (
                <div className="blog2-meets-single col-md-3" key={index}>
                  <div className="image">
                    <img src={item.imgSrc} alt="vexon" />
                  </div>
                  <div className="heading-area">
                    <a href="categories.html">
                      {item.label} <span>32</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="space80"></div> */}
      </div>
    </div>
  );
};

export default Categories;
