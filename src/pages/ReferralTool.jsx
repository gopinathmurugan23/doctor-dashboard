// export const REFERRAL_BREADCRUMB = [
//   { label: "Affiliate" },
//   { label: "Dashboard", path: "/affiliate/dashboard" },
// ];

import { useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import StatCard from "../components/StatCard";
import { REFERRAL_PRODUCTS } from "../constants/referralProducts";

import ClicksIcon from "../icons/total-coupon.svg";
import OrdersIcon from "../icons/total-order.svg";
import RevenueIcon from "../icons/total-revenue.svg";
import LinkIcon from "../icons/total-link.svg";

const baseBreadcrumb = [
  { label: "Affiliate" },
  { label: "Referral Tool", path: "/affiliate/referral-tool" },
];

const ReferralTool = () => {
  const [selectedId, setSelectedId] = useState("");
  const selectedProduct = useMemo(
    () => REFERRAL_PRODUCTS.find((p) => p.id === selectedId),
    [selectedId]
  );

  const breadcrumbItems = useMemo(() => {
    if (!selectedProduct) return baseBreadcrumb;
    return [
      ...baseBreadcrumb,
      {
        label: selectedProduct.name,
        path: "#",
      },
    ];
  }, [selectedProduct]);

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      // optional: toast/snackbar
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  const stats = selectedProduct
    ? [
        {
          id: "referral",
          title: "Total Referral",
          value: selectedProduct.totalReferral.toString(),
          suffix: "",
          icon: ClicksIcon,
        },
        {
          id: "orders",
          title: "Total Orders",
          value: selectedProduct.totalOrders.toString(),
          suffix: "",
          icon: OrdersIcon,
        },
        {
          id: "revenue",
          title: "Total Revenue",
          value: selectedProduct.totalRevenue.toLocaleString(),
          suffix: "",
          icon: RevenueIcon,
        },
        {
          id: "links",
          title: "Total Link/Coupon",
          value: selectedProduct.totalLinks.toString(),
          suffix: "",
          icon: LinkIcon,
        },
      ]
    : [];

  return (
    <div className="affiliate-dashboard">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* --- Product Link / Coupon card --- */}
      <div className="referral-card">
        <div className="referral-card-header">
          <h2>Product Link/Coupon</h2>
        </div>

        {/* Top row – dropdown + Get button */}
        <div className="referral-product-row">
          <div className="referral-field">
            <label className="referral-label">
              Enter the name of Product <span className="required">*</span>
            </label>

            <div className="referral-select-wrapper">
              <select
                className="referral-select"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
              >
                <option value="">Enter or Select the name of product</option>
                {REFERRAL_PRODUCTS.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="referral-helper">
              Enter or Select the name of product you want to refer to your
              patient.
            </div>
          </div>
        </div>

        {/* When product selected – show details section */}
        {selectedProduct && (
          <>
            <div className="referral-details-row">
              <div className="referral-product-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>

              <div className="referral-product-info">
                <div className="referral-field">
                  <label className="referral-small-label">Product Link</label>
                  <div className="referral-input-row">
                    <input
                      readOnly
                      className="referral-input"
                      value={selectedProduct.productLink}
                    />
                    <button
                      type="button"
                      className="referral-primary-btn"
                      onClick={() => handleCopy(selectedProduct.productLink)}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="referral-field">
                  <label className="referral-small-label">
                    Product Coupon Code
                  </label>
                  <div className="referral-input-row">
                    <input
                      readOnly
                      className="referral-input"
                      value={selectedProduct.couponCode}
                    />
                    <button
                      type="button"
                      className="referral-primary-btn"
                      onClick={() => handleCopy(selectedProduct.couponCode)}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="referral-note">
              Note: Share this Link/Coupon with your patient. For every purchase
              someone makes using your Link/Coupon, you get credit.
            </div>
          </>
        )}
      </div>

      {/* --- Stats row (only when product selected) --- */}
      {selectedProduct && (
        <div className="stat-card-row referral-stats-row">
          {stats.map((card) => (
            <StatCard key={card.id} {...card} />
          ))}
        </div>
      )}

      {/* --- Cart Discount section --- */}
      <div className="referral-card">
        <div className="referral-card-header">
          <h2>Cart Discount</h2>
        </div>

        <div className="referral-cart-row">
          <div className="referral-field">
            <div className="referral-input-row">
              <input
                readOnly
                className="referral-input"
                value={
                  selectedProduct?.cartDiscountCode
                    ? selectedProduct.cartDiscountCode
                    : "DRLIAM2374"
                }
              />
              <button
                type="button"
                className="referral-primary-btn"
                onClick={() =>
                  handleCopy(selectedProduct?.cartDiscountCode || "DRLIAM2374")
                }
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <div className="referral-note">
          Note: Share this Link/Coupon with your patient. For every purchase
          someone makes using your Link/Coupon, you get credit.
        </div>
      </div>
    </div>
  );
};

export default ReferralTool;
