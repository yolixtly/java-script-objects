console.log('About Houses');

			/*The objects the pseudo class creates should have a customizable number of rooms,
			 a color and size. You should also have a method that returns a sentence that says
			 "Your house has x number of rooms is x color and x size".*/

/*Object Constructor */

	function House(name, rooms, color, size){
		this.name = name;
		this.roomNumber = rooms;
		this.color = color;
		this.size = size;
		

	
		/* adding a method with prototype inheritance*/
	House.prototype.intro = function(){ 
		return "<br/>'<b>Your " + this.name + " house has " +
		 this.rooms + " rooms, its color is " + this.color + 
		 " and its size is " + this.size + "'<br/>";
		 }
	};
		/*prototype to access to the secret feature */
	House.prototype.secretInfo = function(newData) {
		var secretFeature = "Awesome Kitchen";
		secretFeature = newData || secretFeature; 
		return "The secret Feature of the house is: " + "<b>" + secretFeature + "</b><br/>";
	}



		/*Events of the Constructor House Object*/
		
		var casaDeMexico = new House("Casa de Mexico", "4", "orange", "1500 sqft");
		
		console.log(casaDeMexico);
		$("#ConsObj").append(casaDeMexico.intro()).css("color", "navy");
		$("#ConsObj").append(casaDeMexico.secretInfo());


		var barton = new House("Barton Circle", 5, "beige", "3600 sqft");

		console.log(barton);
		$("#ConsObj").append(barton.intro());
		$("#ConsObj").append(barton.secretInfo("The deck is delighful!"));



/*Factory Object*/

	function typeHouse(name, rooms, color, size) {
		var house = {};
		house.name = name;
		house.rooms = rooms;
		house.color = color; 
		house.size = size;
		house.intro = function() {
			return "<br/>'<b>Your " + this.name + " house has " +
		 	this.rooms + " rooms, its color is " + this.color + 
		 	" and its size is " + this.size + "'<br/>";
		}
		/* Secret feature */
		var secretFeature = "Nice Neighborhood!";
		house.secretInfo = function(newData) {
				secretFeature = newData || secretFeature; 
				return "the secret Feature of the house is: " + "<b>" + secretFeature + '</b><br/>';
		}

		return house;
	}



		/*Events of the Factory House Object*/

		var casaDeMexico2 = typeHouse("Casa de Mexico", "4", "orange", "1500 sqft");
		
		console.log(casaDeMexico2);
		$("#FactObj").append(casaDeMexico2.intro());
		$("#FactObj").append(casaDeMexico2.secretInfo());

		var barton2 = typeHouse("Barton Circle", 5, "beige", "3600 sqft");
		
		console.log(barton2);
		$("#FactObj").append(barton2.intro());
		$("#FactObj").append(barton2.secretInfo("has a basement!"));



/*Object Create...more like just cloning rather than recicling*/

		var house3 = {
			name: "Casa de Mexico",
			rooms: 4,
			color: 'orange',
			size: "1500 sqft",
			intro:function(){
				return "<br/>'<b>Your " + this.name + " house has " +
		 	this.rooms + " rooms, its color is " + this.color + 
		 	" and its size is " + this.size + "'<br/>";
			},
			secretInfo: function(newData) {
				var secretFeature = "Perfect Location!";
				secretFeature = newData || secretFeature; 
				return "the secret Feature of the house is: " + "<b>" + secretFeature + '</b><br/>';
		}
		};

			/*events of house3*/

				var casaDeMexico3 = Object.create(house3);
				$("#ObjCre").append(casaDeMexico3.intro());
				$("#ObjCre").append(casaDeMexico3.secretInfo());

				var barton3 = Object.create(casaDeMexico3);
				barton3.name = "Barton Circle";
				barton3.rooms = 5;
				barton3.color = 'beige';
				barton3.size = "3600 sqft";
				barton3.location = "York Pa";

				$("#ObjCre").append(barton3.intro());
				$("#ObjCre").append(barton3.secretInfo("it has a trail"));
				$("#ObjCre").append("This house is located in: " + barton3.location);


	/*Parent Constructor/ Prototype Attribute */

	console.log("The Prototype Attribute of " + casaDeMexico.name + " is \n" + casaDeMexico.constructor);
	