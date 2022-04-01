"use strict";

import { numbers, students, fluits } from "./data.js";

console.log(
  "과일 중에 배가 있나요?",
  fluits.some((fluit, index) => {
    console.log("index:", index, "fluit: ", fluit);
    return fluit === "배";
  })
);

console.log(
  "숫자에 7이상이 숫자가 있나요?",
  numbers.some((number) => number >= 8)
);

console.log(
  "수학 점수가 100점인 학생이 있나요?",
  students.some((student) => student.mathematics === 100)
);

console.log(
  "영어 점수가 50점 미만인 학생이 있나요?",
  students.some((student) => student.english < 50)
);
