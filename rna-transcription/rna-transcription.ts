class Transcriptor {
  toRna(sequence: string): string {
    if(/[^GCTA]/.test(sequence)){
      throw new Error('Invalid input DNA.');
    }
    sequence = sequence.replace(/C/g, '1'); // g -> global, in tot stringul
    sequence = sequence.replace(/G/g, '2');
    sequence = sequence.replace(/A/g, '3');
    sequence = sequence.replace(/T/g, '4');

    sequence = sequence.replace(/1/g, 'G');
    sequence = sequence.replace(/2/g, 'C');
    sequence = sequence.replace(/3/g, 'U');
    sequence = sequence.replace(/4/g, 'A');

    return sequence;
  }
}

export default Transcriptor
