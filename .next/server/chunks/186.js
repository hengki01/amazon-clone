exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xq": function() { return /* binding */ addToCart; },
/* harmony export */   "h2": function() { return /* binding */ removeFromCart; },
/* harmony export */   "a1": function() { return /* binding */ selectItems; },
/* harmony export */   "mS": function() { return /* binding */ selectTotal; }
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  items: [{
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "rating": 4,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "hasPrime": true
  }, {
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "rating": 3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "hasPrime": false
  }]
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id);
      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn('cant remove product from card');
      }

      state.items = newCart;
    }
  }
});
const {
  addToCart,
  removeFromCart
} = cartSlice.actions;
const selectItems = state => state.cart.items;
const selectTotal = state => state.cart.items.reduce((total, item) => total + item.price, 0);
/* harmony default export */ __webpack_exports__["ZP"] = (cartSlice.reducer);

/***/ })

};
;