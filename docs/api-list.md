## Courses
POST /api/courses
GET /api/courses
GET /api/courses/:id

## Classes
POST /api/classes
GET /api/classes
GET /api/classes/:id

## ScheduleSession
POST /api/schedules
GET /api/classes/:classId/schedules

## Enrollments
POST /api/enrollments
PATCH /api/enrollments/:id/status
GET /api/students/:studentId/enrollments

## Payments
POST /api/payments
GET /api/payments
GET /api/payments/:id

## Attendance
POST /api/attendance
GET /api/classes/:classId/attendance

## Service Requests
POST /api/service-requests
GET /api/service-requests
PATCH /api/service-requests/:id/status