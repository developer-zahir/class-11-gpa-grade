
const form = document.querySelector("form");
const preloader = document.querySelector(".preloder");
const output = document.querySelector(".output");
const msg = document.querySelector(".msg");

form.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);

  preloader.style.display = "flex";
  msg.style.display = "none";
  setTimeout(function () {
    preloader.style.display = "none";
    if (!data.subject || !data.mark) {
      msg.style.display = "block";
      msg.innerHTML = createAlert("All fields are required");
    } else if (!isNumber.test(data.mark)) {
      msg.style.display = "block";
      msg.innerHTML = createAlert("Please ensure that the mark entered is a valid number.");
    } else {
      const result = getResult(data.mark);
      output.innerHTML = `
        <table class="table table-bordered table-hover mt-4">
          <thead class="table-active">
            <tr>
              <td colspan="2" class="text-center">Your Result is:</td>
            </tr>
          </thead>
          <tr>
            <td>Subject:</td>
            <td>${data.subject}</td>
          </tr>
          <tr>
            <td>Mark:</td>
            <td>${data.mark}</td>
          </tr>
          <tr>
            <td>GPA:</td>
            <td>${result.gpa}</td>
          </tr>
          <tr>
            <td>GRADE:</td>
            <td>${result.grade}</td>
          </tr>
        </table>
      `;
    }

    e.target.reset();
  }, 2000);
  
  msg.innerHTML = ''
  output.innerHTML = ''
};