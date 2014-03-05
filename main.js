var scales = {
	major: [0,2,2,1,2,2,2,1],
	minor: [0,2,1,2,2,1,2,2],
} 
function note(note,accidental,octave)={
	this.note		=note;
	this.accidental	=accidental; // 0 = natural, 1 = sharp, -1 = flat
	this.octave		=octave; // C0 = 55Hz, round number
}
