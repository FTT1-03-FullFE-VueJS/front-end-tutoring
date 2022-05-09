/**
 * B1: Mở màn hình register
 * B2: Nhập dữ liệu vào form
 *     - email, password, confirm_password
 * B3: Lấy dữ liệu từ form lên
 *     - email, password, confirm_password
 * B4: Validate dữ liệu
 *     - Validate email
 *     - Validate password
 *     - Validate confirm_password
 *    -> Nếu dữ liệu sai: hiển thị thông báo người dùng
 * B5: Gửi dữ liệu lên server
 * B6: Lưu dữ liệu ở đâu đó (LocalStorage)
 * B7: Chuyển người dùng qua trang login
 */
import Server from './server.js';

const Register = {
    // Object này dùng để lưu danh sách người đăng ký
    users: [],

    handleRegister: function() {
        let emailValue = Register.$emailRegister.value;
        let passwordValue = Register.$passwordRegister.value;
        let passwordConfirmValue = Register.$passwordConfirmRegister.value;

        let isValid = true;

        if (emailValue.trim().length === 0) {
            isValid = false;
            alert('Nhap email');
        }
        if (passwordValue.trim().length === 0) {
            isValid = false;
            alert('Nhap password');
        }
        if (passwordConfirmValue.trim().length === 0) {
            isValid = false;
            alert('Nhap password confirm');
        }
        if (passwordValue.trim().length > 0 && passwordConfirmValue.trim().length > 0) {
            if (passwordValue !== passwordConfirmValue) {
                isValid = false;
                alert('Mat khau xac nhan khong khop');
            }
        }

        if (isValid) {
            const account = {
                email: emailValue,
                password: passwordValue
            }
            const response = Server.saveRegister(account);
            if (response.status === 201) {
                console.log('Register successfully!');
                location.href = 'http://127.0.0.1:5500/object/bai-tap-nang-cao-1/login.html';
            }
        }
    }
}

Register.$emailRegister = document.querySelector("#email");
Register.$passwordRegister = document.querySelector("#password");
Register.$passwordConfirmRegister = document.querySelector("#password_confirm");
Register.$btnRegister = document.querySelector("#btnRegister");

Register.$btnRegister.addEventListener('click', function(e) {
    // click -> reload browser
    e.preventDefault();
    Register.handleRegister();
});
