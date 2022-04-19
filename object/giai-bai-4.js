let menu = {
  width: 200,
  height: 300,
  title: "My menu cafedev"
};

function multiplyNumeric(obj) {
  for (const [key, value] of Object.entries(obj)) {// ['width', 200] of ['width', 200]
    let newValue = value; // newValue = 200
    if (typeof value === 'string') { // number
      newValue = value;
    }
    if (typeof value === 'number') { // number
      newValue = value * 2; // newValue = 200 * 2 = 400
    }
    obj[key] = newValue; // obj['width'] <=> obj.width = 400
    // obj['key'] = newValue;// obj['key'] <=> obj.key
  }

  return obj;
}

const result = multiplyNumeric(menu);
/**
  menu = {
  width: 400,
  height: 600,
  title: "My menu cafedev"
};
*/
console.log(result);
