import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c36604ee = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _45082681 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _be709f00 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _3f77028b = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _902ed40e = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _bd133cc0 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _47d7ac5e = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _874db64c = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _5b0876e5 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _0e85acdf = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _0fd90ef4 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _41dc1be3 = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _03eaa31a = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _619cce6a = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _3ce95334 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _e7b8d7f6 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _ab92c466 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _07634140 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _2d493aea = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _00293a47 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _47ac1bb9 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _76bef828 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _4c78839e = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _16ab48b4 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _31dfeedf = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _6d3d04e2 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _d1d22094 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _d42613f8 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _0740fa39 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _c36604ee,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _45082681,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _be709f00,
      name: "billing___en"
    }, {
      path: "payment",
      component: _3f77028b,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _902ed40e,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _bd133cc0,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _47d7ac5e,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _874db64c,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _5b0876e5,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _0e85acdf,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _0fd90ef4,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _41dc1be3,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _03eaa31a,
    name: "home___de"
  }, {
    path: "/Home",
    component: _619cce6a,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _3ce95334,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _e7b8d7f6,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _ab92c466,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _07634140,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _2d493aea,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _00293a47,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _47ac1bb9,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _76bef828,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _4c78839e,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _16ab48b4,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _31dfeedf,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _6d3d04e2,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _c36604ee,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _45082681,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _be709f00,
      name: "billing___de"
    }, {
      path: "payment",
      component: _3f77028b,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _902ed40e,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _bd133cc0,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _47d7ac5e,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _874db64c,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _5b0876e5,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _0e85acdf,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _0fd90ef4,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _41dc1be3,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _619cce6a,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _3ce95334,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _e7b8d7f6,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _ab92c466,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _07634140,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _2d493aea,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _00293a47,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _47ac1bb9,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _76bef828,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _4c78839e,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _16ab48b4,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _31dfeedf,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _6d3d04e2,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _d1d22094,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _d42613f8,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _0740fa39,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _d1d22094,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _d42613f8,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _0740fa39,
    name: "category___en"
  }, {
    path: "/",
    component: _03eaa31a,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
