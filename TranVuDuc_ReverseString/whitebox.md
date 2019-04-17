
# Generation Unit Test for Reverse String Function

## Tran Vu Duc
## 16020213
### Soure code: https://github.com/TheAlgorithms/Java/blob/master/Others/ReverseString.java

1. String reverse(String str){
2. 		if(str.isEmpty() || str == null) return str;           
3.  	char arr = str.toCharArray();
4.  	for(int i = 0, j = str.length() - 1; i < j; i++, j--){
5.     		char temp = arr i;
6.     		arr[i] = arr j;
7.     		arr[j] = temp;
8.  	}
9.  	return new String(arr);
10. }

![alt](https://i.imgur.com/wq0yP9N.png)

## __2.List of Road__
### __Road 1__: 1-2 
### __Road 2__: 1-2-3-4-9-10
### __Road 3__: 1-2-3-4-5-6-7-8-9-10


## __3.Path Conditions__
* Path 1:
	(str.isEmpty() || str == null) is True => str
* Path 2:
	(str.isEmpty() || str == null) is False 
	i=0 && j=0
	=> str
* Path 3:
	(str.isEmpty() || str == null) is False 
	i=0 %% j = str.length() -1 
	Until i < j do:
		char temp = arr i;
    	arr[i] = arr j;
       	arr[j] = temp;
       	i++;
       	j--;
    => new str

## __4.Generate Test Case__
* Path 1:
	str = null || str = ''
* Path 2:
	str = 'a'
* Path 3:
	str = 'abcd'

## __5.Expected Output__
* Path 1: Nothing to print
* Path 2: a
* Path 3: dcba

