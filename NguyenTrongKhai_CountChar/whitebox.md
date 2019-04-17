# Bài tập kiểm thử whitebox cho chức năng CountChar
### Họ và tên : Nguyễn Trọng Khải
### MSSV : 16022406
### Lớp : K61-CACLC2
## Code CountChar
Link repo : [CountChar](https://github.com/TheAlgorithms/Java/blob/master/Others/CountChar.java)
```
private static int CountCharacters(String str) {

    	int count = 0;

    	if(str == "" || str == null) //Exceptions
		{ 
			return 0; 
		}

        for(int i = 0; i < str.length(); i++) {
        	if(!Character.isWhitespace(str.charAt(i))) {
        		count++;
			}}

        return count;
     }
```
## Đồ thị đường đi
![flow-chart](https://user-images.githubusercontent.com/25638649/56298178-e5648880-615b-11e9-9edb-a6117f2a7092.png)
## Liệt kê đường đi

1. 1-2

2. 1-2-3-4-9-10

3. 1-2-3-4-5-6-7-8-9-10

## Điều kiện đường đi

- Path 1 : (str == "" || str == null) is True => return 0

- Path 2 : (str == "" || str == null) is False i=0 => count
