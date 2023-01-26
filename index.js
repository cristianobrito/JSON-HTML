const petsData = [
 {
    name:"Reminho",
    species:"Cat",
    favFoods:["wet food", "dry food", "<strong>any</strong> food"],
    birthYear:2017,
    photo:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-worshipped-animals-1559234295.jpg"
 },
 {
    name:"Pingolento",
    species:"Dog",
    birthYear:2008,
    photo:"https://www.midwesthomes4pets.com/wp-content/uploads/shutterstock_1335588305.png"
 },
 {
    name:"Snoop",
    species:"Dog",
    favFoods:["wet food", "dry food", "<strong>any</strong> food"],
    birthYear:2017,
    photo:"https://blog.cobasi.com.br/wp-content/uploads/2021/04/pinscher-bravo-capa.png"
 }
];

function age(birthYear){
   let calculateAge = new Date().getFullYear() - birthYear;
   if(calculateAge == 1){
      return '1 year old'
   }else if(calculateAge == 0){
      return 'baby'
   }else{
      return `${calculateAge} years old` 
   }
}

function petTemplate(pet){
   return `
   <div class= "animal">
      <img class="pet-phto" src="${pet.photo}">
      <h2 class="pet-name">${pet.name} <spam class="species">(${pet.species})</spam></h2>
      <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
   </div>
`
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">Pets (${petsData.length} results)</h1>
${petsData.map(petTemplate).join('')}
<p class="footer">these (${petsData.length} adicionados recentemente)</p>
`
