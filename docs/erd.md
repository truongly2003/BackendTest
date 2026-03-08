- Hệ thống tách Course (Khóa học) và Class (Lớp học) vì một khóa học có thể có nhiều lớp khác nhau.

- Học viên đăng ký lớp thông qua bảng Enrollment (Đăng ký). Bảng này dùng để giải quyết mối quan hệ nhiều-nhiều (many-to-many) giữa Student và Class

- Bảng Payment (Thanh toán) được liên kết với Enrollment vì việc thanh toán được thực hiện cho một lần đăng ký lớp cụ thể và có thể xảy ra nhiều lần (ví dụ: đóng tiền theo tháng).

- Bảng ScheduleSession (Buổi học) lưu lịch học chi tiết của từng lớp, vì mỗi lớp sẽ bao gồm nhiều buổi học khác nhau.

- Bảng User (Người dùng) được chung cho nhiều vai trò như student, teacher, staff, manager

- Bảng ServiceRequest hỗ trợ dịch vụ công nghệ của công ty, cho phép khách hàng gửi yêu cầu, sau đó nhân viên sẽ tiếp nhận và xử lý các yêu cầu này.

- Bảng Attendance để điểm danh, liên kết giữa Enrollment(xác định học viên trong lớp) và ScheduleSession(xác định buổi học)