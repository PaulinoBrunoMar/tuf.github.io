function PovoaçãoInicialBD(){

	var firestore = firebase.firestore();

	/*----Internazionale------------------------------------------------------------------------------*/

		firestore.doc("Clube/Internazionale").set({
		    Vitórias: 25,
		    Empates: 8,
		    Derrotas: 10,
		    Jogos: 43,
		    GolsPró: 70,
		    GolsContra: 48,
		    ClassificaçãoGeral: "1º",
		    PontosPrioridadeContratação: 4,
		    PontosClassificaçãoGeral: 16,
		    NomeClube: "Internazionale",
		    Moedas: "0 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

	firestore.doc("Jogadores/Internazionale/DadosJogadores/Son").set({
		    Assistências: 13,
		    Gols: 16,
		    Nome: "Heung Min SON",
		    Posição: "sa",
		    NomeClube: "Internazionale",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Wilson").set({
		    Assistências: 2,
		    Gols: 8,
		    Nome: "Callum WILSON",
		    Posição: "ata",
		    Clube: "Internazionale",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Smolov").set({
		    Assistências: 3,
		    Gols: 1,
		    Nome: "Fedor SMOLOV",
		    Posição: "ata",
		    Clube: "Internazionale",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Neymar").set({
		    Assistências: 9,
		    Gols: 17,
		    Nome: "NEYMAR Jr",
		    Posição: "pe",
		    Clube: "Internazionale",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Gnabry").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Serge GNABRY",
		    Posição: "md",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Tello").set({
		    Assistências: 7,
		    Gols: 1,
		    Nome: "Cristian TELLO",
		    Posição: "me",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Valbuena").set({
		    Assistências: 2,
		    Gols: 0,
		    Nome: "Mathieu VALBUENA",
		    Posição: "me",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Bruno").set({
		    Assistências: 2,
		    Gols: 6,
		    Nome: "Bruno FERNANDES",
		    Posição: "mei",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Thiago").set({
		    Assistências: 3,
		    Gols: 4,
		    Nome: "Thiago MENDES",
		    Posição: "vol",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Kante").set({
		    Assistências: 2,
		    Gols: 1,
		    Nome: "N'Golo KANTÉ",
		    Posição: "vol",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Wass").set({
		    Assistências: 6,
		    Gols: 2,
		    Nome: "Daniel WASS",
		    Posição: "ld",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Guilavogui").set({
		    Assistências: 3,
		    Gols: 1,
		    Nome: "Josuha GUIILAVOGUI",
		    Posição: "vol",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Kessie").set({
		    Assistências: 3,
		    Gols: 4,
		    Nome: "Franck Yannick KESSIÉ",
		    Posição: "mc",
		    Clube: "Internazionale",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Tierney").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Kieran TIERNEY",
		    Posição: "le",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Kolasinac").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sead KOLASINAC",
		    Posição: "le",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Walker").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kyle WALKER",
		    Posição: "ld",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Rafael").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "RAFAEL Pereira",
		    Posição: "ld",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Militao").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Éder MILITÃO",
		    Posição: "zag",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Laporte").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Aymeric LAPORTE",
		    Posição: "zag",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Toprak").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ömer TOPRAK",
		    Posição: "zag",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Ake").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nathan AKÉ",
		    Posição: "zag",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internazionale/DadosJogadores/Dmitrovic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Marko DMITROVIC",
		    Posição: "gol",
		    Clube: "Internazionale",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Arsenal------------------------------------------------------------------------------*/

		firestore.doc("Clube/Arsenal").set({
		    Vitórias: 6,
		    Empates: 7,
		    Derrotas: 21,
		    Jogos: 34,
		    GolsPró: 34,
		    GolsContra: 63,
		    ClassificaçãoaGeral: "4º",
		    PontosPrioridadeContratação: 0,
		    PontosClassificaçãoGeral: 2,
		    NomeClube: "Arsenal",
		    Moedas: "0 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Aboubakar").set({
		    Assistências: 2,
		    Gols: 3,
		    Nome: "Vincent ABOUBAKAR",
		    Posição: "ata",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Rooney").set({
		    Assistências: 3,
		    Gols: 10,
		    Nome: "Wayne Rooney",
		    Posição: "ata",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Nani").set({
		    Assistências: 2,
		    Gols: 3,
		    Nome: "Luís Carlos(NANI)",
		    Posição: "pe",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Aguero").set({
		    Assistências: 2,
		    Gols: 2,
		    Nome: "Sérgio AGÜERO",
		    Posição: "ata",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Silva").set({
		    Assistências: 3,
		    Gols: 2,
		    Nome: "André SILVA",
		    Posição: "ata",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Gervinho").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Gervais Lombe(GERVINHO)",
		    Posição: "pe",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Chiesa").set({
		    Assistências: 0,
		    Gols: 4,
		    Nome: "Federico CHIESA",
		    Posição: "sa",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});


		firestore.doc("Jogadores/Arsenal/DadosJogadores/Paredes").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Leandro PAREDES",
		    Posição: "mc",
		    Clube: "Arsenal",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Nzonzi").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Stevan NZONZI",
		    Posição: "vol",
		    Clube: "Arsenal",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Chamberlain").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Oxlade CHAMBERLAIN",
		    Posição: "mc",
		    Clube: "Arsenal",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Dembele").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Ousmane DEMBÉLÉ",
		    Posição: "pe",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Ndidi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Wilfred NDIDI",
		    Posição: "vol",
		    Clube: "Arsenal",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Reus").set({
		    Assistências: 3,
		    Gols: 5,
		    Nome: "Marco REUS",
		    Posição: "mei",
		    Clube: "Arsenal",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Vini").set({
		    Assistências: 4,
		    Gols: 1,
		    Nome: "Vinícius Júnios(VINI JR)",
		    Posição: "pe",
		    Clube: "Arsenal",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Rui").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Mário RUI",
		    Posição: "le",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Alexander").set({
		    Assistências: 5,
		    Gols: 0,
		    Nome: "Trent ALEXANDER ARNOLD",
		    Posição: "ld",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Zappacosta").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Davide ZAPPACOSTA",
		    Posição: "ld",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Maicon").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "MAICON Pereira",
		    Posição: "zag",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Christensen").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Andreas CHRISTENSEN",
		    Posição: "zag",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Ramos").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sérgio RAMOS",
		    Posição: "zag",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/VanDijk").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Virgil VAN DIJK",
		    Posição: "zag",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Arsenal/DadosJogadores/Cragno").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Alessio CRAGNO",
		    Posição: "gol",
		    Clube: "Arsenal",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Barcelona------------------------------------------------------------------------------*/

		firestore.doc("Clube/Barcelona").set({
		    Vitórias: 10,
		    Empates: 6,
		    Derrotas: 19,
		    Jogos: 35,
		    GolsPró: 36,
		    GolsContra: 58,
		    ClassificaçãoaGeral: "7º",
		    PontosPrioridadeContratação: 0,
		    PontosClassificaçãoGeral: 0,
		    NomeClube: "Barcelona",
		    Moedas: "0 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Piatek").set({
		    Assistências: 6,
		    Gols: 10,
		    Nome: "Krzysztof PIATEK",
		    Posição: "ata",
		    Clube: "Barcelona",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});


		firestore.doc("Jogadores/Barcelona/DadosJogadores/Sterling").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Raheem STELING",
		    Posição: "pe",
		    Clube: "Barcelona",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Werner").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Timo WERNER",
		    Posição: "ata",
		    Clube: "Barcelona",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Felix").set({
		    Assistências: 3,
		    Gols: 4,
		    Nome: "João FÉLIX",
		    Posição: "sa",
		    Clube: "Barcelona",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Raphinha").set({
		    Assistências: 3,
		    Gols: 2,
		    Nome: "Raphael Dias(RAPHINHA)",
		    Posição: "md",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Maximin").set({
		    Assistências: 3,
		    Gols: 1,
		    Nome: "Saint MAXIMIN",
		    Posição: "me",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/SMina").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Santi MINA",
		    Posição: "ata",
		    Clube: "Barcelona",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Messi").set({
		    Assistências: 3,
		    Gols: 6,
		    Nome: "Lionel Messi",
		    Posição: "pd",
		    Clube: "Barcelona",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Allan").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "ALLAN Marques",
		    Posição: "mc",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Havertz").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kai HAVERTZ",
		    Posição: "mei",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Paqueta").set({
		    Assistências: 5,
		    Gols: 3,
		    Nome: "Lucas PAQUETÁ",
		    Posição: "mc",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Pellegrini").set({
		    Assistências: 1,
		    Gols: 2,
		    Nome: "Lorenzo PELLEGRINI",
		    Posição: "mei",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Llorent").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Marcos LLORENT",
		    Posição: "vol",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Weigl").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Julian WEIGL",
		    Posição: "vol",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Goretzka").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Leon GORETZKA",
		    Posição: "mc",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Zaniolo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nicolò ZANIOLO",
		    Posição: "mei",
		    Clube: "Barcelona",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Mandi").set({
		    Assistências: 2,
		    Gols: 0,
		    Nome: "Aïssa Mandi",
		    Posição: "zag",
		    Clube: "Barcelona",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Pavard").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Benjamin PAVARD",
		    Posição: "zag",
		    Clube: "Barcelona",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Diallo").set({
		    Assistências: 0,
		    Gols: 2,
		    Nome: "Abdou DIALLO",
		    Posição: "zag",
		    Clube: "Barcelona",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Mendy").set({
		    Assistências: 2,
		    Gols: 0,
		    Nome: "Ferland MENDY",
		    Posição: "le",
		    Clube: "Barcelona",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Upamecano").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Dayot UPAMECANO",
		    Posição: "zag",
		    Clube: "Barcelona",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Bissaka").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Aaron WAN BISSAKA",
		    Posição: "ld",
		    Clube: "Barcelona",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Barcelona/DadosJogadores/Lafont").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Alban LAFONT",
		    Posição: "gol",
		    Clube: "Barcelona",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Leverkusen------------------------------------------------------------------------------*/

		firestore.doc("Clube/Leverkusen").set({
		    Vitórias: 11,
		    Empates: 10,
		    Derrotas: 11,
		    Jogos: 32,
		    GolsPró: 28,
		    GolsContra: 26,
		    ClassificaçãoaGeral: "6º",
		    PontosPrioridadeContratação: 0,
		    PontosClassificaçãoGeral: 2,
		    NomeClube: "Leverkusen",
		    Moedas: "0 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Batshuayi").set({
		    Assistências: 3,
		    Gols: 11,
		    Nome: "Michy BATSHUAYI",
		    Posição: "ata",
		    Clube: "Leverkusen",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Oyarzabal").set({
		    Assistências: 4,
		    Gols: 9,
		    Nome: "Mikel OYARZABAL",
		    Posição: "pe",
		    Clube: "Leverkusen",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Rashford").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Marcus RASHFORD",
		    Posição: "me",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Jesus").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Gabriel JESUS",
		    Posição: "ata",
		    Clube: "Leverkusen",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Coman").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kingsley COMAN",
		    Posição: "me",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Pepe").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nicolas PÉPÉ",
		    Posição: "md",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Eriksen").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Christian ERIKSEN",
		    Posição: "mei",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Fred").set({
		    Assistências: 2,
		    Gols: 3,
		    Nome: "Frederico R.(FRED)",
		    Posição: "vol",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Brandt").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Julian BRANDT",
		    Posição: "mei",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Partey").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Thomas PARTEY",
		    Posição: "mc",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Beek").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Donne VAN DE BEEK",
		    Posição: "mc",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Fabinho").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Fábio Henrique(FABINHO)",
		    Posição: "vol",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Lallana").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Adam LALLANA",
		    Posição: "mc",
		    Clube: "Leverkusen",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Djene").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "DJENÉ Dakonam",
		    Posição: "zag",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Kimpembe").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Presnel KIMPEMBE",
		    Posição: "zag",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Corona").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jesús CORONA",
		    Posição: "ld",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Semedo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nelson SEMEDO",
		    Posição: "ld",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Raul").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "RAÚL Michel",
		    Posição: "zag",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Gaya").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "José Luis GAYÁ",
		    Posição: "le",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Alaba").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "David ALABA",
		    Posição: "le",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Lopez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Pau LÓPEZ",
		    Posição: "gol",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Leverkusen/DadosJogadores/Akinfev").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Igor Akinfeev",
		    Posição: "gol",
		    Clube: "Leverkusen",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Bayern------------------------------------------------------------------------------*/

		firestore.doc("Clube/Bayern").set({
		    Vitórias: 5,
		    Empates: 2,
		    Derrotas: 10,
		    Jogos: 17,
		    GolsPró: 27,
		    GolsContra: 36,
		    ClassificaçãoaGeral: "5º",
		    PontosPrioridadeContratação: 0,
		    PontosClassificaçãoGeral: 2,
		    NomeClube: "Bayern de Munique",
		    Moedas: "2 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Benedetto").set({
		    Assistências: 0,
		    Gols: 3,
		    Nome: "Darío BENEDETTO",
		    Posição: "ata",
		    Clube: "Bayern de Munique",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Mbappe").set({
		    Assistências: 3,
		    Gols: 11,
		    Nome: "Kylian MBAPPE",
		    Posição: "ata",
		    Clube: "Bayern de Munique",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Muriel").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Luis MURIEL",
		    Posição: "ata",
		    Clube: "Bayern de Munique",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Lanzini").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Manuel LANZINI",
		    Posição: "mei",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Raktic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ivan RAKTIC",
		    Posição: "mc",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Moura").set({
		    Assistências: 2,
		    Gols: 1,
		    Nome: "Lucas MOURA",
		    Posição: "md",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Depay").set({
		    Assistências: 3,
		    Gols: 6,
		    Nome: "Mephis DEPAY",
		    Posição: "sa",
		    Clube: "Bayern de Munique",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/DSuarez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Denis Suárez",
		    Posição: "me",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Kostic").set({
		    Assistências: 7,
		    Gols: 1,
		    Nome: "Filip KOSTIC",
		    Posição: "me",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Sissoko").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Moussa SISSOKO",
		    Posição: "vol",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Hulk").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Givanildo Vieira(HULK)",
		    Posição: "pd",
		    Clube: "Bayern de Munique",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Diaby").set({
		    Assistências: 0,
		    Gols: 2,
		    Nome: "Moussa DIABY",
		    Posição: "me",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Kluivert").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Justin KLUIVERT",
		    Posição: "me",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Marcone").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Iván MARCONE",
		    Posição: "VOL",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Winks").set({
		    Assistências: 3,
		    Gols: 0,
		    Nome: "Harry WINKS",
		    Posição: "mc",
		    Clube: "Bayern de Munique",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Antunes").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Vitorino G. P. ANTUNES",
		    Posição: "le",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Bailly").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Eric BAILLY",
		    Posição: "zag",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Smalling").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Chris SMALLING",
		    Posição: "zag",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Danilo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "DANILO Luiz",
		    Posição: "ld",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Halstenberg").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Marcel HALSTENBERG",
		    Posição: "le",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Mbabu").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kevin MBABU",
		    Posição: "ld",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Sidnei").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "SIDNEI Rechel",
		    Posição: "zag",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Perin").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Mattia PERIN",
		    Posição: "gol",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bayern/DadosJogadores/Ulreich").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sven Ulreich",
		    Posição: "gol",
		    Clube: "Bayern de Munique",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Sporting------------------------------------------------------------------------------*/

		firestore.doc("Clube/Sporting").set({
		    Vitórias: 17,
		    Empates: 9,
		    Derrotas: 18,
		    Jogos: 44,
		    GolsPró: 62,
		    GolsContra: 63,
		    ClassificaçãoaGeral: "2º",
		    PontosPrioridadeContratação: 2,
			PontosClassificaçãoGeral: 4,
			NomeClube: "Sporting",
			Moedas: "0 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Yedder").set({
		    Assistências: 7,
		    Gols: 8,
		    Nome: "Wissam BEN YEDDER",
		    Posição: "ata",
		    Clube: "Sporting",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Haland").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Erling Braut HALAND",
		    Posição: "ata",
		    Clube: "Sporting",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Portu").set({
		    Assistências: 9,
		    Gols: 11,
		    Nome: "Cristian Portugés(PORTU)",
		    Posição: "pd",
		    Clube: "Sporting",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/DeBruyne").set({
		    Assistências: 3,
		    Gols: 4,
		    Nome: "Kevin DE BRUYNE",
		    Posição: "mei",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Balde").set({
		    Assistências: 6,
		    Gols: 4,
		    Nome: "Keita BALDÉ",
		    Posição: "ata",
		    Clube: "Sporting",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Salah").set({
		    Assistências: 13,
		    Gols: 14,
		    Nome: "Mohamed SALAH",
		    Posição: "pd",
		    Clube: "Sporting",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Malinovskyi").set({
		    Assistências: 2,
		    Gols: 2,
		    Nome: "Ruslan MALINOVSKYI",
		    Posição: "mc",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Darder").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Sergi DARDER",
		    Posição: "mc",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Barella").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nicolò BARELLA",
		    Posição: "mc",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Nainggolan").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Radja NAINGGOLAN",
		    Posição: "mei",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Matuidi").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Blaise MATUIDI",
		    Posição: "vol",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Tsygankov").set({
		    Assistências: 1,
		    Gols: 2,
		    Nome: "Viktor TSYGANKOV",
		    Posição: "md",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Stepanenko").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Taras STEPANENKO",
		    Posição: "vol",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Gabriel").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "GABRIEL Appelt",
		    Posição: "mc",
		    Clube: "Sporting",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Cancelo").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "João CANCELO",
		    Posição: "ld",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Nastasic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Matija NASTASIC",
		    Posição: "zag",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Angelino").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "José Ángel(ANGELIÑO)",
		    Posição: "le",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Vogt").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kevin VOGT",
		    Posição: "zag",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Hernandez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Lucas HERNÁNDEZ",
		    Posição: "zag",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Varane").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Raphael VARANE",
		    Posição: "zag",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Aurier").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Serge AURIER",
		    Posição: "ld",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Pope").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nick POPE",
		    Posição: "gol",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sporting/DadosJogadores/Foster").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ben FOSTER",
		    Posição: "gol",
		    Clube: "Sporting",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----City------------------------------------------------------------------------------*/

		firestore.doc("Clube/City").set({
		    Vitórias: 24,
		    Empates: 6,
		    Derrotas: 10,
		    Jogos: 40,
		    GolsPró: 88,
		    GolsContra: 55,
		    ClassificaçãoaGeral: "3º",
		    PontosPrioridadeContratação: 1,
		    PontosClassificaçãoGeral: 2,
		    NomeClube: "Manchester City",
		    Moedas: "0 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Richarlison").set({
		    Assistências: 4,
		    Gols: 7,
		    Nome: "RICHARLISON de Andrade",
		    Posição: "ata",
		    Clube: "Manchester City",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Mané").set({
		    Assistências: 1,
		    Gols: 2,
		    Nome: "Sadio MANÉ",
		    Posição: "pe",
		    Clube: "Manchester City",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Lautaro").set({
		    Assistências: 3,
		    Gols: 9,
		    Nome: "LAUTARO Marténez",
		    Posição: "ata",
		    Clube: "Manchester City",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Ronaldo").set({
		    Assistências: 11,
		    Gols: 14,
		    Nome: "Cristiano RONALDO",
		    Posição: "ata",
		    Clube: "Manchester City",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Sancho").set({
		    Assistências: 6,
		    Gols: 9,
		    Nome: "Jadon SANCHO",
		    Posição: "md",
		    Clube: "Manchester City",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Çalhanoglu").set({
		    Assistências: 8,
		    Gols: 8,
		    Nome: "Hakan ÇALHANOGLU",
		    Posição: "pe",
		    Clube: "Manchester City",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Bernard").set({
		    Assistências: 4,
		    Gols: 3,
		    Nome: "BERNARD Anício",
		    Posição: "me",
		    Clube: "Manchester City",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Valverde").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Federico VALVERDE",
		    Posição: "mc",
		    Clube: "Manchester City",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Tielemans").set({
		    Assistências: 6,
		    Gols: 7,
		    Nome: "Youri TIELEMANS",
		    Posição: "mc",
		    Clube: "Manchester City",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Can").set({
		    Assistências: 7,
		    Gols: 0,
		    Nome: "Emre CAN",
		    Posição: "mc",
		    Clube: "Manchester City",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Dier").set({
		    Assistências: 2,
		    Gols: 2,
		    Nome: "Eric DIER",
		    Posição: "vol",
		    Clube: "Manchester City",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Casemiro").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Carlos H. V. CASEMIRO",
		    Posição: "vol",
		    Clube: "Manchester City",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Telles").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Alex TELLES",
		    Posição: "le",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Pereira").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ricardo PEREIRA",
		    Posição: "ld",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Davies").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Ben DAVIES",
		    Posição: "le",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Bellerín").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Hector BELLERÍN",
		    Posição: "ld",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Chilwell").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ben CHILWEL",
		    Posição: "le",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Konate").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ibrahima KONATÉ",
		    Posição: "zag",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Manolas").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kostas MANOLAS",
		    Posição: "zag",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Gomez").set({
		    Assistências: 0,
		    Gols: 2,
		    Nome: "Joe GOMEZ",
		    Posição: "zag",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Dlopez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Diego LOPEZ",
		    Posição: "gol",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/City/DadosJogadores/Meret").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Alex MERET",
		    Posição: "gol",
		    Clube: "Manchester City",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Madrid------------------------------------------------------------------------------*/

		firestore.doc("Clube/Madrid").set({
		    Vitórias: 3,
		    Empates: 0,
		    Derrotas: 1,
		    Jogos: 4,
		    GolsPró: 7,
		    GolsContra: 3,
		    ClassificaçãoaGeral: "8º",
		    PontosPrioridadeContratação: 0,
		    PontosClassificaçãoGeral: 0,
		    NomeClube: "Real Madrid",
		    Moedas: "0 c"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Hazard").set({
		    Assistências: 1,
		    Gols: 4,
		    Nome: "Eden HAZARD",
		    Posição: "pe",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Eder").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "ÉDER Citadin",
		    Posição: "ata",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Januzaj").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Adnan JANUZAJ",
		    Posição: "pd",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Gignac").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "André Pierre GIGNAC",
		    Posição: "ata",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Sisto").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Pione SISTO",
		    Posição: "pe",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Berghuis").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Steven BERGHUIS",
		    Posição: "pd",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Trossard").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Leandro TROSSARD",
		    Posição: "me",
		    Clube: "Real Madrid",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Bacca").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Carlos BACCA",
		    Posição: "ata",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Coutinho").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Fhilippe COUTINHO",
		    Posição: "mei",
		    Clube: "Real Madrid",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Sanson").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Morgan SANSON",
		    Posição: "mc",
		    Clube: "Real Madrid",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Seri").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Jean Michaël SERI",
		    Posição: "mc",
		    Clube: "Real Madrid",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Merino").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Mikel MERINO",
		    Posição: "mc",
		    Clube: "Real Madrid",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Rongier").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Valentin RONGIER",
		    Posição: "mc",
		    Clube: "Real Madrid",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Mascherano").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Javier MASCHERANO",
		    Posição: "vol",
		    Clube: "Real Madrid",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Jahanbakhsh").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Alireza Jahanbakhsh",
		    Posição: "pd",
		    Clube: "Real Madrid",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Escudero").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sergio ESCUDERO",
		    Posição: "le",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});		

		firestore.doc("Jogadores/Madrid/DadosJogadores/Criscito").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Domenico CRISCITO",
		    Posição: "le",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Vida").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Domagoj VIDA",
		    Posição: "zag",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Odriozola").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Álvaro ODRIOZOLA",
		    Posição: "ld",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Fonte").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "José FONTE",
		    Posição: "zag",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});	

		firestore.doc("Jogadores/Madrid/DadosJogadores/Dias").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Ruben DIAS",
		    Posição: "zag",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Madrid/DadosJogadores/Moyà").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Miguel Ángel MOYÀ",
		    Posição: "gol",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});	

		firestore.doc("Jogadores/Madrid/DadosJogadores/Ederson").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "EDERSON Santana",
		    Posição: "gol",
		    Clube: "Real Madrid",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});
}
		
		
		

		

		

		
