/**
 *
 * @param {*} mark
 * @returns gpa, grade
 */
const getResult = (mark) => {
  let gpa;
  let grade;
  if (mark >= 0 && mark < 33) {
    gpa = 0;
    grade = "F";
  } else if (mark >= 33 && mark < 40) {
    gpa = 1;
    grade = "D";
  } else if (mark >= 40 && mark < 50) {
    gpa = 2;
    grade = "C";
  } else if (mark >= 50 && mark < 60) {
    gpa = 3;
    grade = "B";
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
    grade = "A-";
  } else if (mark >= 70 && mark < 80) {
    gpa = 4;
    grade = "A";
  } else if (mark >= 80 && mark <= 100) {
    gpa = 5;
    grade = "A+";
  } else {
    gpa = "Invalid";
    grade = "Invalid";
  }
  return {
    gpa,
    grade,
  };
};

/**
 *
 * @param {*} message
 * @param {*} type
 * @returns
 */
const createAlert = (message, type = "danger") => {
  return `
        <div class="alert alert-${type} alert-dismissible fade show mt-2 mb-0" role="alert">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <p class="m-0"> ${message}</p>
          </div>
    `;
};

const isNumber = /^[0-9]{1,3}$/;
