// function to generate a random question based on chosen subject, and its answer
function card(obj) {
  // save object's keys in the keys variable
  var keys = Object.keys(obj);
  // return just the object keys, which represent the questions. << 0 is bitshift to 0
  var rand_question = (keys[ keys.length * Math.random() << 0]);
  var ans = obj[rand_question];
  return [rand_question, ans];
}

// save question button to a var
var quest_button = document.getElementById('question_button');
// save question field to a var
var quest_field = document.getElementById('question_field');
// save answer button to a var
var ans_button = document.getElementById('answer_button');
// save question field to a var
var ans_field = document.getElementById('answer_field');
// hide question and answer buttons until subject is picked
quest_button.style.visibility = 'hidden';
ans_button.style.display = 'none';
// get the text from the clicked subject dropdown and use it to change the page title
var subjects = document.querySelector('#topics');
// event listener for clicked subject name
var select = subjects.addEventListener('click', function(e) {
  // save clicked topic name to a variable
  var topic = e.target.innerText;
  // show the question and answer buttons now that something is selected in navbar
  quest_button.style.visibility = 'visible';
  // change the title of the page to include the selected topic
  document.getElementById('page_title').innerHTML = topic + ' Questions';
  if(topic === 'Water Treatment') {
    // basic water treatment questions
    var treat_questions = {
      'What is the chemical formula for sodium hypochlorite?' : 'naocl',
      'What does a pH of 7 mean on the pH scale?'             : 'neutral',
      'What type of gas was commonly used for disinfection?'  : 'chlorine',
    };
    // clear any values present in question and answer fields
    if(quest_field) {
      quest_field.innerHTML = '';
    }
    if(ans_field) {
      ans_field.innerHTML = '';
    }
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
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

  } else if (topic === 'Water Distribution') {
    // basic water distribution questions
    var distro_questions = {
      'How many turns per inch of pipe to close a valve?'     : '3 turns',
      'What does CMLC stand for?'                             : 'cement mortar lined concrete',
      'What schedule PVC pipe is common in households?'       : 'schedule 40',
    };
    // clear any values present in question and answer fields
    if(quest_field) {
      quest_field.innerHTML = '';
    }
    if(ans_field) {
      ans_field.innerHTML = '';
    }
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
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
  } else if (topic === 'Web Development') {
    // basic web dev questions
    var web_questions = {
      'What does HTML stand for?'                             : 'hyper text markup language',
      'What does HTTPS mean?'                                 : 'hyper text transfer protocol secure',
      'Semantic is a term used to describe what?'             : 'html',
      'What programming language does Rails utilize?'         : 'ruby',
      'SQL is used to store information in a what?'           : 'database',
    };
    // clear any values present in question and answer fields
    if(quest_field) {
      quest_field.innerHTML = '';
    }
    if(ans_field) {
      ans_field.innerHTML = '';
    }
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
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
  } else if (topic === 'Information Technology') {
    // basic it questions
    var it_questions = {
      'What is DNS?'                                          : 'domain name service',
      'What command will filter a search in Linux?'           : 'grep',
    };
    // clear any values present in question and answer fields
    if(quest_field) {
      quest_field.innerHTML = '';
    }
    if(ans_field) {
      ans_field.innerHTML = '';
    }
    // bind the onclick event to the get question button
    quest_button.onclick = function() {
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
  } // ends topic if statement
}); // ends event listener for clicked topic
