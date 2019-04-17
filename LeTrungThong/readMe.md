https://github.com/mathics/Mathics/blob/395f307e758a84247b891f887368d70202b33254/mathics/core/numbers.py#L119

Code:
	
def unpickle_mp(value):
	type, value = value
	if type == 'z':
		return sympy.Integer(value)
	elif type == 'q':
		return sympy.Rational(value)
	elif type == 'f':
		return sympy.Float(value)
	else:
		return value
		
## Control flow graph




## Path
1: 1,2,3
2: 1,2,4,5
3: 1,2,4,6,7
4: 1,2,4,6,8

## Path Equation
1: 
2: 

## Solving
