function PovoaçãoInicialBD(){

	var firestore = firebase.firestore();

	/*----São Paulo------------------------------------------------------------------------------*/

		firestore.doc("Clube/SãoPaulo").set({
		    Vitórias: 4,
		    Empates: 3,
		    Derrotas: 3,
		    Jogos: 10,
		    GolsPró: 11,
		    GolsContra: 11,
		    PontosClassificaçãoGeral: 2,
		    NomeClube: "São Paulo",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 0,
		    SilverStar: 1,
		    GoldStar: 0
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Ehazard").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Eden Hazard",
		    Posição: "pe",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Volpi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Tiago Volpi",
		    Posição: "gol",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Boga").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jérémie Boga",
		    Posição: "pe",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Barrios").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Wilmar Barrios",
		    Posição: "vol",
		    Clube: "São Paulo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/CR7").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Cristiano Ronaldo",
		    Posição: "pe",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Tolisso").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Corentin Tolisso",
		    Posição: "mc",
		    Clube: "São Paulo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Mandanda").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Steve Mandanda",
		    Posição: "gol",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Atal").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Youcet Atal",
		    Posição: "ld",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Tah").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jonathan Tha",
		    Posição: "zag",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Neres").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "David Neres",
		    Posição: "pd",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Aranguiz").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Charles Aránguiz",
		    Posição: "mc",
		    Clube: "São Paulo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Zakaria").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Denis Zakaria",
		    Posição: "vol",
		    Clube: "São Paulo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/B_Mendy").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Benjamin Mendy",
		    Posição: "le",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Dzyuba").set({
		    Assistências: 1,
		    Gols: 5,
		    Nome: "Artem Dzyuba",
		    Posição: "ata",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Tierney").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kieran TIERNEY",
		    Posição: "le",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Callejon").set({
		    Assistências: 3,
		    Gols: 2,
		    Nome: "José Maria Callejon",
		    Posição: "pd",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Ribeiro").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Everton Ribeiro",
		    Posição: "md",
		    Clube: "São Paulo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Rebic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ante Rebic´",
		    Posição: "pe",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Soyuncu").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Çaglar Söyüncü",
		    Posição: "zag",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Zaha").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Wilfred Zaha",
		    Posição: "pe",
		    Clube: "São Paulo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Albiol").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Raúl Albiol",
		    Posição: "zag",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Matip").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Joël Matip",
		    Posição: "zag",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/J_Rodriguez").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "James Rodríguez",
		    Posição: "mei",
		    Clube: "São Paulo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/SãoPaulo/DadosJogadores/Pavard").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Benjamin Pavard",
		    Posição: "ld",
		    Clube: "São Paulo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Vasco------------------------------------------------------------------------------*/

		firestore.doc("Clube/Vasco").set({
		    Vitórias: 4,
		    Empates: 5,
		    Derrotas: 1,
		    Jogos: 10,
		    GolsPró: 16,
		    GolsContra: 10,
		    PontosClassificaçãoGeral: 3,
		    NomeClube: "Vasco",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 1,
		    SilverStar: 1,
		    GoldStar: 0
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Kane").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Harry Kane",
		    Posição: "ata",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Coutinho").set({
		    Assistências: 2,
		    Gols: 0,
		    Nome: "Philippe Coutinho",
		    Posição: "mei",
		    Clube: "Vasco",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Mdembele").set({
		    Assistências: 0,
		    Gols: 6,
		    Nome: "Moussa Dembélé",
		    Posição: "ata",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Coman").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Kingsley Coman",
		    Posição: "pe",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Jgomez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Joe Gomez",
		    Posição: "zag",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Fanderson").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Felipe Anderson",
		    Posição: "pe",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Adama").set({
		    Assistências: 2,
		    Gols: 1,
		    Nome: "Adama Traoré",
		    Posição: "pd",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});


		firestore.doc("Jogadores/Vasco/DadosJogadores/Kepa").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kepa Arrizabalaga",
		    Posição: "gol",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Bernat").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Juan Bernat",
		    Posição: "le",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Chamberlain").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Oxlade CHAMBERLAIN",
		    Posição: "mc",
		    Clube: "Vasco",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Hermoso").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Mario Hermoso",
		    Posição: "zag",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Teixeira").set({
		    Assistências: 4,
		    Gols: 2,
		    Nome: "Alex Teixeira",
		    Posição: "sa",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Correa").set({
		    Assistências: 1,
		    Gols: 3,
		    Nome: "Joaquín Correa",
		    Posição: "sa",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Hakimi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Achraf Hakimi",
		    Posição: "ld",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Elvedi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nico Elvedi",
		    Posição: "zag",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Klostermann").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Lukas Klostermann",
		    Posição: "zag",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Cillessen").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jasper Cillessen",
		    Posição: "gol",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Matic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nemanja Matic",
		    Posição: "vol",
		    Clube: "Vasco",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Semedo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nelson Semedo",
		    Posição: "ld",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Thernandez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Theo Hernández",
		    Posição: "le",
		    Clube: "Vasco",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Sissoko").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Moussa Sissoko",
		    Posição: "vol",
		    Clube: "Vasco",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Dpereira").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Danilo Pereira",
		    Posição: "vol",
		    Clube: "Vasco",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Vasco/DadosJogadores/Mbappe").set({
		    Assistências: 2,
		    Gols: 5,
		    Nome: "Kylian Mbappé",
		    Posição: "ata",
		    Clube: "Vasco",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Bahia------------------------------------------------------------------------------*/

		firestore.doc("Clube/Bahia").set({
		  	Vitórias: 1,
		    Empates: 4,
		    Derrotas: 5,
		    Jogos: 10,
		    GolsPró: 6,
		    GolsContra: 15,
		    PontosClassificaçãoGeral: 0,
		    NomeClube: "Bahia",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 0,
		    SilverStar: 0,
		    GoldStar: 0
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Onana").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "André Onana",
		    Posição: "gol",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Kante").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "N'golo kanté",
		    Posição: "mc",
		    Clube: "Bahia",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});


		firestore.doc("Jogadores/Bahia/DadosJogadores/Neto").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Norberto Murara Net",
		    Posição: "gol",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Militao").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Eder Milião",
		    Posição: "zag",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Ake").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nathan Aké",
		    Posição: "zag",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Dias").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ruben Dias",
		    Posição: "zag",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Lodi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Renan Lodi",
		    Posição: "le",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Chillwel").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ben Chillwel",
		    Posição: "le",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Torreira").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Lucas Torreira",
		    Posição: "vol",
		    Clube: "Bahia",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Beek").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Donny Van de Beek",
		    Posição: "mei",
		    Clube: "Bahia",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Rice").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Declan Rice",
		    Posição: "vol",
		    Clube: "Bahia",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Kovacic").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Mateo Kovacic",
		    Posição: "mc",
		    Clube: "Bahia",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Fati").set({
		    Assistências: 0,
		    Gols: 2,
		    Nome: "Ansu Fati",
		    Posição: "pe",
		    Clube: "Bahia",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Neves").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Rúben Neves",
		    Posição: "vol",
		    Clube: "Bahia",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Greenwood").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Mason Greenwood",
		    Posição: "pd",
		    Clube: "Bahia",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Thazard").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Thorgan Hazard",
		    Posição: "pd",
		    Clube: "Bahia",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Zaniolo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nicolò ZANIOLO",
		    Posição: "mei",
		    Clube: "Bahia",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Bellerin").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Hector Bellerín",
		    Posição: "ld",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Cebolinha").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Everton (Cebolinha)",
		    Posição: "pe",
		    Clube: "Bahia",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Walker").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kyle Walker",
		    Posição: "ld",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Cuesta").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Vitor Cuesta",
		    Posição: "zag",
		    Clube: "Bahia",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Pguerreiro").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Paolo Guerreiro",
		    Posição: "ata",
		    Clube: "Bahia",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Gabigol").set({
		    Assistências: 0,
		    Gols: 2,
		    Nome: "Gabriel Barbosa",
		    Posição: "ata",
		    Clube: "Bahia",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bahia/DadosJogadores/Salah").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Mohamed Salah",
		    Posição: "pd",
		    Clube: "Bahia",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Santos------------------------------------------------------------------------------*/

		firestore.doc("Clube/Santos").set({
		    Vitórias: 0,
		    Empates: 2,
		    Derrotas: 4,
		    Jogos: 6,
		    GolsPró: 0,
		    GolsContra: 5,
		    PontosClassificaçãoGeral: 0,
		    NomeClube: "Santos",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 0,
		    SilverStar: 0,
		    GoldStar: 0
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Tsilva").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Thiago Silva",
		    Posição: "zag",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Hulk").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Givanildo Vieira de Souza(Hulk)",
		    Posição: "pd",
		    Clube: "Santos",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Bernardeschi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Federico Bernardeschi",
		    Posição: "pd",
		    Clube: "Santos",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Muriel").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Luis Muriel",
		    Posição: "ata",
		    Clube: "Santos",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Dcosta").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Diego Costa",
		    Posição: "ata",
		    Clube: "Santos",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Ribery").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Franck Ribéry",
		    Posição: "pe",
		    Clube: "Santos",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Pulisic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Christian Pulisic",
		    Posição: "pe",
		    Clube: "Santos",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Paqueta").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Lucas Paquetá",
		    Posição: "mei",
		    Clube: "Santos",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Oscar").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Oscar dos Santos",
		    Posição: "mei",
		    Clube: "Santos",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Matuidi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Blaise Matuidi",
		    Posição: "mc",
		    Clube: "Santos",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Rabiot").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Adrien Rabiot",
		    Posição: "mc",
		    Clube: "Santos",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Paredes").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Leandro Paredes",
		    Posição: "vol",
		    Clube: "Santos",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Can").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Emre Can",
		    Posição: "mc",
		    Clube: "Santos",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Lecomte").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Benjamin Lecomte",
		    Posição: "gol",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Savic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Stefan Savic",
		    Posição: "zag",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Radu").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Stefan Radu",
		    Posição: "zag",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Pezzella").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Germán Pezzella",
		    Posição: "zag",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Evans").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jonny Evans",
		    Posição: "zag",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Marcelo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Marcelo Vieira",
		    Posição: "le",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Davies").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Alphonso Davies",
		    Posição: "le",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Azpilicueta").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "César Azpilicueta",
		    Posição: "ld",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Cuadrado").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Juan Guillermo Cuadrado",
		    Posição: "ld",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Lopes").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Anthony Lopes",
		    Posição: "gol",
		    Clube: "Santos",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Santos/DadosJogadores/Mane").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sadio Mané",
		    Posição: "pe",
		    Clube: "Santos",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		
		/*----Sport------------------------------------------------------------------------------*/

		firestore.doc("Clube/Sport").set({
		    Vitórias: 4,
		    Empates: 2,
		    Derrotas: 0,
		    Jogos: 6,
		    GolsPró: 13,
		    GolsContra: 3,
		    PontosClassificaçãoGeral: 4,
		    NomeClube: "Sport",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 0,
		    SilverStar: 0,
		    GoldStar: 1
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Casil").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Carlos Henrrique Casemiro",
		    Posição: "vol",
		    Clube: "Sport",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Andrada").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Esteban Andrada",
		    Posição: "gol",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Diallo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Abdou Diallo",
		    Posição: "zag",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Portu").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Cristian Portugés(PORTU)",
		    Posição: "pd",
		    Clube: "Sport",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Smalling").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Chris Smalling",
		    Posição: "zag",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Kimpembe").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Presnel Kimpembe",
		    Posição: "zag",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Grimaldo").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Álex Grimaldo",
		    Posição: "le",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Perez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Enzo Perez",
		    Posição: "mc",
		    Clube: "Sport",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Moutinho").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "João Moutinho",
		    Posição: "mc",
		    Clube: "Sport",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Taison").set({
		    Assistências: 2,
		    Gols: 5,
		    Nome: "Taison Barcellos",
		    Posição: "pe",
		    Clube: "Sport",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Weghorst").set({
		    Assistências: 1,
		    Gols: 3,
		    Nome: "Wout Weghorst",
		    Posição: "ata",
		    Clube: "Sport",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Sirigu").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Salvatore Sirigu",
		    Posição: "gol",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Denayer").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jason Denayer",
		    Posição: "zag",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Benatia").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Mehdi Benatia",
		    Posição: "zag",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Acuña").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Marcos Acuña",
		    Posição: "le",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Cancelo").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "João CANCELO",
		    Posição: "ld",
		    Clube: "Sport",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Leiva").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Lucas Leiva",
		    Posição: "vol",
		    Clube: "Sport",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Ceballos").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Dani Ceballos",
		    Posição: "mei",
		    Clube: "Sport",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Moura").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Lucas Moura",
		    Posição: "pd",
		    Clube: "Sport",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Maddison").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "James Maddison",
		    Posição: "mei",
		    Clube: "Sport",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Özil").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Mesut Özil",
		    Posição: "mei",
		    Clube: "Sport",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Martial").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Anthony Martial",
		    Posição: "ata",
		    Clube: "Sport",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Giroud").set({
		    Assistências: 0,
		    Gols: 2,
		    Nome: "Olivier Giroud",
		    Posição: "ata",
		    Clube: "Sport",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Sport/DadosJogadores/Messi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Lionel Messi",
		    Posição: "pd",
		    Clube: "Sport",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Internacional------------------------------------------------------------------------------*/

		firestore.doc("Clube/Internacional").set({
		    Vitórias: 3,
		    Empates: 6,
		    Derrotas: 1,
		    Jogos: 10,
		    GolsPró: 15,
		    GolsContra: 13,
		    PontosClassificaçãoGeral: 0,
		    NomeClube: "Internacional",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 0,
		    SilverStar: 0,
		    GoldStar: 0
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Son").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Heung-min Son",
		    Posição: "me",
		    Clube: "Internacional",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Schmeichel").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kasper Schmeichel",
		    Posição: "gol",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Rguerreiro").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Raphaël Guerreiro",
		    Posição: "gol",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Bissaka").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Aron Wan-Bissaka",
		    Posição: "ld",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Telles").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Alex Telles",
		    Posição: "le",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Rudiger").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Antonio Rüdiger",
		    Posição: "zag",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Djene").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Djene Dakonam",
		    Posição: "zag",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Asensio").set({
		    Assistências: 0,
		    Gols: 3,
		    Nome: "Marco Asensio",
		    Posição: "me",
		    Clube: "Internacional",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Thauvin").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Florian Thauvin",
		    Posição: "pd",
		    Clube: "Internacional",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Musso").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Juan Musso",
		    Posição: "gol",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Dcarlos").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Diego Carlos",
		    Posição: "zag",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Gueye").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Gana Gueye",
		    Posição: "mc",
		    Clube: "Internacional",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Pizzi").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Luís Miguel(Pizzi)",
		    Posição: "md",
		    Clube: "Internacional",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Stepanenko").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Taras Stepanenko",
		    Posição: "vol",
		    Clube: "Internacional",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Milik").set({
		    Assistências: 4,
		    Gols: 2,
		    Nome: "Arkadiusz Milik",
		    Posição: "ata",
		    Clube: "Internacional",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Falcao").set({
		    Assistências: 0,
		    Gols: 3,
		    Nome: "Falcao García",
		    Posição: "ata",
		    Clube: "Internacional",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Wilson").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Callum Wilson",
		    Posição: "ata",
		    Clube: "Internacional",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Rodrigo").set({
		    Assistências: 1,
		    Gols: 2,
		    Nome: "Rodrigo Moreno",
		    Posição: "ata",
		    Clube: "Internacional",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Depaul").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Rodrigo De Paul",
		    Posição: "mc",
		    Clube: "Internacional",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Fernando").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Fernando Lucas",
		    Posição: "vol",
		    Clube: "Internacional",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Blind").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Daley Blind",
		    Posição: "zag",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Dilorenzo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Giovanni Di Lorenzo",
		    Posição: "ld",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Digne").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Lucas Digne",
		    Posição: "le",
		    Clube: "Internacional",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Internacional/DadosJogadores/Neymar").set({
		    Assistências: 2,
		    Gols: 0,
		    Nome: "Neymar JR",
		    Posição: "pe",
		    Clube: "Internacional",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Flamengo------------------------------------------------------------------------------*/

		firestore.doc("Clube/Flamengo").set({
		    Vitórias: 1,
		    Empates: 1,
		    Derrotas: 4,
		    Jogos: 6,
		    GolsPró: 2,
		    GolsContra: 8,
		    PontosClassificaçãoGeral: 0,
		    NomeClube: "Flamengo",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 0,
		    SilverStar: 0,
		    GoldStar: 0
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Kimmich").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Joshua Kimmich",
		    Posição: "vol",
		    Clube: "Flamengo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Perisic").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ivan Perisic",
		    Posição: "pe",
		    Clube: "Flamengo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Rodrygo").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Rodrygo Silva",
		    Posição: "pd",
		    Clube: "Flamengo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Vidal").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Arturo Vidal",
		    Posição: "mc",
		    Clube: "Flamengo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Tripier").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kieran Tripier",
		    Posição: "ld",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Filipeluís").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Filipe Luís",
		    Posição: "le",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/FMendy").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ferland Mendy",
		    Posição: "le",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Muslera").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Fernando Muslera",
		    Posição: "gol",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Diegoalves").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Diego Alves",
		    Posição: "gol",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Arrascaeta").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Giorgian De Arrascaeta",
		    Posição: "mei",
		    Clube: "Flamengo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Mctominay").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Scott McTominay",
		    Posição: "mc",
		    Clube: "Flamengo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/BH").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Bruno Henrique",
		    Posição: "pe",
		    Clube: "Flamengo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Mendes").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Thiao Mendes",
		    Posição: "mc",
		    Clube: "Flamengo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Davidluiz").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "David Luíz",
		    Posição: "zag",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Florenzi").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Alessandro Florenzi",
		    Posição: "ld",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Vinijunior").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Vini Júnior",
		    Posição: "pe",
		    Clube: "Flamengo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Xhaka").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Granit Xhaka",
		    Posição: "vol",
		    Clube: "Flamengo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});		

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Boateng").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jerome Boateng",
		    Posição: "zag",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Godin").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Diego Godín",
		    Posição: "zag",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Ibrah").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Zlatan Ibrahimovic",
		    Posição: "ata",
		    Clube: "Flamengo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Draxler").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Julian Draxler",
		    Posição: "mc",
		    Clube: "Flamengo",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});	

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Canales").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sergio Canales",
		    Posição: "zag",
		    Clube: "Flamengo",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Chiesa").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Federico Chiesa",
		    Posição: "pd",
		    Clube: "Flamengo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});	

		firestore.doc("Jogadores/Flamengo/DadosJogadores/Lewandowski").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Robert Lewandowski",
		    Posição: "ata",
		    Clube: "Flamengo",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});


		/*----Bragantino------------------------------------------------------------------------------*/

		firestore.doc("Clube/Bragantino").set({
		    Vitórias: 2,
		    Empates: 2,
		    Derrotas: 0,
		    Jogos: 4,
		    GolsPró: 6,
		    GolsContra: 3,
		    PontosClassificaçãoGeral: 1,
		    NomeClube: "Bragantino",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 1,
		    SilverStar: 0,
		    GoldStar: 0
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Auba").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Pierre-Emerick Aubameyang",
		    Posição: "ata",
		    Clube: "Bragantino",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Hradecky").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Lukás Hrádecký",
		    Posição: "gol",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Pickford").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jordan Pickford",
		    Posição: "gol",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Lindelof").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Victor Lindelof",
		    Posição: "zag",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Stones").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "John Stones",
		    Posição: "zag",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Imartínez").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Íñigo Martínez",
		    Posição: "zag",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Gabriel").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Gabriel Costa",
		    Posição: "zag",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Kolarov").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Aleksandar Kolarov",
		    Posição: "le",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Gayá").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "José Gayá",
		    Posição: "le",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Meunier").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Thomas Meunier",
		    Posição: "ld",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Corona").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Jesús Corona",
		    Posição: "ld",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Coquelin").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Francis Coquelin",
		    Posição: "vol",
		    Clube: "Bragantino",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Williamcarvalho").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "William Carvalho",
		    Posição: "vol",
		    Clube: "Bragantino",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Ramsey").set({
		    Assistências: 2,
		    Gols: 0,
		    Nome: "Aaron Ramsey",
		    Posição: "mc",
		    Clube: "Bragantino",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Tielemans").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Youri Tielemans",
		    Posição: "mc",
		    Clube: "Bragantino",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Llorente").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Marcos Llorente",
		    Posição: "mei",
		    Clube: "Bragantino",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Mkhitaryan").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Henrikh Mikhtaryan",
		    Posição: "md",
		    Clube: "Bragantino",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});		

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Promes").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Quincy Promes",
		    Posição: "pe",
		    Clube: "Bragantino",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Guedes").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Gonçalo Guedes",
		    Posição: "pe",
		    Clube: "Bragantino",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Politano").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Matteo Politano",
		    Posição: "pd",
		    Clube: "Bragantino",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Volland").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Kevin Volland",
		    Posição: "ata",
		    Clube: "Bragantino",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});	

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Mandzukic").set({
		    Assistências: 1,
		    Gols: 2,
		    Nome: "Mario Mandzukic",
		    Posição: "ata",
		    Clube: "Bragantino",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Berghuis").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Stevan Berghuis",
		    Posição: "pd",
		    Clube: "Bragantino",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Bragantino/DadosJogadores/Vandijk").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Virgil Van Dijk",
		    Posição: "zag",
		    Clube: "Bragantino",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		/*----Gremio------------------------------------------------------------------------------*/

		firestore.doc("Clube/Gremio").set({
		    Vitórias: 1,
		    Empates: 1,
		    Derrotas: 2,
		    Jogos: 4,
		    GolsPró: 5,
		    GolsContra: 6,
		    PontosClassificaçãoGeral: 4,
		    NomeClube: "Gremio",
		    ArtilheiroImg: "",
		    CraqueImg: "",
		    Escalação: "",
		    BronzeStar: 0,
		    SilverStar: 0,
		    GoldStar: 1
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Ramos").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sérgio Ramos",
		    Posição: "zag",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Strakosha").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Thomas Strakosha",
		    Posição: "gol",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Ospina").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "David Ospina",
		    Posição: "gol",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Maksimović").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Nikola Maksimović",
		    Posição: "zag",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Christensen").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Andreas Christensen",
		    Posição: "zag",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Zouma").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Kurt Zouma",
		    Posição: "zag",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/PEPE").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Képler Laveran(PEPE)",
		    Posição: "zag",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Alonso").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Marcos Alonso",
		    Posição: "le",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Ismaily").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Ismaily Gonçalves",
		    Posição: "le",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/SergiRoberto").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sergi Roberto",
		    Posição: "ld",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/JesusNavas").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Jesús Navas",
		    Posição: "ld",
		    Clube: "Gremio",
		    Setor: "zag"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Félix").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "João Félix",
		    Posição: "sa",
		    Clube: "Gremio",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Weigl").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Julian Weigl",
		    Posição: "vol",
		    Clube: "Gremio",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Zieliński").set({
		    Assistências: 1,
		    Gols: 0,
		    Nome: "Piotr Zieliński",
		    Posição: "mc",
		    Clube: "Gremio",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Valverde").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Federico Valverde",
		    Posição: "mc",
		    Clube: "Gremio",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Çalhanoğlu").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Hakan Çalhanoğlu",
		    Posição: "mei",
		    Clube: "Gremio",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Mount").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Mason Mount",
		    Posição: "md",
		    Clube: "Gremio",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});		

		firestore.doc("Jogadores/Gremio/DadosJogadores/Bergwijn").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Steven Bergwijn",
		    Posição: "pe",
		    Clube: "Gremio",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/RafaSilva").set({
		    Assistências: 1,
		    Gols: 1,
		    Nome: "Rafa Silva",
		    Posição: "pe",
		    Clube: "Gremio",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/GelsonMartins").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Gelson Martins",
		    Posição: "pd",
		    Clube: "Gremio",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Esalvio").set({
		    Assistências: 0,
		    Gols: 1,
		    Nome: "Eduardo Salvio",
		    Posição: "ata",
		    Clube: "Gremio",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});	

		firestore.doc("Jogadores/Gremio/DadosJogadores/AlexisSanchez").set({
		    Assistências: 1,
		    Gols: 3,
		    Nome: "Alexis Sánchez",
		    Posição: "ata",
		    Clube: "Gremio",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/Haller").set({
		    Assistências: 0,
		    Gols: 0,
		    Nome: "Sébastien Haller",
		    Posição: "pd",
		    Clube: "Gremio",
		    Setor: "ata"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

		firestore.doc("Jogadores/Gremio/DadosJogadores/DeBruyne").set({
		    Assistências: 2,
		    Gols: 1,
		    Nome: "Kevin De Bruyne",
		    Posição: "mei",
		    Clube: "Gremio",
		    Setor: "mei"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});
};
		
		
		

		

		

		
