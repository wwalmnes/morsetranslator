export const MorseCode = {
	// International (ITU) standard
	ITU: {
		a: [0, 1],
		b: [1, 0, 0, 0],
		c: [1, 0, 1, 0],
		d: [1, 0, 0],
		e: [0],
		f: [0, 0, 1, 0],
		g: [1, 1, 0],
		h: [0, 0, 0, 0],
		i: [0, 0],
		j: [1, 0, 0, 0],
		k: [1, 0, 1],
		l: [0, 1, 0, 0],
		m: [1, 1],
		n: [1, 0],
		o: [1, 1, 1],
		p: [0, 1, 1, 0],
		q: [1, 1, 0, 1],
		r: [0, 1, 0],
		s: [0, 0, 0],
		t: [1],
		u: [0, 0, 1],
		v: [0, 0, 0, 1],
		w: [0, 1, 1],
		x: [1, 0, 0, 1],
		y: [1, 0, 1, 1],
		z: [1, 1, 0, 0],
		1: [0, 1, 1, 1, 1],
		2: [0, 0, 1, 1, 1],
		3: [0, 0, 0, 1, 1],
		4: [0 ,0, 0, 0, 1],
		5: [0, 0, 0, 0, 0],
		6: [1, 0, 0, 0, 0],
		7: [1, 1, 0, 0, 0],
		8: [1, 1, 1, 0, 0],
		9: [1, 1, 1, 1, 0],
		0: [1, 1, 1, 1, 1]
	}
};

export const LETTER_SPACE = ' ';

// How fast we should output sound.
export const BASE_TIME = 100;
export const MORSE_TIME = {
	0: BASE_TIME*1,
	1: BASE_TIME*3
};
export const PAUSE_LETTER = BASE_TIME * 3;
export const PAUSE_WORD = BASE_TIME * 7;