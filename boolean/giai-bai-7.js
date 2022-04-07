/**
 * Input:
 *  + typeof int
 *  + info: Danh sách các điểm của một học sinh
 *
 * Output:
 *  + typeof string
 *  + info: Học lực của học sinh
 */

/**
 * Xếp hạng học lực của học sinh dựa vào các điểm bài thi
 *
 * @param {int} diem1tiet_1
 * @param {int} diem1tiet_2
 * @param {int} diemgiuaky
 * @param {int} diemcuoiky
 *
 * @returns string
 */
 function xep_hang_hoc_luc(diem1tiet_1, diem1tiet_2, diemgiuaky, diemcuoiky) {
  // diem1tiet_1 = diem1tiet_1 * 2; // 2
  // diem1tiet_2 = diem1tiet_2 * 2; // 2
  // diemgiuaky  = diemgiuaky  * 3; // 3
  // diemcuoiky  = diemcuoiky  * 4; // 4

  const diem_trung_binh = (diem1tiet_1 * 2 + diem1tiet_2 * 2 + diemgiuaky * 3 + diemcuoiky * 4) / 11;//

  console.log(diem_trung_binh);

  if (diem_trung_binh <= 5) {
    return "học sinh yếu";
  } else if (5 < diem_trung_binh && diem_trung_binh < 6.5) {
    return "học sinh trung bình";
  } else if (6 <= diem_trung_binh && diem_trung_binh < 8) {
    return "học sinh khá";
  } else {
    return "học sinh giỏi";
  }
}

const xep_loai = xep_hang_hoc_luc(7, 7, 7, 7);

console.log(xep_loai);
