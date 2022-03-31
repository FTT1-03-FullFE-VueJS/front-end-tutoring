/**
 * Cách đặt tên function
 * - không được bắt đầu bằng một số, hay ký tự đặt biệt
 * - Không đặt tên hàm quá dài, (không dài quá 255)
 * - Không đặt tên hàm quá 20 ký tự
 * - Không đặt tên hàm bằng những ý nghĩa chung
 * - Đặt tên hàm bắt đầu [bằng chữ số], hoặc [_]
 * 2 Quy tắc riêng
 * - 2 cách đặt tên hàm
 * // camelCase showFullname
 * // snake_case show_fullname
 *
 * - Code trong một function không được dài quá [30 dòng]
 * - Một function chỉ làm một nhiệm vụ duy nhất
 */

/**
 * Kiểm trả user có quyền truy cập không
 * @returns {Boolean}
 */
function checkRole() {
  // Get user đang đăng nhập
  // Lấy role của user đang đăng nhập
  // Check role của user có hợp lệ không
  // Trả về true nếu hợp lệ ngược lại trả về false
  const user = getUser();
  const role = getRole(user);
  if (role.name === 'admin') {
    return true;
  }

  return false;
}

function getRole(user) {
  let listRole = [
    {
      id: 1,
      name: 'admin',
      user_id: 1,
    },
    {
      id: 2,
      name: 'editor',
      user_id: 2,
    }
  ];

  return listRole.filter(item.user_id === user.id);
}

function getUser() {
  return {
    id: 1,
    name: 'Nhan',
  }
}

if(checkRole() === true) {
  console.log('user co quyen truy cap');
} else {
  console.log('user khong co quyen truy cap')
}