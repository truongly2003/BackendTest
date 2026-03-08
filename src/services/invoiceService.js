const calc = ({
  courseType,
  basePrice,
  months,
  promoCode,
  canceledClasses,
  refundPerClass,
}) => {
  let subtotal = 0;

  if (courseType === "MONTHLY") {
    subtotal = basePrice * (months || 0);
  }

  if (courseType === "FULL_COURSE") {
    subtotal = basePrice;
  }

  // giảm giá
  let discount = 0;

  if (promoCode === "SAVE10") {
    discount = Math.floor(subtotal * 0.1);
  }

  if (promoCode === "FLAT50K") {
    discount = 50000;
  }

  if (discount > subtotal) {
    discount = subtotal;
  }

  // hoàn tiền
  const refund = (canceledClasses || 0) * (refundPerClass || 0);

  let total = subtotal - discount - refund;

  if (total < 0) total = 0;

  return {
    subtotal,
    discount,
    refund,
    total,
  };
};

export default { calc };
