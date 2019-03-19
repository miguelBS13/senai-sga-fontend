let sex = prompt("Digite seu sexo: ");

 if(sex =="homem"){
    let h = parseFloat(prompt("Digite sua altura: "));
     alert("Seu peso ideal é "+((72.7*h)-58));
  } else if(sex == "mulher"){
      let h = parseFloat(prompt("Digite sua altura: "));
    alert("Seu peso ideal é "+((62.1*h)-44.7));
  }