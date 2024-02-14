const staffContainer = document.querySelector(".staff-container");
const newStaffTxt = document.querySelector("#new-staff-txt");
const addBtn = document.getElementById("add-btn");

let hogwartsStaff; //global variable

//Read
async function fetchStaff() {
  const hogwartsStaffRequest = await fetch(
    "https://hp-api.onrender.com/api/characters/staff"
  );

  let result = await hogwartsStaffRequest.json(); //return array

  return result;
}

//onsole.log(fetchStaff());

async function fetchAndShowStaff() {
  try {
    hogwartsStaff = await fetchStaff();
    //console.log("Inne i fetchAndShowStaff", hogwartsStaff);
    showAllStaff();
  } catch {
    console.error("Oops, klarte ikke laste ned Hogwarts", error);
  }
}

fetchAndShowStaff();

//Read for å vise frem alle ansatte
function showAllStaff() {
  hogwartsStaff.forEach((staffMember, index) => {
    const staffCard = document.createElement("div");

    //Slett/Delete
    const deleteBtn = document.createElement("button");

    staffCard.innerHTML = `<img src="${staffMember.image}" style="width: 100px"/> <h3>${staffMember.name}</h3>`;
    console.log(staffMember.name);
    staffContainer.append(staffCard);
  });
}
