# **Bài tập kiểm thử dòng điều kiện**
#### Họ và tên: Nguyễn Văn Hoàng
#### MSSV: 16020231
#### Source: [Github](https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Sorting/NumericStringSort.cpp)
--------------------------------
## Hàm đã chọn:
```C++
1.    bool NumericSort(string a, string b)
2.    {
3.      while(a[0]=='0')
4.      {
5.        a.erase(a.begin());
6.      }
7.      while(b[0]=='0')
8.      {
9.        b.erase(b.begin());
10.     }  
11.     int n=a.length();
12.     int m=b.length();
13.     if(n==m)
14.       return a<b;
15.     return n<m;
16.   }
```
--------------------------------
## Bước 1: Lập flowchart
![](flowchart.jpg)
--------------------------------
## Bước 2: Liệt kê các đường đi
####   Path 1:
```
(1->3->5)
```
####   Path 2:
```
(1->3->7->9)
```
####   Path 3:
```
(1->3->7->11->12->13->14)
```
####   Path 4:
```
(1->3->7->11->12->13->15)
```
--------------------------------
## Bước 3: Lập phương trình cho mỗi đường đi
#### Path 1: (1->3->5)
```
true if a[0] = '0'
```
#### Path 2: (1->3->7->9)
```
true if a[0] != '0' && b[0] = '0'
```
#### Path 3: (1->3->7->11->12->13->14)
```
true if a[0] != '0' && b[0] != '0' && n=m
```
#### Path 4: (1->3->7->11->12->13->15)
```
true if a[0] != '0' && b[0] != '0' && n!= m
```
--------------------------------
## Bước 4: Tính giá trị mong đợi và tạo bộ kiểm thử
#### Path 1: (1->3->5)
```
Input: a[0] = '0'
Expected Output: a.erase(a.begin()) -> a[0] != '0'
```
#### Path 2: (1->3->7->9)
```
Input: a[0] != '0', b[0] = '0'
Expected Ouput: b.erase(b.begin()) -> b[0] != '0'
```
#### Path 3: (1->3->7->11->12->13->14)
```
Input: a[0] != '0', b[0] != '0', n = 9, m = 9
Expected Ouput: a < b ? true : false
```
#### Path 4: (1->3->7->11->12->13->15)
```
Input: a[0] != '0', b[0] != '0', n = 9, m = 8
Expected Ouput: n < m ? true : false
```
