/**
 * Người dùng họ truy cập vào
 * vi, en, jp, ng....
 */

const transSelected = 'vi';

// function trans(language) {
//   if (language === 'vi') {
//     if () {

//     } else if () {

//     }
//     return {
//       sayHi: 'Xin chào',
//       sayBye: 'Bye bye'
//     }
//   } else if (language === 'en') {
//     return {
//       sayHi: 'Hello',
//       sayBye: 'See you later!',
//     };
//   } else if (language === 'jp') {
//     return {
//       sayHi: 'jp sayHi',
//       sayBye: 'jp sayBye',
//     };
//   }
// }

function trans(language) {
  switch (language) {
    case 'vi':
      return {};
    case 'en':
      return {};
    case 'jp':
      return {};
    default:
      return {

      }
  }
}

const messages = trans(transSelected);
console.log(messages);

// BT: https://phanmemcntt.com/bai-tap-ve-switch-case-trong-c-c/
