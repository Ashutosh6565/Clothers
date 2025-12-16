import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollref.current.offsetLeft);
    setScrollLeft(scrollref.current.scrollLeft);
  }
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollref.current.offsetLeft;
    const walk = x - startX
    scrollref.current.scrollLeft = scrollLeft - walk;
  }
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  }   
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  const updateScrollButtons = () => {
    const conatiner = scrollref.current;

    if (conatiner) {
      const leftScroll = conatiner.scrollLeft;
      const rightScrollable =
        conatiner.scrollWidth > leftScroll + conatiner.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const conatiner = scrollref.current;
    if (conatiner) {
      conatiner.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => conatiner.removeEventListener("scroll", updateScrollButtons);
    }
  });

  const newArrivals = [
    {
      id: 1,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400??/random=1",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },
    {
      id: 2,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400??/random=2",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },
    {
      id: 3,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400?/random=3",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },
    {
      id: 4,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400?/random=4",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },

    {
      id: 5,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400?/random=5",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },
    {
      id: 6,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400?/random=6",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },
    {
      id: 7,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400?/random=7",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },
    {
      id: 8,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/400/400?/random=8",
          alt: "Stylish Jacket Image 1",
        },
      ],
    },
  ];
  return (
    <section className="py-16 px-4 lg:px-0">
      <d className="container mx-auto text-center mb-10 relative ">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg ">
          Discover the latest styles sstright off the runway, freshly added to
          our collection just for you.
        </p>

        {/* scroll Buttons */}
        <div className="absolute right-2 bottom-[-30px] flex space-x-2">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-0 rounded border transition ${
              canScrollLeft
                ? "bg-white text-black hover:bg-gray-100"

                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-0 rounded border transition ${
              canScrollRight
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
</d>

{/* scroll content  */}
        <div
          ref={scrollref}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="container  mx-auto mt-10 overflow-scroll ml-2 flex space-x-6 relative"
        >
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[400px]  object-cover rounded-lg"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity/50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product.id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default NewArrivals;
