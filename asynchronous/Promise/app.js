/**
 * Promise có 3 trạng thái
 * - pending: initial state, neither fulfilled nor rejected.
 * - fulfilled: meaning that the operation was completed successfully
 * - rejected: meaning that the operation failed
 */

function fetchUsers() {
    // return Promise.resolve();
    // return Promise.reject();
    // return Promise.all();
    // return new Promise((resolve, reject);
    return new Promise((resolve, reject) => {
        /**
         * Khi mà thành công thì mình trả về resolve
         * Khi mà thất bại thì mình trả về reject
         *
         */
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Nhan', team_id: 1 },
                { id: 2, name: 'Hung', team_id: 1 },
                { id: 2, name: 'Hung', team_id: 1 },
            ];
            if (users.length >= 3) {
                return resolve(users);
            } else {
                return reject(new Error('Users must be greter than 3'));
            }
        }, 2000);
    });
}
// function fetchTeam() {

// }

// function fetchClass() {

// }

/**
 * then: Khi dữ liệu trả về là thành công thì nó sẽ chạy vào thaq then
 * catch: Khi dữ liệu trả về thất bại thì nó sẽ chạy vào thaq catch
 * finally: Cho dù dữ liệu trả về đúng hay sai đều chạy vào thaq finally
 */
// fetchUsers()
//     .then(function(response) {
//         fetchTeam()
//             .then(response => {
//                 fetchClass()
//                     .then(response => {
//                         fetchClass()
//                             .then(response => {
//                                 fetchClass()
//                                     .then(response => {

//                                     })
//                                     .catch(err => {

//                                     })
//                                     .finally(function() {
//                                         console.log('run finally');
//                                     });
//                             })
//                             .catch(err => {

//                             })
//                             .finally(function() {
//                                 console.log('run finally');
//                             });
//                     })
//                     .catch(err => {

//                     })
//                     .finally(function() {
//                         console.log('run finally');
//                     });
//             })
//             .catch(err => {

//             })
//             .finally(function() {
//                 console.log('run finally');
//             });
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
//     .finally(function() {
//         console.log('run finally');
//     });


/**
 * C2
 * try: Khi mà dữ liệu trả về đúng thì sẽ chạy trong thq try
 * catch: Khi mà dữ liệu trả về sai thì sẽ chạy trong thq catch
 */
async function showData() {
    try {
        const responseUser = await fetchUsers();
        const responseTeam = await fetchTeam();
        const responseClass = await fetchClass();
    } catch (err) {
        console.log(err);
    }
}

showData();
