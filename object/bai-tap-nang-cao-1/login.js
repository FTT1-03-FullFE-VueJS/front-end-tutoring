const Auth = {
    users: [],
    login: function(email, password) {
        let isValid = true;
        // Check email
        if (email.trim().length === 0) {
            isValid = false;
            alert('Vui long nhap email');
        }
        // Check password
        if (password.trim().length === 0) {
            isValid = false;
            alert('Vui long nhap password');
        }
        if (isValid) {
            if (Auth.checkLogin(email, password)) {
                location.href = 'http://127.0.0.1:5500/object/bai-tap-nang-cao-1/index.html';
                localStorage.setItem('login', email);
            } else {
                alert('Account không tồn tại');
            }
        }
    },
    checkLogin: function(email, password) {
        /**
         * Lập qua từng phần tử trong object users
         * kiểm tra có phần tử nào chứa email bằng với email mình truyền vào không
         *   + Nếu có -> password tại email đó có bằng với password mình truyền vào không
         *          + Nếu có: trả về true
         *          + Nếu không: trả về false
         *   + Nếu không -> trả về false
         */
        let hasAccount = false;
        Auth.users.forEach(function(item) {
            if (item.email === email && item.password === password) {
                hasAccount = true;
            }
        });

        // if (hasAccount) {
        //     return true;
        // } else {
        //     return false;
        // }
        return hasAccount;
    },
    wasLogin: function() {
        const emailLogin = localStorage.getItem('login');
        if (emailLogin) {
            location.href = 'http://127.0.0.1:5500/object/bai-tap-nang-cao-1/index.html';
        }
    },
    getAccount: function() {
        const accounts = localStorage.getItem('account');
        const accountsObj = JSON.parse(accounts);
        if (accountsObj !== null) {
            Auth.users.push(accountsObj);
        }
    }
};

Auth.getAccount();
Auth.wasLogin();
Auth.$emailLogin = document.querySelector('#email');
Auth.$passwordLogin = document.querySelector('#password');
Auth.$btnLogin = document.querySelector('#btnLogin');
Auth.$btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    Auth.login(Auth.$emailLogin.value, Auth.$passwordLogin.value);
});
