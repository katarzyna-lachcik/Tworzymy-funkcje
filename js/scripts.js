
function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0){
		return 'Nieprawidłowe dane';
	}
	else {
		return 'a*h/2';
	}
};
console.log( getTriangleArea(10, 6) );

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(13, 8),
	triangle3Area = getTriangleArea(1, -1);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);