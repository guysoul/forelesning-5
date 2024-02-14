let hogwartsStaff; //global variable

//Read
async function fetchStaff() {
  const hogwartsStaffRequest = await fetch(
    "https://hp-api.onrender.com/api/characters/staff"
  );

  let result = await hogwartsStaffRequest.json(); //return array

  return result;
}

console.log(fetchStaff());

async function fetchAndShowStaff() {
  try {
    hogwartsStaff = await fetchStaff();
  } catch {
    console.error("Oops, klarte ikke laste ned Hogwarts", error);
  }
}
