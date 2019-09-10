//1

function nonsense(string = ""){

 function blab(){
		alert(string);
	}

	blab();
	};

console.log(nonsense("hello"));

//2

function nonsense(string = ""){

 function blab(){
		alert(string);
	}

	setTimeout(blab, 2000);
	};

console.log(nonsense("hello"));

//3

function nonsense(string = ""){

	function blab(){
		alert(string);
	}

	return blab();


};

let blabLater = nonsense("hey");
let blabAgainLater = nonsense("how are you?");

//4

var lastNameSsirohi = function(firstName){

	var innerFunction = function(lastName){
		console.log(firstName + " " + lastName)
	};

	return innerFunction;
};

var FirstNameChandni = lastNameSsirohi('Chandni');

FirstNameChandni('Ssirohi');


//5

var storyWriter = function() {
  var story = '';
  return {
    addWords: function(words) {
      story += words + " ";
      console.log(story);
    },
    erase: function() {
      story = '';
    }
  };
};

var farmLoveStory = storyWriter();
	farmLoveStory.addWords('There was once a lonely cow.');
	farmLoveStory.addWords('It saw a friendly face.');

	var storyOfMyLife = storyWriter();
	storyOfMyLife.addWords('My code broke.');
	storyOfMyLife.erase();




















