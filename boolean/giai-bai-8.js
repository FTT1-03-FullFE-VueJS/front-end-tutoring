function giai_phuong_trinh(a, b, c) {
  if (a === 0) {
    // Giải phương trình bậc 1
    // pt: bx + c = 0 <=> x = -c/b
    if (b !== 0) {
      return (-c/b); // int
    } else {
      if (c !== 0) {
        return 'phương trình vô nghiệm'; // string
      } else {
        return 'phương trình có vô số nghiệm'; // string
      }
    }
  } else {
    // Giải phường trình bậc 2
    const den_ta = (b*b) - (4*a*c);
    if (den_ta < 0) {
      return 'phương trình vô nghiệm';
    } else if (den_ta === 0) {
      const nghiem_kep = -b/2*a;
      return {
        name: 'phương trình có 1 nghiệm kép',
        x1: nghiem_kep,
        x2: nghiem_kep
      }
    } else {
      const nghiem1 = (-b + Math.sqrt(den_ta)) / (2*a);
      const nghiem2 = (-b - Math.sqrt(den_ta)) / (2*a);
      return {
        name: 'phương trình có 2 nghiệm phân biệt',
        x1: nghiem1,
        x2: nghiem2,
      }
    }
  }
}

const result = giai_phuong_trinh(0, 0, 0);
// https://quantrimang.com/cach-giai-phuong-trinh-bac-2-176425

console.log(result);
