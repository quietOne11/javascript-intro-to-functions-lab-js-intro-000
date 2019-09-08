function logShout(string) {
  //return string.toUpperCase();
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  //return string.toUpperCase();
  console.log(string.toLowerCase());
}

function shout(string) {
  //return string.toUpperCase();
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function sayHiToGrandma(string) {
  if(string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string.toUpperCase()) {
    return "YES INDEED!"
  }
}
