import invoiceService from "../src/services/invoiceService.js";

describe("Invoice calculation", () => {

  test("MONTHLY with SAVE10", () => {
    const r = invoiceService.calc({
      courseType: "MONTHLY",
      basePrice: 1000000,
      months: 2,
      promoCode: "SAVE10",
      canceledClasses: 0,
      refundPerClass: 0
    });

    expect(r.total).toBe(1800000);
  });

  test("FULL_COURSE with FLAT50K", () => {
    const r = invoiceService.calc({
      courseType: "FULL_COURSE",
      basePrice: 2000000,
      months: null,
      promoCode: "FLAT50K",
      canceledClasses: 0,
      refundPerClass: 0
    });

    expect(r.total).toBe(1950000);
  });

  test("refund calculation", () => {
    const r = invoiceService.calc({
      courseType: "FULL_COURSE",
      basePrice: 2000000,
      months: null,
      promoCode: null,
      canceledClasses: 2,
      refundPerClass: 40000
    });

    expect(r.refund).toBe(80000);
  });

  test("no promo no refund", () => {
    const r = invoiceService.calc({
      courseType: "FULL_COURSE",
      basePrice: 2000000,
      months: null,
      promoCode: null,
      canceledClasses: 0,
      refundPerClass: 0
    });

    expect(r.total).toBe(2000000);
  });

  test("MONTHLY 3 months max", () => {
    const r = invoiceService.calc({
      courseType: "MONTHLY",
      basePrice: 500000,
      months: 3,
      promoCode: null,
      canceledClasses: 0,
      refundPerClass: 0
    });

    expect(r.total).toBe(1500000);
  });

  test("refund reduces total", () => {
    const r = invoiceService.calc({
      courseType: "FULL_COURSE",
      basePrice: 2000000,
      months: null,
      promoCode: null,
      canceledClasses: 1,
      refundPerClass: 50000
    });

    expect(r.total).toBe(1950000);
  });

});