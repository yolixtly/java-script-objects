console.log('welcome to Objects');
	
	/*Object.create()*/

	var yolixFamily = {
		hermano: "J.R.",
		papa: "Roberto", 
		mama: "Chelo",
		presentation: function() {
			return this.hermano + " is the brother " + this.papa + " and " + this.mama + " are the parents!."; 
		},
	};

	console.log(yolixFamily.presentation());


	var jocaFamily = Object.create(yolixFamily); //cloning Yolixtly
	console.log(jocaFamily);
	jocaFamily.hermana = "Yolixtly";
	jocaFamily.mascota = "Canela";

	console.log(jocaFamily.presentation());

	console.log(jocaFamily.hermano); 

	var JoseRoberto = Object.create(jocaFamily);
	JoseRoberto.hermana = ["Jocabed", jocaFamily.hermana];
	console.log(JoseRoberto.hermana);
	console.log(JoseRoberto.presentation());
	console.log(JoseRoberto.mascota);



	/*Object Constructor*/

	function MemberFamily(name, hermano, hermana, papa, mama) { //with Capitalized first Character "M"
		this.name = name;
		this.hermano = hermano;
		this.hermana = hermana;
		this.papa = papa;
		this.mama = mama;

	}

	var YolixtlyFamily = new MemberFamily("Yolixtly Anderson", 'J.Roberto', 'Joca', 'Lic. Roberto', 'Lic. Consuelo');
	var JoseRobertoFamily = new MemberFamily("Jose Roberto Villegas", "Joco", "Yolix", "Roberto Mayor", "Chelo");

	console.log(YolixtlyFamily);
	console.log(YolixtlyFamily.papa + " is her father");

	MemberFamily.prototype.SayWhoIsThis = function(){
		return "My name is " + this.name + " and my sister is " + 
		this.hermana + " and my parents are " + this.papa + " and " + this.mama;  
	};

	console.log(YolixtlyFamily.SayWhoIsThis());
	console.log(JoseRobertoFamily.SayWhoIsThis());
	console.log(JoseRobertoFamily.hermano + " My brother, well she is a girl haha");
