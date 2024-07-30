
console.log("what?")

function handelSubmit (event) {

    let firstname = document.querySelector('#firstNameInput').value;
    let lastName = document.querySelector('#lastNameInput').value;
    let id = document.querySelector('#idInput').value;
    let title = document.querySelector('#titleInput').value;
    let annual = document.querySelector('#annualSalaryInput').value;

    // let newMembers = {
    //     FirstName: Firstname,
    //     LastName: lastName,
    //     ID: id,
    //     Tittle: title,
    //     Annual: annual
    // }
// console.log(newMembers);


let displayTable = document.querySelector('#displayTable')

let tableRow = document.createElement('tr');

tableRow.innerHTML +=
`
<td> ${firstname} </td>
<td> ${lastName}</td>
<td> ${id} </td>
<td>${title} </td>
<td> ${annual}</td>
<td><button class="delete-button" onclick="deleted(event)"> delete </button></td>

`;

displayTable.append(tableRow);


document.querySelector('#firstNameInput').value = '';
 document.querySelector('#lastNameInput').value = '';
  document.querySelector('#idInput').value = '';
document.querySelector('#titleInput').value = '';
document.querySelector('#annualSalaryInput').value = '';


monthlyMoney();

}





const submitButton = document.querySelector('#submitButton');
console.log(submitButton);
submitButton.addEventListener("click", handelSubmit);












function monthlyMoney() {


  let annualSalaries = document.querySelectorAll('#displayTable tr td:nth-child(5)');

  let salaries = [];
        for (let cash of annualSalaries) {

          let money = cash.textContent.replace('$', '').replace(',', '');
          let salary = Number(money);
          salaries.push(salary);
        }


        let totalAnnualSalaries = 0;
        for (let salary of salaries) {
            totalAnnualSalaries += salary;
        }


        let totalMonthly = totalAnnualSalaries / 12;
        let note = document.querySelector('#foot-note');
        // if (footerNote.innerHTML !== 2){
        //   footerNote
        // }
        console.log(totalMonthly);


        let footerNote = document.createElement('div');

        note.innerHTML = ' ';

        footerNote.textContent = 
        `
          Total Monthly: ${totalMonthly} 
        
        `;
        
        note.append(footerNote);


        if (totalMonthly > 20000) {
          footerNote.classList.add("over-budget")
      } else {
          footerNote.classList.remove("over-budget")
      }
    
    }

    
monthlyMoney();



function deleted(event) {
  console.log("worked");
  let deletedRow = event.target.parentElement.parentElement;
  //leanred about event target.
  console.log(deletedRow);
  deletedRow.remove();
  let test = event.target.closest('tr');
  let test2 = test.children[4].textContent;
  console.log(test2);
  console.log(test2 - 3);
  }


let deletebutton = document.querySelectorAll('.delete-button')



// deletebutton.addEventListener('click', deleted);






// m.forEach(btn => btn.addEventListener('click', function deleted(event) {
//   let deletedRow = btn.parentElement.parentElement;
//   deletedRow.remove();
//   // alert("worked");
//   // console.log('lol');
//   } ))

  




