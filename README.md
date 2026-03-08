# GENX Backend Coding Test

Backend API for course scheduling and invoice calculation.

## Tech Stack

- Node.js
- Express.js
- Zod (validation)
- Dayjs (date handling)
- Jest (unit testing)

Timezone: **Asia/Ho_Chi_Minh**  
Date format: **YYYY-MM-DD**

---

# Project Structure
### Architecture

- **Controllers** → Handle HTTP request/response
- **Services** → Business logic
- **middleware** -> ValidateRequest
- **Validators** → Request validation
- **Utils** → Helper functions
- **Tests** → Unit tests using Jest

---

# Installation

Clone repository

```bash
git clone https://github.com/truongly2003/BackendTest.git
cd genx-backend-test
```

Install dependencies

```bash
npm install
```

Run server

```bash
npm start
```
Server runs on:

```
http://localhost:3000
```

---

# Run Tests

```bash
npm run test
```

# API Endpoints

## 1. Generate Class Schedule

**POST**

```
http://localhost:3000/api/schedule/generate

```

### Request

```json
{
  "startDate": "2026-01-01",
  "totalClasses": 16,
  "classWeekdays": [1,3],
  "holidays": ["2026-04-30","2026-05-01"],
  "holidayRanges": [["2026-01-26","2026-02-05"]]
}
```

### Response

```json
{
  "endDate": "2026-03-05",
  "fullSchedule": [
    "2026-01-01",
    "2026-01-06",
    "2026-01-08",
    "..."
  ]
}
```

# 2. Invoice Calculation

**POST**

```
http://localhost:3000/api/invoice/calc

```

### Request

```json
{
  "courseType": "MONTHLY",
  "basePrice": 1500000,
  "months": 2,
  "promoCode": "SAVE10",
  "canceledClasses": 1,
  "refundPerClass": 40000
}
```

### Response

```json
{
  "subtotal": 3000000,
  "discount": 300000,
  "refund": 40000,
  "total": 2660000
}

---

# Timezone Handling

All date operations use:

```
Asia/Ho_Chi_Minh
```

Date format:

```
YYYY-MM-DD
```

---

# Author

Backend Coding Test Ly Van Truong
