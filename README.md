# xbot_servo_control

Thư viện block riêng để điều khiển servo trên robot.

Dùng block cấu hình servo để chọn góc tối đa 180°, 270° hoặc 360° và góc khởi tạo (mặc định 90°) cho từng cổng S1–S8 trước khi điều khiển. Góc hiện tại được cập nhật khi servo được đặt hoặc di chuyển; dùng block “góc hiện tại của servo” để lấy giá trị này. Nếu không cấu hình, servo mặc định có giới hạn 180°. Tùy chọn 360° ở đây dành cho servo định vị theo góc, không phải servo quay liên tục.

Các khối điều khiển servo có thể quay tới một góc tuyệt đối hoặc xoay thêm một góc tương đối; cả hai khối đều có input tốc độ để điều khiển chuyển động mượt hơn.
