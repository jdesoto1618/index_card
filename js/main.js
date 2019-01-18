// get the text from the clicked subject dropdown and use it to change the page title
var subjects = document.querySelector('#topics');
var selected = subjects.addEventListener('click', function (e) {
  document.getElementById('page_title').innerHTML = e.target.innerText + ' Questions';
});

// basic water distribution questions
var distro_questions = {
  'How many turns per inch of pipe to close a valve?'     : '3 turns',
  'What does CMLC stand for?'                             : 'cement mortar lined concrete',
  'What schedule PVC pipe is common in households?'       : 'schedule 40',
}

// basic water treatment questions
var treat_questions = {
  'What is the chemical formula for sodium hypochlorite?' : 'naocl',
  'What does a pH of 7 mean on the pH scale?'             : 'neutral',
  'What type of gas was commonly used for disinfection?'  : 'chlorine',
}

// basic web dev questions
var web_questions = {
  'What does HTML stand for?'                             : 'hyper text markup language',
  'What does HTTPS mean?'                                 : 'hyper text transfer protocol secure',
  'Semantic is a term used to describe what?'             : 'html',
  'What programming language does Rails utilize?'         : 'ruby',
  'SQL is used to store information in a what?'           : 'database',
}

// basic it questions
var it_questions = {
  'What is DNS?'                                          : 'domain name service',
  'What command will filter a search in Linux?'           : 'grep',
}
