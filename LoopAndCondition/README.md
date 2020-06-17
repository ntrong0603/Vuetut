Loop And Condition

vòng for có độ ửu tiên cao hơn if (Vòng for đi chung với if): nên tạo compoted để tính toán trước khi render

Khi thêm phần tử vào mảng hoặc obj
- Trong vuejs không thêm phần từ một cách vô tội vạ vào mảng hoặc obj được và hệ thống phản ứng của vuejs không hoạt động
+ mà phải sử dụng push hoặc hàm của vuejs app.$set(app.arrNumber, 0, 30000)

=> lỗi thường xảy ra khi thay đổi dữ liệu trong mảng hoặc obj (liên quan đến bộ nhớ)

vd: app.arrNumber[7] = 1000 (bad)

    app.arrNumber.push(1000) (good)
    app.$set(app.arrNumber, 7,1000) (good)