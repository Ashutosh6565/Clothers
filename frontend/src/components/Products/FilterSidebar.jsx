import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = React.useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 1000,
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const categories = ["Top Wear", "Bottom Wear", "Foot Wear", "Accessories"];
  const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Pink"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Wool", "Silk", "Denim"];
  const brands = ["Brand A", "Brand B", "Brand C", "Brand D"];
  const genders = ["Men", "Women", "Unisex"];
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? parseInt(params.minPrice) : 0,
      maxPrice: params.maxPrice ? parseInt(params.maxPrice) : 1000,
    });
    setPriceRange([0, params.maxPrice || 1000]);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    let newFilter = { ...filters };
    
    if (type === "checkbox") {
        if(checked){
            newFilter[name] = [...(newFilter[name] || []), value];
        }else{
            newFilter[name] = newFilter[name].filter((item) => item !==value);
        }
    }else{
        newFilter[name] = value;

    }
    setFilters(newFilter)
    updateURLParams(newFilter);
    console.log(newFilter);
  }

  const updateURLParams = (newFilter) => {
    const params = new URLSearchParams();
    Object.keys(newFilter).forEach((key) => {
        if(Array.isArray(newFilter[key]) && newFilter[key].length > 0) {
            params.append(key, newFilter[key].join(","))
        }else  if (newFilter[key]){
            params.append(key,newFilter[key])
        }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`);
  }
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>


      {/* category filters  */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>

        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 text-sm">{category}</span>
          </div>
        ))}
      </div>
      {/* Gender filters  */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>

        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
                onChange={handleFilterChange}
              className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 text-sm">{gender}</span>
          </div>
        ))}
      </div>

      {/* color filters  */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
            <button key={color} value={color} onClick={handleFilterChange} className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105" style={{backgroundColor : color.toLowerCase()}}></button>
        ))}
        </div>
      </div>


        {/* size filters  */}

        <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
            <div key={size} className="flex items-center mb-1">
                <input type="checkbox" value={size} onChange={handleFilterChange} className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"  name="size"/>
                <span className="text-gray-700 text-sm">{size}</span>
            </div>
        ))}
        </div>
        {/* material filters  */}

        <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
            <div key={material} className="flex items-center mb-1">
                <input type="checkbox" value={material} onChange={handleFilterChange} className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"  name="material"/>
                <span className="text-gray-700 text-sm">{material}</span>
            </div>
        ))}
        </div>
        {/* Brands filters  */}

        <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
            <div key={brand} className="flex items-center mb-1">
                <input type="checkbox" value={brand} onChange={handleFilterChange} className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"  name="brand"/>
                <span className="text-gray-700 text-sm">{brand}</span>
            </div>
        ))}
        </div>

{/* price range */}
<div className="mb-6">
    <label className="block text-gray-600 font-medium mb-2">Price Range</label>

    <input type="range" name="priceRange" min={0} max={100} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
    />
    <div className="flex justify-between text-gray-600 mt-2"><span>$0</span>
    <span>${priceRange[1]}</span>
    </div>
</div>
    </div>
  );
};

export default FilterSidebar;
