// Person with 2 is celebrity
const MATRIX = [
	[0, 0, 1, 0],
	[0, 0, 1, 0],
	[0, 0, 0, 0],
	[0, 0, 1, 0]
  ];
  
  function knows(a, b) {
	return MATRIX[a][b];
  }
  
  function findCelebrity(n) {
	const stack = [];
  
	// Push everybody onto stack
	for (let i = 0; i < n; i++) {
	  stack.push(i);
	}
  
	// Find a potential celebrity
	while (stack.length > 1) {
	  const A = stack.pop();
	  const B = stack.pop();
	  if (knows(A, B)) {
		stack.push(B);
	  } else {
		stack.push(A);
	  }
	}
  
	// Potential candidate?
	const C = stack.pop();
  
	// Check if C is actually a celebrity or not
	for (let i = 0; i < n; i++) {
	  // If any person doesn't know 'C' or 'C' doesn't know any person, return -1
	  if (i !== C && (knows(C, i) || !knows(i, C))) {
		return -1;
	  }
	}
  
	return C;
  }
  
  // Driver code
  const n = 4;
  const id = findCelebrity(n);
  id === -1 ? console.log("No celebrity") : console.log("Celebrity ID", id);
  