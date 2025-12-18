import React from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This stylish jacket ",
  brand: "FashionCo",
  material: "100% Cotton",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/400/400??/random=1",
      altText: "Stylish Jacket Image 1",
    },
    {
      url: "https://picsum.photos/400/400??/random=2",
      altText: "Stylish Jacket Image 2",
    },
  ],
};


const similarProduct = [
  {
    _id : 1,
    name : "Product 1",
    price : 100,
    images : [{url : "https://picsum.photos/400/400??/random=3"}]
  },
  {
    _id : 2,
    name : "Product 2",
    price : 150,
    images : [{url : "https://picsum.photos/400/400??/random=4"},

    ]
  },
  {
    _id : 3,
    name : "Product 3",
    price : 200,
    images : [{url : "https://picsum.photos/400/400??/random=5"}]

  },
  {
    _id : 4,
    name : "Product 4",
    price : 250,
    images : [{url : "https://picsum.photos/400/400??/random=6"}]
  },

]
const ProductaDetails = () => {
  const [mainImage, setMainImage] = React.useState(
    selectedProduct.images[0]?.url
  );

  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const handleQuantityChange = (type) => {
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (type === "minus") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color", { duration: 1000 });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart", { duration: 1000 });
      setIsButtonDisabled(false);
    }, 1000);
  };
  return (
    <div className="p-6 ">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-start text-left">
          {/* left thumbnails */}

          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((images, index) => (
              <img
                src={images.url}
                alt={images.altText || `Thumbnail ${index}`}
                key={index}
                onClick={() => setMainImage(images.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === images.url
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/3">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* mobile view thumbnails */}

          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((images, index) => (
              <img
                src={images.url}
                alt={images.altText || `Thumbnail ${index}`}
                key={index}
                onClick={() => setMainImage(images.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === images.url
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* right side  */}

          <div className="md:w-1/2 md:ml-20">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-sm font-light text-gray-600 mb-1 line-through">
              $
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-lg text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4 text-lg font-normal">
              {selectedProduct.description}
            </p>

            <div className="mb-3">
              <p className="text-gray-700 text-xl font-medium">color :</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    onClick={() => setSelectedColor(color)}
                    key={color}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <p className="text-gray-700 text-lg font-medium">Size : </p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size, index) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`px-3 text-sm py-2 rounded border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <p className="text-gray-700 text-lg font-medium">Quantity :</p>
              <div className="flex items-center space-x-4 mt-2 ">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-100 rounded text-sm"
                >
                  -
                </button>
                <span className="text-sm">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-100 rounded text-sm"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`
    bg-black text-white py-2 px-6 text-sm rounded w-full mb-4
    transition-all duration-200
    ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}
  `}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-5 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics :</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Materials</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


{/* related products  */}
        <div className="mt-20 ">
                <h2 className="text-2xl text-center font-medium mb-4">
                  You May Also Like
                </h2>
                <ProductGrid products = {similarProduct}/>
                
        </div>
      </div>
    </div>
  );
};

export default ProductaDetails;
