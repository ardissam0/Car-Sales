//moved state tree from App.js
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Performance brakes', price: 300 },
      { id: 5, name: 'Bulletproof body', price: 20000 },
      { id: 6, name: 'Solar roof', price: 1000 },
      { id: 7, name: 'Racing tires', price: 500 },
      { id: 8, name: 'Rear spoiler', price: 250 },
      { id: 9, name: 'Matt paint', price: 350 }
    ]
  };

  //created reducer to pass into store
  export const reducer = (state = initialState, action) => {
      switch (action.type) {
          case 'ADD_ITEM' :
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                }
            }
            case 'REMOVE_ITEM' :
                return {
                    ...state,
                    additionalPrice: state.additionalPrice - action.payload.price,
                    car: {
                        ...state.car,
                        features: [
                            ...state.car.features.filter(item => item.id !== action.payload.id)
                        ]
                    }
                }
                default:
                    return state
      }
  
    }