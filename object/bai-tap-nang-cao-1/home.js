const loginEmail = localStorage.getItem('login');
if (!loginEmail) {
    location.href = 'http://127.0.0.1:5500/object/bai-tap-nang-cao-1/login.html';
}

const $logoutBtn = document.querySelector('#logoutBtn');
$logoutBtn.addEventListener('click', function() {
    if (confirm('Bạn có chắt chắn muốn đăng xuất không?')) {
        localStorage.removeItem('login');
        location.href = 'http://127.0.0.1:5500/object/bai-tap-nang-cao-1/login.html';
    }
});
