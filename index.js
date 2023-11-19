function updateSkill(skillId, vstup) {
    const skillElement = document.getElementById(skillId)
    const skillProgress = skillElement.querySelector('.skill__progress')
    const skillValue = skillElement.querySelector('.skill__value')
 
    skillProgress.style.width = vstup + '%'
    skillValue.textContent = vstup + ' / 100'
  }
  
const dovednostHTML = Number(prompt("Zadej svou úroveň znalosti HTML od 1 do 100:"))
const dovednostCSS = Number (prompt("Zadej svou úroveň znalosti CSS od 1 do 100:"))
const dovednostJS = Number (prompt("Zadej svou úroveň znalosti JavaScript od 1 do 100:"))
 
updateSkill('skill1', dovednostHTML)
updateSkill('skill2', dovednostCSS)
updateSkill('skill3', dovednostJS)