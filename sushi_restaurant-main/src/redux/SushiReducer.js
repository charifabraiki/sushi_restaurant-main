import foodone from '../sushi_project_images/food_one.png';
import foodtwo from '../sushi_project_images/slider_two.jpg';
import foodthree from '../sushi_project_images/slider_three.jpg';
/*import foodseven from '../sushi_project_images/food_seven.png';*/
const initialState = {
    foods: [
        {
            id: 1,
            quantite: 1,
            name: 'TERIYAKI ROLL',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodone,
            price: 35.00,
            added: false,
            promo: false
          },
          {
            id: 2,
            quantite: 1,
            name: 'FUJIZAN',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodtwo,
            price: 27.00,
            promo: true,
            oldPrice: 31.00,
            added: false,
            sale: true,
          },
          {
            id: 3,
            quantite: 1,
            name: 'NIGIRI SALMON',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodthree,
            price: 30.00,
            sale: false,
            added: false,
            promo: false
          },
          {
            id: 4,
            quantite: 1,
            name: 'THAIL ROLL',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodtwo,
            price: 38.00,
            sale: false,
            added: false,
            promo: false
          }
    ],
    cart: [
    ],
    trash:[]
}
const SushiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'add_to_cart':
        const selectedProduct = state.foods.find((food) => food.id === action.payload.id);
        const checkProduct = state.cart.find((food) => food.id === selectedProduct.id);
        if (checkProduct) {
          return {
            ...state,
            foods: [...state.foods],
            cart: state.cart.map((item) =>
              item.id === selectedProduct.id
                ? { ...item, quantite: item.quantite + selectedProduct.quantite }
                : item
            ),
          };
        } else {
          return {
            ...state,
            foods: state.foods.map((item) => 
              item.id === selectedProduct.id
              ? {...item, added: true}
              : item
            ),
            cart: [...state.cart, selectedProduct],
          };
        };
        case 'add_quantite':
            return {
                ...state,
                foods: state.foods.map(f => {
                  if (f.id === action.payload) {
                    return {
                      ...f,
                      quantite: f.quantite + 1
                  };
              }
              return f;
                })
            };
          case 'add_quantite_cart':
            return {
                ...state,
                cart: state.cart.map(f => {
                  if (f.id === action.payload) {
                    return {
                      ...f,
                      quantite: f.quantite + 1
                  };
              }
              return f;
                })
            };
        case 'minuce_quantite':
            return {
                ...state,
                foods: state.foods.map(f => {
                  if (f.id === action.payload && f.quantite > 0) {
                    return {
                      ...f,
                      quantite: f.quantite - 1
                  };
              }
              return f;
                })
            };
        case 'minuce_quantite_cart':
          return {
            ...state,
            cart: state.cart.map(f => {
              if (f.id === action.payload && f.quantite > 0) {
                return {
                  ...f,
                  quantite: f.quantite - 1
              };
          }
          return f;
            })
        };
        case 'remove_cart':
          const removedProduct = state.cart.find((food) => food.id === action.payload);
          if (!removedProduct) {
            return state;
          }
          return {
            ...state,
            foods: state.foods.map((item) => 
              item.id === removedProduct.id
              ? {...item, added: false}
              : item
            ),
            cart: state.cart.filter((food) => food.id !== action.payload),
            trash: [removedProduct]
          };
          case 'remove_trash':
            const selectedProduct_trash = state.trash.find((pro) => pro.id === action.payload);
            return {
                ...state,
                foods: state.foods.map((item) => 
                  item.id === selectedProduct_trash.id
                  ? {...item, added: true}
                  : item
                ),
                trash: state.trash.filter(function(product) {
                    return product.id !== action.payload;
                }),
                cart: [...state.cart, selectedProduct_trash],
            };
        default:
            return state;
    }
};

export default SushiReducer;

