const students = [
  { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
  { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
  { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
  { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
  { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
  { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function round1(num) {
  return Math.round(num * 10) / 10;
}

function getRank(avg) {
  if (avg >= 8.0) return "Giỏi";
  if (avg >= 6.5) return "Khá";
  if (avg >= 5.0) return "Trung bình";
  return "Yếu";
}

let countGioi = 0;
let countKha = 0;
let countTrungBinh = 0;
let countYeu = 0;

let maxStudent = null;
let minStudent = null;

let sumMath = 0;
let sumPhysics = 0;
let sumCS = 0;

let sumAvgMale = 0;
let sumAvgFemale = 0;
let countMale = 0;
let countFemale = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
  let s = students[i];

  let avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;
  avg = round1(avg);

  let rank = getRank(avg);

  if (rank === "Giỏi") countGioi++;
  else if (rank === "Khá") countKha++;
  else if (rank === "Trung bình") countTrungBinh++;
  else countYeu++;

  if (maxStudent === null || avg > maxStudent.avg) {
    maxStudent = { name: s.name, avg: avg };
  }

  if (minStudent === null || avg < minStudent.avg) {
    minStudent = { name: s.name, avg: avg };
  }

  sumMath += s.math;
  sumPhysics += s.physics;
  sumCS += s.cs;

  if (s.gender === "M") {
    sumAvgMale += avg;
    countMale++;
  } else if (s.gender === "F") {
    sumAvgFemale += avg;
    countFemale++;
  }

  let stt = (i + 1).toString().padEnd(3, " ");
  let name = s.name.padEnd(6, " ");
  let tb = avg.toFixed(1).padEnd(4, " ");
  let rankText = rank.padEnd(11, " ");

  console.log(`| ${stt} | ${name} | ${tb} | ${rankText} |`);
}

console.log("");

console.log("Số SV theo xếp loại:");
console.log("Giỏi:", countGioi);
console.log("Khá:", countKha);
console.log("Trung bình:", countTrungBinh);
console.log("Yếu:", countYeu);

console.log("");

console.log("SV có TB cao nhất:", maxStudent.name, "-", maxStudent.avg);
console.log("SV có TB thấp nhất:", minStudent.name, "-", minStudent.avg);

console.log("");

let avgMath = round1(sumMath / students.length);
let avgPhysics = round1(sumPhysics / students.length);
let avgCS = round1(sumCS / students.length);

console.log("Điểm TB toàn lớp theo môn:");
console.log("Math:", avgMath);
console.log("Physics:", avgPhysics);
console.log("CS:", avgCS);

console.log("");

console.log("Điểm TB theo giới tính:");
if (countMale > 0) console.log("Nam:", round1(sumAvgMale / countMale));
if (countFemale > 0) console.log("Nữ:", round1(sumAvgFemale / countFemale));