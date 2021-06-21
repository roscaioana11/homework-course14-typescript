export default class Words{
    
    count(sentence: string): Map<string, number>{
        var result: Map<string, number> = new Map();

        sentence = sentence.replace(/[ ]+/g, " "); // + -> gaseste un space o data sau de mai multe ori

        sentence = sentence.replace(/\n/g, " "); // da replace la toate newlines

        sentence = sentence.replace(/\t/g, " "); //da replace la toate tabs

        var words = sentence.toLowerCase().split(" ");
        for(var i = 0; i < words.length; i++){
            if(words[i].length > 0){
                result.set(words[i], (result.get(words[i])?? 0) + 1); //?? -> verifica daca valoarea de dinainte este null sau undefined si daca da, pune valoarea de dupa in locul ei, in cazul de fata, 0
            }
        }
        return result;
    }
}