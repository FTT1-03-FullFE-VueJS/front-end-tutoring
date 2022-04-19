/**
 * Viết một function có tên isEmpty
 * -> Trả về true nếu đối tượng mình truyền vào ko có thuộc tính
 * -> Trả về false nếu đối tượng mình truyền vào có thuộc tính
 */

 let schedule = {};

 /**
  * Check object is empty
  * @param object obj
  * @return bool
  */
 function isEmpty(obj) {
     console.log(Object.values(obj));
     if ( Object.values(obj).length === 0 ) {
         return true;
     } else {
         return false;
     }
 }

 /**
  * Object.values();
  * Object.keys();
  */


 // const result = isEmpty(schedule);
 // console.log(result); // true

 schedule["8:30"] = "get up";
 const result2 = isEmpty(schedule);
 console.log(result2); // true
