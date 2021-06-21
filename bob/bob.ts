class Bob {
  hey(sentence: string): string {
    if(sentence.trim().indexOf("?") == sentence.trim().length - 1 && sentence.indexOf("?") >= 0){
      if(sentence.toUpperCase() == sentence && /[A-Z]/.test(sentence)){
        return "Calm down, I know what I'm doing!";
      }
      return "Sure.";
    }
    if(sentence.toUpperCase() == sentence && /[A-Z]/.test(sentence)){
      return 'Whoa, chill out!';
    }
    if(sentence.length == 0 || sentence.trim().length == 0){
      return 'Fine. Be that way!';
    }
    return 'Whatever.';
  }
}

export default Bob
