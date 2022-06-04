const readline = require('readline');
const colors = require('colors')
//const { evaluate } = require("mathjs");
//let trouver;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();
function question() {
  console.log(`Tu veux faire défilé des nombres premiers ? (1) Tu veux voir si un nombre est premier ? (2) Tu veux savoir quel est le x nombre premier ? (3) Tu veux des informations sur un nombre ? (4):`.yellow)
  rl.question("", function(user) {
    var response = user
    if(user == '1') {
      rl.question("Jusqu'à quel nombre voulez-vous que je chereche ? (0 = infini) ", function(u) {
        console.clear()
        findit(u)
      })
    }
    else if(user == '2') {
    rl.question("Ton nombre ? ", function(password) {
        console.clear()
        premierit(password)
    })
    }
    else if(user == '3') {
    rl.question("Ton nombre ? ", function(password2) {
        console.clear()
        trouveur(password2)
    })
    }
    else if(user == '4') {
    rl.question("Ton nombre ? ", function(password3) {
        whatisyournumber = password3
        nombers(password3)
    })
    }
    else {
      console.log("Réponse invalide")
      return question()
    }
});
}

function findit(all) {
  const date1 = Date.now()
  let number = []
  let liste = []
  let all2;
  if(isNaN(all)) {
    console.log("Tu dois mettre un nombre valide !")
    question()
    return
  }
  if(all > 0) {
    for(i=2;i<=all;i++) {
        if(number.length == 0) {
        n = [i]
        na = number.concat(n)
        number = na
        }
        if(!number.includes(i)) {
            let baha = false;
            for(l=0;l<=number.length/2+1;l++) {
                if(i%number[l] == 0) {
                    baha = true
                    break
                }
            }
            if(baha == false) {
                n = [i]
                na = number.concat(n)
                number = na
                console.log(`${i}`.green)
            }
        }
    } 
} else if(all == 0) {
    for(i=2;i>all;i++) {
        if(number.length == 0) {
        n = [i]
        na = number.concat(n)
        number = na
        }
        if(!number.includes(i)) {
            let baha = false;
            for(l=0;l<=number.length/2+1;l++) {
                if(i%number[l] == 0) {
                    baha = true
                    break
                }
            }
            if(baha == false) {
                n = [i]
                na = number.concat(n)
                number = na
                console.log(`${i}`.green)
            }
        }
    }   
}
let date2 = Date.now()
console.log()
console.log(`Résultat en ${(date2 - date1)/1000}s`)
console.log()
question()
}
function premierit(premierit) {
  const date1 = Date.now()
  let myliste = []
  let breaks = true
  let ni;
  if(isNaN(premierit)) {console.log("Tu dois mettre un nombre valide !"); return question()}
  console.log("Je commence à chercher...")
  if(premierit<0) {console.log(`${premierit} n'est pas un nombre premier, il est négatif !`.red); return question()}
  if(premierit==0) {console.log(`${premierit} n'est pas un nombre premier !`.red); return question()}
  if(premierit==1) {console.log(`${premierit} n'est pas un nombre premier !`.red); return question()}
  for(i=2;i<premierit/2+1;i++) {
    if(premierit%i == 0) {
      breaks = false
      ni = i
      break
    }
  }
  let date2 = Date.now()
  if(breaks == false) {
    console.log(`Résultat en ${date2 - date1}ms`)
    console.log(`${premierit} n'est pas un nombre premier, il est divisble par ${ni} !\n${premierit + ' / ' + ni + ' = ' + premierit/ni}`.red)
    console.log()
    return question()
  }
  else 
  {
    console.log(`Résultat en ${date2 - date1}ms`)
    console.log(`${premierit} est un nombre premier !`.green)
    console.log()
    return question()
  }
}
function trouveur(result) {
  let number = []
  let all = 6000
  let liste = []
  if(isNaN(result)) {console.log("Tu dois mettre un nombre valide !"); return question()}
  if(result < 1) {console.log("Ton nombre doit être supérieur a 1 !"); return question()}
  let eme;
  if(result == 1) eme = 'er'
  else eme = 'ème' 
  for(i=2;i<all;i++) {
    if(number.length == 0) {
      n = [i]
      na = number.concat(n)
      number = na
    }
    else if(number.length == result) {
      console.log(`${number[result-1]} est le ${result}${eme} nombre premier !`.green)
      console.log()
      return question()
    }
    if(!number.includes(i)) {
      let baha = false;
      for(y=0;i>=liste.length;y++) {
        if(!liste.includes(y)) {
          nliste = [y]
          naliste = liste.concat(nliste)
          liste = naliste
        }
      }
      number.forEach(numb => {
      if(i%numb === 0) {
        baha = true
      }
      })
      if(baha == false) {
        n = [i]
        na = number.concat(n)
        number = na
      }
    }
}
}
















function nombers(nombre) {
  let carré = nombre*nombre
  let racine;
  let listehm = []
  if(!nombre.startsWith('-')) {
  for(i=1;i<=nombre/2;i++) {
    if(nombre%i == 0) {
      niiliste = [i]
      niialiste = listehm.concat(niiliste)
      listehm = niialiste
    }
  }
  listehm.push(nombre)
  racine = Math.sqrt(nombre)
  }
  else {
    listehm.push('Impossible de calculer')
    racine = 'Impossible de calcluer'
  }
  
  var f = [];
  var mynumber = nombre
  let nombre2 = nombre
  function test(x) {
    if(x !== 1) {
    if(nombre2 % x == 0) {
      
      let myliste = []
      let breaks = true
      let ni;
      if(isNaN(x)) return console.log("Tu dois mettre un nombre valide !")
      for(i=2;i<x/2+1;i++) {
        if(x%i == 0) {
          breaks = false
          ni = i
          break
        }
      }
      if(breaks == true) {

      f.push(x)
      nombre2 = nombre2/x
      test(x)
      }
    }
  }
  }
  let myi = 0
  if(!nombre.startsWith('-')) {
  for(i=0;myi<=listehm.length;i++) {
    test(listehm[myi])
    myi++
  }
  }
  else f.push("Impossible de calculer")
  let cube = nombre**nombre
  if(cube === Infinity) cube = 'nombre trop grand pour être calculer !'
  let premierptdr
  if(!nombre.startsWith('-')) {
  if(listehm.length === 1) {
    premierptdr = 'oui'
  }
  else {
    premierptdr = 'non'
  }
  } else premierptdr = 'non'

  let log;
  if(nombre.startsWith('-')) {
    log = 'Impossible de calculer'
  }
  else if(nombre === '0') log = 'log(0) est impossible';
  else {
    log = Math.log(nombre)
  }
  let abs = Math.abs(nombre)
  let inverse;
  console.clear()

  console.log(`Le nombre: ${nombre}\n\nLe carré: ${carré}\n\nLa racine carré: ${racine}\n\nSes diviseurs: ` + listehm.join(" ,") + `\n\nDécomposition en facteurs premier: ${f.join("x")}\n\nEst-il premier ? ${premierptdr}\n\n${nombre} élevé à la puissance ${nombre} est: ${cube}\n\nLogarithme de ${nombre}: ${log}\n\nValeur absolue de ${nombre}: ${abs}`)
  console.log(`\n\n`)
  return question()
}
question()