/**
 * Tạo một object Auth
 * - Auth sẽ có một property là users (Chứa danh sách user)'
 * - Auth có 4 method
 *        + method 1: register
 *        + method 2: login
 *        + method 3: forgotPassword
 *        + method 4: logout
 * - Tạo form đăng ký, form đăng nhập, form quên mật khẩu
 * 1. Nhiệm vụ 1 (Login):
 *   - luồn xử lý của chức năng login
 *      + b1: user mở màn hình login
 *      + b2: user nhập email, password
 *      + b3: kiểm tra email:
 *             + nếu ko nhập email báo lỗi: vui lòng nhập email
 *      + b4: kiểm tra password
 *             + nếu ko nhập password báo lỗi: vui lòng nhập password
 *      + b5: account mà user đã nhập có nằm trong danh sách user đã tạo không
 *             + nếu không tồn tại báo lỗi: account không tồn tại
 *             + nếu tồn tại thì chuyển hướng đến trang chủ
 *      + b6: lưu lại account (email, password) trong localStorage
 *      + b7: nếu user khi vào lại trang web thì mình kiểm tra nếu account đã có trong localStorage thì
 *             + chuyển hướng người dùng đến trang chủ luôn
 *             + nếu không tồn tại thì chuyển hướng người dùng đến trang login
 */