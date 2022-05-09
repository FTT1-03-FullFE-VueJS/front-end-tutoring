const users = [
    {
        id: 1,
        name: 'user 1'
    },
    {
        id: 2,
        name: 'user 2'
    },
    {
        id: 3,
        name: 'user 3'
    },
];

/**
 * Yêu cầu 1: cập nhật tất cả những tên của user thành tên cũ + 'update'
 * Yêu cầu 2: thêm lớp học cho mỗi user, tên lớp học chính bằng id của user
 * - Callback function:
 *   + Nếu một function mà là tham số của một function khác thì function tham số đó được gọi là callback function
 */

const userUpdated = users.map(function(item) {
    return {
        id: item.id,
        name: item.name + ' ' + 'update',
        class: item.id
    }
});

console.log(userUpdated);
