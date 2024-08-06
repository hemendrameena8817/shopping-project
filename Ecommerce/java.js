

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 450,
    colors: [
      {
        code: "black",
        img: "./Ecommerce\img\air.png",
      },
      {
        code: "darkblue",
        img: "C:./Ecommerce\img\air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 950,
    colors: [
      {
        code: "black",
        img: ".\Ecommerce\img\jordan.png",
      },
      {
        code: "darkblue",
        img: ".\Ecommerce\img\jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 450,
    colors: [
      {
        code: "green",
        img: "./img/blazer.png",
      },
      {
        code: "lightgray",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Air Jordan",
    price: 8950,
    colors: [
      {
        code: "black",
        img: "./img/jordan.png",
      },
      {
        code: "blue",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 50,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(-${100 * index}vw)`;

    // Change the chosen product
    chosenProduct = products[index];

    // Update the current product details
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img; // Default to first color image

    // Update product colors
    currentProductColors.forEach((color, colorIndex) => {
      if (chosenProduct.colors[colorIndex]) {
        color.style.backgroundColor = chosenProduct.colors[colorIndex].code;
      }
    });
  });
});
