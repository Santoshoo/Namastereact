 export const IMG_CDN_URL =
   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill" +
   clouduinaryImageId;



export const resturantList = [
  {
    data: {
      id: 86420099,
      name: "Paneer 65",
      category: "Veg Starter",
      description:
        "E: 723. 82 kcal (241. 27 kcal), c: 30. 89 grams (10. 30 grams), p: 32. 95 grams (10. 98 grams), f: 51. 82 grams (17. 27 grams) [Serving info: 1 Serve, Serving size: 300 grams, Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]",
      cloudinaryImageId: "druwjzmfmz7qvepq3bkr",
      recommended: 1,
      inStock: 1,
      isVeg: 1,
      enabled: 1,
      displayOrder: 0,
      price: 27500,
      variants_new: { exclude_list: [], variant_groups: [] },
      addons: [
        {
          group_id: 65878017,
          group_name: "Choice Of Beverage (600ml)",
          choices: [
            {
              id: 52551665,
              name: "Coke 600 Ml",
              price: 3620,
              inStock: 0,
              isVeg: 1,
              order: 1,
              default: 0,
            },
            {
              id: 52551667,
              name: "Sprite 600ml",
              price: 3810,
              inStock: 0,
              isVeg: 1,
              order: 1,
              default: 0,
            },
            {
              id: 52551668,
              name: "Thums Up 600ml",
              price: 3810,
              inStock: 0,
              isVeg: 1,
              order: 1,
              default: 0,
            },
          ],
          maxAddons: 2,
          maxFreeAddons: -1,
          minAddons: 0,
          order: 100,
        },
      ],
      cropChoices: 2,
      itemScore: 0,
      itemDiscount: 0,
      isPopular: 0,
      restId: "229",
      showMC: 0,
      attributes: {
        portionSize: "300 gram",
        vegClassifier: "VEG",
        accompaniments: "",
      },

      id: 86420100,
      name: "Chilly Paneer",
      category: "Veg Starter",
      description:
        "E: 871. 69 kcal (272. 40 kcal), c: 21. 54 grams (6. 73 grams), p: 51. 90 grams (16. 22 grams), f: 64. 36 grams (20. 11 grams) [Serving info: 1 Serve, Serving size: 320 grams, Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]",
      cloudinaryImageId: "byonwwb8mzxyqluxlqpq",
      recommended: 0,
      inStock: 1,
      isVeg: 1,
      enabled: 1,
      displayOrder: 0,
      price: 27500,
      variants_new: { exclude_list: [], variant_groups: [] },
      addons: [
        {
          group_id: 65878024,
          group_name: "Choice Of Beverage (600ml)",
          choices: [
            {
              id: 52551691,
              name: "Thums Up 600ml",
              price: 3810,
              inStock: 0,
              isVeg: 1,
              order: 1,
              default: 0,
            },
            {
              id: 52551685,
              name: "Coke 600 Ml",
              price: 3620,
              inStock: 0,
              isVeg: 1,
              order: 1,
              default: 0,
            },
            {
              id: 52551688,
              name: "Sprite 600ml",
              price: 3810,
              inStock: 0,
              isVeg: 1,
              order: 1,
              default: 0,
            },
          ],
          maxAddons: 2,
          maxFreeAddons: -1,
          minAddons: 0,
          order: 100,
        },
      ],
      cropChoices: 2,
      itemScore: 0,
      itemDiscount: 0,
      isPopular: 0,
      restId: "229",
      showMC: 0,
      attributes: {
        portionSize: "320 gram",
        vegClassifier: "VEG",
        accompaniments: "",
      },
    },
  },
];

const ResturantCard = ({ name, cuisines, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img
        src={ 
            
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      {/* <h3>{cuisines.join(",")}</h3> */}
      {/* <h4>{burgerKing.rating} stars</h4> */}
    </div>
  );
};
