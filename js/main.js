// function to generate a random question based on chosen subject, and its answer
function card(obj) {
  // save object's keys in the keys variable
  var keys = Object.keys(obj);
  // return just the object keys, which represent the questions. << 0 is bitshift to 0
  var rand_question = (keys[ keys.length * Math.random() << 0]);
  var ans = obj[rand_question];
  return [rand_question, ans];
} // ends card function

// function to check the screen width
function checkWidth() {
  // save the screen width to a var
  var width = document.body.clientWidth;
  return width;
} // ends checkWidth function

// function to hide input values and buttons when switching topics
function clearValues() {
  if(quest_field) {
    quest_field.innerHTML = '';
  }
  if(ans_field) {
    ans_field.innerHTML = '';
  }
  if(add_quest) {
    add_quest.style.visibility = 'hidden';
    sub_quest_button.style.visibility = 'hidden';
    add_quest_ans.style.visibility = 'hidden';
    add_quest.value = '';
    add_quest_ans.value = '';
  }
}

// get screen width. this returns an html collection, select the first occurrence with [0]
document.getElementsByTagName('body')[0].onresize = function() {
  // save clicked topic name to a variable. scoped for this function
  var topic = document.getElementById('page_title').innerText;
  // get screen width, save to width var
  var width = checkWidth();
  // update dom elements when screens are smaller than 316px wide
  if(width < 316) {
    sub_quest_button.innerHTML = 'Add Question to ' + '<br/>' + topic;
    quest_button.innerHTML = 'Random' + '<br/>' + 'Question';
    ans_button.innerHTML = 'View' + '<br/>' + 'Answer';
  } else {
    // update dom elements when screens are larger than 316px wide
    sub_quest_button.innerHTML = 'Add Question to ' + topic;
    quest_button.innerHTML = 'Random Question';
    ans_button.innerHTML = 'View Answer';
  }
} // ends screen width function

// save question button to a var
var quest_button = document.getElementById('question_button');
// save question field to a var
var quest_field = document.getElementById('question_field');
// save answer button to a var
var ans_button = document.getElementById('answer_button');
// save answer field to a var
var ans_field = document.getElementById('answer_field');
// save add question input field to a var
var add_quest = document.getElementById('add_question_field');
// save add answer field to a var
var add_quest_ans = document.getElementById('add_answer_field');
// save submit question button to var
var sub_quest_button = document.getElementById('submit_question');
// hide fields until conditions are met
quest_button.style.visibility = 'hidden';
ans_button.style.display = 'none';
add_quest.style.visibility = 'hidden';
add_quest_ans.style.visibility = 'hidden';
sub_quest_button.style.visibility = 'hidden';
// select the clicked menu dropdown from the ul with the links
var menus = document.querySelector('#menu');
// select the clicked subject dropdown. this querySelector grabs the id from the ul containing the links
var subjects = document.querySelector('#topics');
// event listener to get the clicked subject name
var select = subjects.addEventListener('click', function(e) {
// save clicked topic name to a variable
var topic = e.target.innerText;
// show the question generator button now that a topic is picked in navbar
quest_button.style.visibility = 'visible';
// change the title of the page to include the selected topic
document.getElementById('page_title').innerHTML = topic;
  // function to show buttons and fields when adding a question and answer
  function addVisibility() {
    add_quest.style.visibility = 'visible';
    add_quest_ans.style.visibility = 'visible';
    sub_quest_button.innerHTML = 'Add Question to ' + topic;
    sub_quest_button.style.visibility = 'visible';
  } // ends addVisibility function
  // function to show input values from adding a question and answer
  function add_question(obj) {
    if(add_quest.value === '' || add_quest_ans.value === '') {
      alert('One or more fields were left empty. Try again!');
    } else {
      obj[add_quest.value] = add_quest_ans.value;
      alert('Question added to ' + topic + '!');
      console.log(obj);
    }
    add_quest.value = '';
    add_quest_ans.value = '';
  } // ends add_question function
  if(topic === 'Water Treatment') {
    // event listener to get the clicked menu option for adding a question
    var menu = menus.addEventListener('click', function(e) {
      // capture the text clicked in the li
      var menu_choice = e.target.innerText;
      // when add question is clicked
      if(menu_choice === 'Add Question') {
        // show all inputs and buttons related to adding a question
        addVisibility();
      }
    });
    // basic water treatment questions
    var treat_questions = {
      'What is the chemical formula for sodium hypochlorite?' : 'naocl',
      'What does a pH of 7 mean on the pH scale?'             : 'neutral',
      'What type of gas was commonly used for disinfection?'  : 'chlorine',
    };
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
      // clear the answer field each time a new question is generated
      ans_field.innerHTML = '';
      // save the random question and its answer to a variable, from an object
      var card_qa = card(treat_questions);
      // extract just the question
      var question = card_qa[0];
      quest_field.innerHTML = question;
      ans_button.style.display = 'inline';
      // bind the onclick event to the answer button
      ans_button.onclick = function() {
        // extract just the answer to the question
        var ans = card_qa[1];
        // get the corresponding answer for the question
        ans_field.innerHTML = ans;
      } // ends answer onclick function
    } // ends question onclick function
    // bind the onclick event of adding a question button
    sub_quest_button.onclick = function() {
      add_question(treat_questions);
    } // ends submit new question onclick function
    // clear any values present in input fields and buttons when switching topics
    clearValues();
  } else if (topic === 'Water Distribution') {
    // event listener to get the clicked menu option for adding a question
    var menu = menus.addEventListener('click', function(e) {
      var menu_choice = e.target.innerText;
      if(menu_choice === 'Add Question') {
        // show all inputs and buttons related to adding a question
        addVisibility();
      }
    });
    // basic water distribution questions
    var distro_questions = {
      'How many turns per inch of pipe to close a valve?'     : '3 turns',
      'What does CMLC stand for?'                             : 'cement mortar lined concrete',
      'What schedule PVC pipe is common in households?'       : 'schedule 40',
    };
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
      // clear the answer field each time a new question is generated
      ans_field.innerHTML = '';
      // save the random question and its answer to a variable, from an object
      var card_qa = card(distro_questions);
      // extract just the question
      var question = card_qa[0];
      quest_field.innerHTML = question;
      ans_button.style.display = 'inline';
      // bind the onclick event to the answer button
      ans_button.onclick = function() {
        // extract just the answer to the question
        var ans = card_qa[1];
        // get the corresponding answer for the question
        ans_field.innerHTML = ans;
      } // ends answer onclick function
    } // ends question onclick function
    // bind the onclick event of adding a question button
    sub_quest_button.onclick = function() {
      add_question(distro_questions);
    } // ends submit new question onclick function
    // clear any values present in input fields and buttons when switching topics
    clearValues();
  } else if (topic === 'Web Development') {
    // event listener to get the clicked menu option for adding a question
    var menu = menus.addEventListener('click', function(e) {
      var menu_choice = e.target.innerText;
      if(menu_choice === 'Add Question') {
        // show all inputs and buttons related to adding a question
        addVisibility();
      }
    });
    // basic web dev questions
    var web_questions = {
      'What does HTML stand for?'                             : 'hyper text markup language',
      'What does HTTPS mean?'                                 : 'hyper text transfer protocol secure',
      'Semantic is a term used to describe what?'             : 'html',
      'What programming language does Rails utilize?'         : 'ruby',
      'SQL is used to store information in a what?'           : 'database',
    };
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
      // clear the answer field each time a new question is generated
      ans_field.innerHTML = '';
      // save the random question and its answer to a variable, from an object
      var card_qa = card(web_questions);
      // extract just the question
      var question = card_qa[0];
      quest_field.innerHTML = question;
      ans_button.style.display = 'inline';
      // bind the onclick event to the answer button
      ans_button.onclick = function() {
        // extract just the answer to the question
        var ans = card_qa[1];
        // get the corresponding answer for the question
        ans_field.innerHTML = ans;
      } // ends answer onclick function
    } // ends question onclick function
    // bind the onclick event of adding a question button
    sub_quest_button.onclick = function() {
      add_question(web_questions);
    } // ends submit new question onclick function
    // clear any values present in input fields and buttons when switching topics
    clearValues();
  } else if (topic === 'Information Technology') {
    // event listener to get the clicked menu option for adding a question
    var menu = menus.addEventListener('click', function(e) {
      var menu_choice = e.target.innerText;
      if(menu_choice === 'Add Question') {
        // show all inputs and buttons related to adding a question
        addVisibility();
      }
    });
    // basic it questions
    var it_questions = {
      'What is DNS?'                                          : 'domain name service',
      'What command will filter a search in Linux?'           : 'grep',
    };
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
      // clear the answer field each time a new question is generated
      ans_field.innerHTML = '';
      // save the random question and its answer to a variable, from an object
      var card_qa = card(it_questions);
      // extract just the question
      var question = card_qa[0];
      quest_field.innerHTML = question;
      ans_button.style.display = 'inline';
      // bind the onclick event to the answer button
      ans_button.onclick = function() {
        // extract just the answer to the question
        var ans = card_qa[1];
        // get the corresponding answer for the question
        ans_field.innerHTML = ans;
      } // ends answer onclick function
    } // ends question onclick function
    // bind the onclick event of adding a question button
    sub_quest_button.onclick = function() {
      add_question(it_questions);
    } // ends submit new question onclick function
    // clear any values present in input fields and buttons when switching topics
    clearValues();
  } // ends topic if statement
}); // ends event listener for clicked topic
