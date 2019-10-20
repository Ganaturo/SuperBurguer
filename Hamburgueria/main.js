// function typeWriter(elemento) { //criamos a função  3
//     const textoArray = elemento.innerHTML.split('');     //criamos uma array selecionando uma letra para 
//                                                          //cada ojeto   4
//     elemento.innerHTML = '';  //trocamos o texto original do html para nada  5
//     textoArray.forEach((letra, i) => {  //mandamos uma letra para cada index  6
//       setTimeout(() => elemento.innerHTML += letra, 75 * i);  //printamos a cada 75 uma letra na tela  7
//     });
//   }

  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
      setTimeout(() => elemento.innerHTML += textoArray[i], 200 * i);
    }
  }

  const titulo = document.querySelector('#texto');  //Aqui onde tudo começa, Selecionamos o texto    1
  typeWriter(titulo);   //Enviamos o texto selecionado para a função   2