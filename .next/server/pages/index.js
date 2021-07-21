(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 31:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(266);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");;
;// CONCATENATED MODULE: ./components/Banner.js





function Banner() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "relative",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
      autoPlay: true,
      infiniteLoop: true,
      showStatus: false,
      showIndicators: false,
      showThumbs: false,
      interval: 5000,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg"
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(802);
// EXTERNAL MODULE: external "react-currency-formatter"
var external_react_currency_formatter_ = __webpack_require__(381);
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./slices/cartSlice.js
var cartSlice = __webpack_require__(186);
;// CONCATENATED MODULE: ./components/Product.js








const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({
  id,
  title,
  price,
  description,
  category,
  image
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: rating
  } = (0,external_react_.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const {
    0: hasPrime
  } = (0,external_react_.useState)(Math.random() < 0.5);

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime
    };
    dispatch((0,cartSlice/* addToCart */.Xq)(product));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "my-3",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => {
        return /*#__PURE__*/jsx_runtime_.jsx(esm/* StarIcon */.r7p, {
          className: "h-5 text-yellow-500"
        });
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-xs my-2",
      children: description
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-5",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
        quantity: price,
        currency: "USD"
      })
    }), hasPrime && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "https://hengki-portfolio.s3.ap-southeast-1.amazonaws.com/prime-tag.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-cs text-gray-500",
        children: "FREE Next-day Delivery"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: addItemToCart,
      className: "mt-auto button",
      children: "Add to Cart"
    })]
  });
}
;// CONCATENATED MODULE: ./components/ProductFeed.js




function ProductFeed({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => {
      return /*#__PURE__*/jsx_runtime_.jsx(Product, {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id);
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "md:col-span-full",
      src: "https://hengki-portfolio.s3.ap-southeast-1.amazonaws.com/full-banner.jpg",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(({
        id,
        title,
        price,
        description,
        category,
        image
      }) => {
        return /*#__PURE__*/jsx_runtime_.jsx(Product, {
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id);
      })
    }), products.slice(5, products.length).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => {
      return /*#__PURE__*/jsx_runtime_.jsx(Product, {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id);
    })]
  });
}
;// CONCATENATED MODULE: ./pages/index.js






function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100 ",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Amazon Clone"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductFeed, {
        products: products
      })]
    })]
  });
}
async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
  return {
    props: {
      products
    }
  };
}

/***/ }),

/***/ 139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 381:
/***/ (function(module) {

"use strict";
module.exports = require("react-currency-formatter");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,618,186,266], function() { return __webpack_exec__(31); });
module.exports = __webpack_exports__;

})();