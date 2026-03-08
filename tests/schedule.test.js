import  scheduleService  from "../src/services/scheduleService.js"

describe("Schedule generator", () => {

  test("generate basic schedule", () => {
    const r = scheduleService.generate({
      startDate: "2026-01-01",
      totalClasses: 3,
      classWeekdays: [1,3],
      holidays: [],
      holidayRanges: []
    })

    expect(r.fullSchedule.length).toBe(3)
  })

  test("skip holiday date", () => {
    const r = scheduleService.generate({
      startDate: "2026-01-01",
      totalClasses: 3,
      classWeekdays: [4],
      holidays: ["2026-01-08"],
      holidayRanges: []
    })

    expect(r.fullSchedule.includes("2026-01-08")).toBe(false)
  })

  test("skip holiday range (inclusive)", () => {
    const r = scheduleService.generate({
      startDate: "2026-01-01",
      totalClasses: 3,
      classWeekdays: [4],
      holidays: [],
      holidayRanges: [
        { start: "2026-01-01", end: "2026-01-10" }
      ]
    })

    expect(r.fullSchedule[0]).not.toBe("2026-01-01")
  })

  test("holiday range inclusive end", () => {
    const r = scheduleService.generate({
      startDate: "2026-01-01",
      totalClasses: 2,
      classWeekdays: [4],
      holidays: [],
      holidayRanges: [
        { start: "2026-01-08", end: "2026-01-08" }
      ]
    })

    expect(r.fullSchedule.includes("2026-01-08")).toBe(false)
  })

  test("startDate inside holiday range", () => {
    const r = scheduleService.generate({
      startDate: "2026-01-01",
      totalClasses: 2,
      classWeekdays: [4],
      holidays: [],
      holidayRanges: [
        { start: "2026-01-01", end: "2026-01-05" }
      ]
    })

    expect(r.fullSchedule[0]).not.toBe("2026-01-01")
  })

  test("duplicate weekdays should not break schedule", () => {
    const r = scheduleService.generate({
      startDate: "2026-01-01",
      totalClasses: 3,
      classWeekdays: [4,4,4],
      holidays: [],
      holidayRanges: []
    })

    expect(r.fullSchedule.length).toBe(3)
  })

})