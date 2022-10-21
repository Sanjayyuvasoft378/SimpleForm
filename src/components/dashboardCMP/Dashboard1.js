import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import "./dash1.css";
function Dashboard1() {
  return (
    <div>
      <title>Ecommerce.com</title>
      {/* <!-- favicon --> */}
      <link
        rel="icon"
        type="image/x-icon"
        href="https://demo.royalscripts.com/products/geniuscart/assets/images/16480155641571567283faviconpng.png"
      />
      {/* <!-- Bootstrap --> */}
      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* <!-- Fontawesome --> */}
      <link
        rel="stylesheet"
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/fontawesome.css"
      />
      {/* <!-- icofont --> */}
      <link
        rel="stylesheet"
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/icofont.min.css"
      />
      {/* <!-- Sidemenu Css --> */}
      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/plugins/fullside-menu/css/dark-side-style.css"
        rel="stylesheet"
      />
      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/plugins/fullside-menu/waves.min.css"
        rel="stylesheet"
      />

      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/plugin.css"
        rel="stylesheet"
      />

      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/jquery.tagit.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/bootstrap-coloroicker.css"
      />
      {/* <!-- Main Css -->

		<!-- stylesheet --> */}

      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/style.css"
        rel="stylesheet"
      />
      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/custom.css"
        rel="stylesheet"
      />
      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/responsive.css"
        rel="stylesheet"
      />
      <link
        href="https://demo.royalscripts.com/products/geniuscart/assets/admin/css/common.css"
        rel="stylesheet"
      />
      <div class="page">
        <div class="page-main">
          {/* <!-- Header Menu Area Start --> */}
          <div class="header">
            <div class="container-fluid">
              <div class="d-flex mobile-menu-check justify-content-between">
                <a
                  class="admin-logo"
                  href="/dashboard1"
                  target="_blank"
                >
                  <img
                    src="https://demo.royalscripts.com/products/geniuscart/assets/images/16480137961571567295logopng.png"
                    alt=""
                  />
                </a>
                <div class="menu-toggle-button">
                  <a class="nav-link" href="javascript:;" id="sidebarCollapse">
                    <div class="my-toggl-icon">
                      <span class="bar1"></span>
                      <span class="bar2"></span>
                      <span class="bar3"></span>
                    </div>
                  </a>
                </div>

                <div class="right-eliment">
                  <ul class="list">
                    <input
                      type="hidden"
                      id="all_notf_count"
                      value="https://demo.royalscripts.com/products/geniuscart/admin/all/notf/count"
                    />
                    <li class="bell-area">
                      <a
                        class="dropdown-toggle-1"
                        target="_blank"
                        href="https://demo.royalscripts.com/products/geniuscart"
                      >
                        <i class="fas fa-globe-americas"></i>
                      </a>
                    </li>

                    <li class="bell-area">
                      <a
                        id="notf_conv"
                        class="dropdown-toggle-1"
                        href="javascript:;"
                      >
                        <i class="far fa-envelope"></i>
                        <span id="conv-notf-count">0</span>
                      </a>
                      <div class="dropdown-menu">
                        <div
                          class="dropdownmenu-wrapper"
                          data-href="https://demo.royalscripts.com/products/geniuscart/admin/conv/notf/show"
                          id="conv-notf-show"
                        ></div>
                      </div>
                    </li>

                    <li class="bell-area">
                      <a
                        id="notf_product"
                        class="dropdown-toggle-1"
                        href="javascript:;"
                      >
                        <i class="icofont-cart"></i>
                        <span id="product-notf-count">0</span>
                      </a>
                      <div class="dropdown-menu">
                        <div
                          class="dropdownmenu-wrapper"
                          data-href="https://demo.royalscripts.com/products/geniuscart/admin/product/notf/show"
                          id="product-notf-show"
                        ></div>
                      </div>
                    </li>

                    <li class="bell-area">
                      <a
                        id="notf_user"
                        class="dropdown-toggle-1"
                        href="javascript:;"
                      >
                        <i class="far fa-user"></i>
                        <span id="user-notf-count">0</span>
                      </a>
                      <div class="dropdown-menu">
                        <div
                          class="dropdownmenu-wrapper"
                          data-href="https://demo.royalscripts.com/products/geniuscart/admin/user/notf/show"
                          id="user-notf-show"
                        ></div>
                      </div>
                    </li>

                    <li class="bell-area">
                      <a
                        id="notf_order"
                        class="dropdown-toggle-1"
                        href="javascript:;"
                      >
                        <i class="far fa-newspaper"></i>
                        <span id="order-notf-count">1</span>
                      </a>
                      <div class="dropdown-menu">
                        <div
                          class="dropdownmenu-wrapper"
                          data-href="https://demo.royalscripts.com/products/geniuscart/admin/order/notf/show"
                          id="order-notf-show"
                        ></div>
                      </div>
                    </li>

                    <li class="login-profile-area">
                      <a class="dropdown-toggle-1" href="javascript:;">
                        <div class="user-img">
                          <img
                            src="https://demo.royalscripts.com/products/geniuscart/assets/images/admins/1556780563user.png"
                            alt=""
                          />
                        </div>
                      </a>
                      <div class="dropdown-menu">
                        <div class="dropdownmenu-wrapper">
                          <ul>
                            <h5>Welcome!</h5>
                            <li>
                              <a href="https://demo.royalscripts.com/products/geniuscart/admin/profile">
                                <i class="fas fa-user"></i> Edit Profile
                              </a>
                            </li>
                            <li>
                              <a href="https://demo.royalscripts.com/products/geniuscart/admin/password">
                                <i class="fas fa-cog"></i> Change Password
                              </a>
                            </li>
                            <li>
                              <a href="https://demo.royalscripts.com/products/geniuscart/admin/logout">
                                <i class="fas fa-power-off"></i> Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Header Menu Area End --> */}
          <div class="wrapper">
            {/* <!-- Side Menu Area Start --> */}
            <nav id="sidebar" class="nav-sidebar">
              <ul class="list-unstyled components" id="accordion">
                <li>
                  <a
                    href="/dashboard1"
                    class="wave-effect"
                  >
                    <i class="fa fa-home mr-2"></i>Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#order"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-hand-holding-usd"></i>Orders
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="order"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/orders">
                        {" "}
                        All Orders
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/orders?status=pending">
                        {" "}
                        Pending Orders
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/orders?status=processing">
                        {" "}
                        Processing Orders
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/orders?status=completed">
                        {" "}
                        Completed Orders
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/orders?status=declined">
                        {" "}
                        Declined Orders
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#menu1"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-flag"></i>Manage Country
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="menu1"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/manage/country">
                        <span>Country</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/manage/country/tax">
                        <span>Manage Tax</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#income"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-hand-holding-usd"></i>Total Earning
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="income"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/tax/calculate">
                        {" "}
                        Tax Calculate
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/subscription/earning">
                        {" "}
                        Subscription Earning
                      </a>
                    </li>

                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/withdraw/earning">
                        {" "}
                        Withdraw Earning
                      </a>
                    </li>

                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/commission/earning">
                        {" "}
                        Commission Earning
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#menu5"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-sitemap"></i>Manage Categories
                  </a>
                  <ul
                    class="collapse list-unstyled
            "
                    id="menu5"
                    data-parent="#accordion"
                  >
                    {{
    title: "Categories",
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Main Category",
        path: "/maincatlist",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Sub Category",
        path: "/subcatlist",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Child Category",
        path: "/childcatelist",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
}},
                    <li class="">
                      <a href="/maincatelist">
                        <span>Main Category</span>
                      </a>
                    </li>
                    <li class="">
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/subcategory">
                        <span>Sub Category</span>
                      </a>
                    </li>
                    <li class="">
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/childcategory">
                        <span>Child Category</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#menu2"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-cart"></i>Products
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="menu2"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/types">
                        <span>Add New Product</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products">
                        <span>All Products</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/deactive">
                        <span>Deactivated Product</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/catalogs">
                        <span>Product Catalogs</span>
                      </a>
                    </li>

                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/product-settings">
                        <span>Product Settings</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#affiliateprod"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-opencart"></i>Affiliate Products
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="affiliateprod"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/import/create-product">
                        <span>Add Affiliate Product</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/import/index">
                        <span>All Affiliate Products</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/import">
                    <i class="fas fa-upload"></i>Bulk Product Upload
                  </a>
                </li>

                <li>
                  <a
                    href="#menu4"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-speech-comments"></i>Product Discussion
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="menu4"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/ratings">
                        <span>Product Reviews</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/comments">
                        <span>Comments</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/reports">
                        <span>Reports</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="https://demo.royalscripts.com/products/geniuscart/admin/coupon"
                    class=" wave-effect"
                  >
                    <i class="fas fa-percentage"></i>Set Coupons
                  </a>
                </li>

                <li>
                  <a
                    href="#menu3"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-user"></i>Customers
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="menu3"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/users">
                        <span>Customers List</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/users/withdraws">
                        <span>Withdraws</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/user/default/image">
                        <span>Customer Default Image</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#customerDeposit"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-money"></i>Customer Deposits
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="customerDeposit"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/users/deposits/all">
                        <span>Completed Deposits</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/users/deposits/pending">
                        <span>Pending Deposits</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/users/transactions">
                        <span>Transactions</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#vendor"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-ui-user-group"></i>Vendors
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="vendor"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/vendors">
                        <span>Vendors List</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/vendors/withdraws">
                        <span>Withdraws</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/vendor/color">
                        <span>Default Background</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#vendorSubs"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-user-suited"></i>Vendor Subscriptions
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="vendorSubs"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/vendors/subs/completed">
                        <span>Completed Subscriptions</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/vendors/subs/pending">
                        <span>Pending Subscriptions</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#vendor1"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="icofont-verification-check"></i>Vendor
                    Verifications
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="vendor1"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/verificatons/all">
                        <span>All Verifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/verificatons/pending">
                        <span>Pending Verifications</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="https://demo.royalscripts.com/products/geniuscart/admin/subscription"
                    class=" wave-effect"
                  >
                    <i class="fas fa-dollar-sign"></i>Vendor Subscription Plans
                  </a>
                </li>

                <li>
                  <a
                    href="#msg"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-fw fa-newspaper"></i>Messages
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="msg"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/tickets">
                        <span>Tickets</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/disputes">
                        <span>Disputes</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#blog"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-fw fa-newspaper"></i>Blog
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="blog"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/blog/category">
                        <span>Categories</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/blog">
                        <span>Posts</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/blog/blog-settings">
                        <span>Blog Settings</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#general"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-cogs"></i>General Settings
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="general"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/logo">
                        <span>Logo</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/favicon">
                        <span>Favicon</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/loader">
                        <span>Loader</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/shipping">
                        <span>Shipping Methods</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/package">
                        <span>Packagings</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/pickup">
                        <span>Pickup Locations</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/contents">
                        <span>Website Contents</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/affilate">
                        <span>Affiliate Program</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/popup">
                        <span>Popup Banner</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/breadcrumb">
                        <span>Breadcrumb Banner</span>
                      </a>
                    </li>

                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/error-banner">
                        <span>Error Banner</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/maintenance">
                        <span>Website Maintenance</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#homepage"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-edit"></i>Home Page Settings
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="homepage"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/slider">
                        <span>Sliders</span>
                      </a>
                    </li>

                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/arrival">
                        <span>Arrival Section</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/general-settings/deal_of_the_day">
                        <span>Deal of the day</span>
                      </a>
                    </li>

                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/partner">
                        <span>Partners</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/page-settings/customize">
                        <span>Home Page Customization</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#menu"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-file-code"></i>Menu Page Settings
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="menu"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/faq">
                        <span>FAQ Page</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/page-settings/contact">
                        <span>Contact Us Page</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/page">
                        <span>Other Pages</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/page/banner">
                        <span>Other Page Banner</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/menu/links">
                        <span>Customize Menu Links</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#emails"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-at"></i>Email Settings
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="emails"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/email-templates">
                        <span>Email Template</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/email-config">
                        <span>Email Configurations</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/groupemail">
                        <span>Group Email</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#payments"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-file-code"></i>Payment Settings
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="payments"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/payment-informations">
                        <span>Payment Information</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/paymentgateway">
                        <span>Payment Gateways</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/currency">
                        <span>Currencies</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/rewards">
                        <span>Reward Information</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#socials"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-paper-plane"></i>Social Settings
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="socials"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/social-link">
                        <span>Social Links</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/social/facebook">
                        <span>Facebook Login</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/social/google">
                        <span>Google Login</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#langs"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-language"></i>Language Settings
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="langs"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/languages">
                        <span>Website Language</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/adminlanguages">
                        <span>Admin Panel Language</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="https://demo.royalscripts.com/products/geniuscart/admin/fonts"
                    class=" wave-effect"
                  >
                    <i class="fa fa-font"></i>Font Option
                  </a>
                </li>

                <li>
                  <a
                    href="#seoTools"
                    class="accordion-toggle wave-effect"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i class="fas fa-wrench"></i>SEO Tools
                  </a>
                  <ul
                    class="collapse list-unstyled"
                    id="seoTools"
                    data-parent="#accordion"
                  >
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/popular/30">
                        <span>Popular Products</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/seotools/analytics">
                        <span>Google Analytics</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.royalscripts.com/products/geniuscart/admin/seotools/keywords">
                        <span>Website Meta Keywords</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="https://demo.royalscripts.com/products/geniuscart/admin/staff"
                    class=" wave-effect"
                  >
                    <i class="fas fa-user-secret"></i>Manage Staffs
                  </a>
                </li>

                <li>
                  <a
                    href="https://demo.royalscripts.com/products/geniuscart/admin/subscribers"
                    class=" wave-effect"
                  >
                    <i class="fas fa-users-cog mr-2"></i>Subscribers
                  </a>
                </li>

                <li>
                  <a
                    href="https://demo.royalscripts.com/products/geniuscart/admin/role"
                    class=" wave-effect"
                  >
                    <i class="fas fa-user-tag"></i>Manage Roles
                  </a>
                </li>

                <li>
                  <a
                    href="https://demo.royalscripts.com/products/geniuscart/admin/cache/clear"
                    class=" wave-effect"
                  >
                    <i class="fas fa-sync"></i>Clear Cache
                  </a>
                </li>

                {/* <!--<li>-->
    <!--    <a href="#sactive" class="accordion-toggle wave-effect" data-toggle="collapse" aria-expanded="false">-->
    <!--        <i class="fas fa-cog"></i>System Activation-->
    <!--    </a>-->
    <!--    <ul class="collapse list-unstyled" id="sactive" data-parent="#accordion">-->

    <!--        <li><a href="https://demo.royalscripts.com/products/geniuscart/admin/activation"> Activation</a></li>-->
    <!--        <li><a href="https://demo.royalscripts.com/products/geniuscart/admin/generate/backup"> Generate Backup</a></li>-->
    <!--    </ul>-->
    <!--</li>--> */}

                <li class="mt-3 text-dark text-center">Version 4.0</li>
              </ul>
            </nav>
            {/* <!-- Main Content Area Start --> */}
            <div class="content-area">
              <div class="row row-cards-one">
                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="mycard bg1">
                    <div class="left">
                      <h5 class="title">Orders Pending! </h5>
                      <span class="number">196</span>
                      <a
                        href="https://demo.royalscripts.com/products/geniuscart/admin/orders?status=pending"
                        class="link"
                      >
                        View All
                      </a>
                    </div>
                    <div class="right d-flex align-self-center">
                      <div class="icon">
                        <i class="icofont-dollar"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="mycard bg2">
                    <div class="left">
                      <h5 class="title">Orders Procsessing!</h5>
                      <span class="number">1</span>
                      <a
                        href="https://demo.royalscripts.com/products/geniuscart/admin/orders?status=processing"
                        class="link"
                      >
                        View All
                      </a>
                    </div>
                    <div class="right d-flex align-self-center">
                      <div class="icon">
                        <i class="icofont-truck-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="mycard bg3">
                    <div class="left">
                      <h5 class="title">Orders Completed!</h5>
                      <span class="number">12</span>
                      <a
                        href="https://demo.royalscripts.com/products/geniuscart/admin/orders?status=completed"
                        class="link"
                      >
                        View All
                      </a>
                    </div>
                    <div class="right d-flex align-self-center">
                      <div class="icon">
                        <i class="icofont-check-circled"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="mycard bg4">
                    <div class="left">
                      <h5 class="title">Total Products!</h5>
                      <span class="number">56</span>
                      <a
                        href="https://demo.royalscripts.com/products/geniuscart/admin/products"
                        class="link"
                      >
                        View All
                      </a>
                    </div>
                    <div class="right d-flex align-self-center">
                      <div class="icon">
                        <i class="icofont-cart-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="mycard bg5">
                    <div class="left">
                      <h5 class="title">Total Customers!</h5>
                      <span class="number">109</span>
                      <a
                        href="https://demo.royalscripts.com/products/geniuscart/admin/users"
                        class="link"
                      >
                        View All
                      </a>
                    </div>
                    <div class="right d-flex align-self-center">
                      <div class="icon">
                        <i class="icofont-users-alt-5"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="mycard bg6">
                    <div class="left">
                      <h5 class="title">Total Posts!</h5>
                      <span class="number">30</span>
                      <a
                        href="https://demo.royalscripts.com/products/geniuscart/admin/blog"
                        class="link"
                      >
                        View All
                      </a>
                    </div>
                    <div class="right d-flex align-self-center">
                      <div class="icon">
                        <i class="icofont-newspaper"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
            <div class="row row-cards-one">
              <div class="col-md-6 col-xl-3">
                <div class="card c-info-box-area">
                  <div class="c-info-box box1">
                    <p>16</p>
                  </div>
                  <div class="c-info-box-content">
                    <h6 class="title">New Customers</h6>
                    <p class="text">Last 30 Days</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div class="card c-info-box-area">
                  <div class="c-info-box box2">
                    <p>109</p>
                  </div>
                  <div class="c-info-box-content">
                    <h6 class="title">Total Customers</h6>
                    <p class="text">All Time</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div class="card c-info-box-area">
                  <div class="c-info-box box3">
                    <p>0</p>
                  </div>
                  <div class="c-info-box-content">
                    <h6 class="title">Total Sales</h6>
                    <p class="text">Last 30 days</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div class="card c-info-box-area">
                  <div class="c-info-box box4">
                    <p>12</p>
                  </div>
                  <div class="c-info-box-content">
                    <h6 class="title">Total Sales</h6>
                    <p class="text">All Time</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row-cards-one">
              <div class="col-md-12 col-lg-6 col-sm-12 col-xl-6">
                <div class="card">
                  <h5 class="card-header">Recent Order(s)</h5>
                  <div class="card-body">
                    <div class="table-responsive  dashboard-home-table">
                      <table
                        id="poproducts"
                        class="table table-hover dt-responsive"
                        cellspacing="0"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Order Number</th>
                            <th>Order Date</th>
                          </tr>
                          <tr>
                            <td>3ACr1666333734</td>
                            <td>2022-10-21</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/order/418/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>7ZnW1666030201</td>
                            <td>2022-10-17</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/order/417/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>9bk71665745286</td>
                            <td>2022-10-14</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/order/416/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>993h1665745281</td>
                            <td>2022-10-14</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/order/415/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>HWHE1665570165</td>
                            <td>2022-10-12</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/order/414/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-lg-6 col-sm-12 col-xl-6">
                <div class="card">
                  <h5 class="card-header">Recent Customer(s)</h5>
                  <div class="card-body">
                    <div class="table-responsive  dashboard-home-table">
                      <table
                        id="poproducts"
                        class="table table-hover dt-responsive"
                        cellspacing="0"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Customer Email</th>
                            <th>Joined</th>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="741b1f1f1f341319151d185a171b19"
                              >
                                [email&#160;protected]
                              </a>
                            </td>
                            <td>2022-10-20 09:20:28</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/user/142/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="aad0d2c9d2c9eacdc7cbc3c684c9c5c7"
                              >
                                [email&#160;protected]
                              </a>
                            </td>
                            <td>2022-10-18 06:59:48</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/user/141/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="8be5eafceafbe3eaffa5ffe4e6cbece6eae2e7a5e8e4e6"
                              >
                                [email&#160;protected]
                              </a>
                            </td>
                            <td>2022-10-17 18:08:01</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/user/140/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="1478756166755479757d787d7a75607b663a777b79"
                              >
                                [email&#160;protected]
                              </a>
                            </td>
                            <td>2022-10-11 21:43:32</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/user/139/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="dab0b5b2b49ab7bbb3b6b3b4bbaeb5a8f4b9b5b7"
                              >
                                [email&#160;protected]
                              </a>
                            </td>
                            <td>2022-10-11 21:41:44</td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/user/138/show">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row-cards-one">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xl-12">
                <div class="card">
                  <h5 class="card-header">Popular Product(s)</h5>
                  <div class="card-body">
                    <div class="table-responsive  dashboard-home-table">
                      <table
                        id="poproducts"
                        class="table table-hover dt-responsive"
                        cellspacing="0"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Featured Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1639378156F9SBl2Yx.png" />
                            </td>
                            <td>
                              Zain - Digital Agency and Startup HTML Template
                            </td>
                            <td>
                              Electronic &amp; Beauty
                              <br />
                              TELEVISION
                              <br />
                              LCD TV
                            </td>
                            <td>Physical</td>

                            <td> 570$ </td>

                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/162">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/16480134488OmlUgJN.png" />
                            </td>
                            <td>
                              Top Rated product title will be here according to
                              ...
                            </td>
                            <td>
                              Fashion &amp; Beauty
                              <br />
                              ACCESSORIES
                              <br />
                            </td>
                            <td>Physical</td>

                            <td> 110$ </td>

                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/170">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1648013375aGqS3Zgd.png" />
                            </td>
                            <td>
                              Physical Product Title Title will Be Here 102
                            </td>
                            <td>
                              Fashion &amp; Beauty
                              <br />
                              BAGS
                              <br />
                            </td>
                            <td>Physical</td>

                            <td> 115$ </td>

                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/175">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1639377187LerG6ypK.png" />
                            </td>
                            <td>
                              Physical Product Title Title will Be Here 99
                            </td>
                            <td>
                              Fashion &amp; Beauty
                              <br />
                              BAGS
                              <br />
                            </td>
                            <td>Physical</td>

                            <td> 110$ </td>

                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/178">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1639377739mqNT2g2x.png" />
                            </td>
                            <td>
                              Top Rated product title will be here according to
                              ...
                            </td>
                            <td>
                              Fashion &amp; Beauty
                              <br />
                              ACCESSORIES
                              <br />
                            </td>
                            <td>Physical</td>

                            <td> 110$ </td>

                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/169">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row-cards-one">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xl-12">
                <div class="card">
                  <h5 class="card-header">Recent Product(s)</h5>
                  <div class="card-body">
                    <div class="table-responsive dashboard-home-table">
                      <table
                        id="pproducts"
                        class="table table-hover dt-responsive"
                        cellspacing="0"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Featured Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1583379574IMgpJTkz.png" />
                            </td>
                            <td>يتم عرض المنتجات العربية هنا</td>
                            <td>
                              إلكتروني
                              <br />
                              التلفاز
                              <br />
                              تلفزيون ال سي دي
                            </td>
                            <td>Physical</td>
                            <td> 27$ </td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/359">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1639299829GpA2fIPF.png" />
                            </td>
                            <td>يتم عرض المنتجات العربية هنا</td>
                            <td>
                              الجمال الأزياء
                              <br />
                              مستلزمات
                              <br />
                            </td>
                            <td>Physical</td>
                            <td> 111$ </td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/331">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1639301732rjpKi5Bj.png" />
                            </td>
                            <td>يتم عرض المنتجات العربية هنا</td>
                            <td>
                              الجمال الأزياء
                              <br />
                              مستلزمات
                              <br />
                            </td>
                            <td>Physical</td>
                            <td> 111$ </td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/330">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1639392705q0WQNIW1.png" />
                            </td>
                            <td>يتم عرض المنتجات العربية هنا</td>
                            <td>
                              الجمال الأزياء
                              <br />
                              مستلزمات
                              <br />
                            </td>
                            <td>Physical</td>
                            <td> 111$ </td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/329">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="https://demo.royalscripts.com/products/geniuscart/assets/images/products/1639301941z6BfrkBZ.png" />
                            </td>
                            <td>يتم عرض المنتجات العربية هنا</td>
                            <td>
                              الجمال الأزياء
                              <br />
                              مستلزمات
                              <br />
                            </td>
                            <td>Physical</td>
                            <td> 111$ </td>
                            <td>
                              <div class="action-list">
                                <a href="https://demo.royalscripts.com/products/geniuscart/admin/products/edit/328">
                                  <i class="fas fa-eye"></i> Details
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row-cards-one">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xl-12">
                <div class="card">
                  <h5 class="card-header">Total Sales in Last 30 Days</h5>
                  <div class="card-body">
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row-cards-one">
              <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                <div class="card">
                  <h5 class="card-header">Top Referrals</h5>
                  <div class="card-body">
                    <div class="admin-fix-height-card">
                      <div id="chartContainer-topReference"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-lg-6 col-sm-12 col-xl-6">
                <div class="card">
                  <h5 class="card-header">Most Used OS</h5>
                  <div class="card-body">
                    <div class="admin-fix-height-card">
                      <div id="chartContainer-os"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/vendors/jquery-1.12.4.min.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/vendors/vue.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/vendors/bootstrap.min.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/jqueryui.min.js"></script>
      {/* <!-- Fullside-menu Js--> */}
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/plugins/fullside-menu/jquery.slimscroll.min.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/plugins/fullside-menu/waves.min.js"></script>

      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/plugin.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/Chart.min.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/tag-it.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/nicEdit.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/bootstrap-colorpicker.min.js"></script>
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/notify.js"></script>

      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/jquery.canvasjs.min.js"></script>

      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/load.js"></script>
      {/* <!-- Custom Js--> */}
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/custom.js"></script>
      {/* <!-- AJAX Js--> */}
      <script src="https://demo.royalscripts.com/products/geniuscart/assets/admin/js/myscript.js"></script>
      
   
    </div>
  );
}

export default Dashboard1;
