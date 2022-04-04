function checkPrime(n) {
  let isPrime = true;

  if (n <= 1) {
    isPrime = false;
  }

  // Số nguyên tố chỉ chia hết cho 1 và chính nó
  // n = 7 => 7 % 1 = 0 && 7 % 7 = 0
  // n = 7 => 2 3 4 5 6
  // n / 2 = 0
  // n / 3
  // n / 4
  // n / 5
  // n / 6
  // 7 % 1 = 0 and 7 % 2 = 0 and 7 % 7 = 0
  // 1 2 3 4 5 6 7 8 9
  // => n = 9
  //
  // 2, 3, 4, 5, 6, 7, 8
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(n + ' la so nguyen to');
  } else {
    console.log(n + ' khong la so nguyen to');
  }
}

checkPrime(97);
