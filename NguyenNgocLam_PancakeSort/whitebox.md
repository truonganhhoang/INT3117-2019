# **Bài tập kiểm thử**

#### Họ tên: Nguyễn Ngọc Lâm
#### MSSV: 16022408
#### Lớp: K61-CA-CLC2

## **Hàm đã chọn:**

```java
1   @Override
2       public <T extends Comparable<T>> T[] sort(T[] array){
3           int size = array.length;
4
5           for (int i = 0; i < size; i++) {
6               T max = array[0];
7               int index = 0;
8               for (int j = 0; j < size - i; j++) {
9                   if ( less(max, array[j]) ) {
10                      max = array[j];
11                      index = j;
12                  }
13              }
14              flip(array, index, array.length - 1 - i);
15          }
16          return array;
17  }
```
Nguồn: https://github.com/TheAlgorithms/Java/blob/master/Sorts/PancakeSort.java

## **1: Đồ thị**
![](flowChart.jpg)
## **2: Liệt kê các đường đi**
#### Đường đi số 1: 1 &rarr; 2 &rarr; 3 &rarr; 4
#### Đường đi số 2: 1 &rarr; 2 &rarr; 3 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 13 &rarr; 14 &rarr; 3 &rarr; 4
#### Đường đi số 3: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 9 &rarr; 12 &rarr; 8 &rarr; 13 &rarr; 14 &rarr; 3 &rarr; 4
#### Đường đi số 4: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 9 &rarr; 10 &rarr; 11 &rarr; 12 &rarr; 8 &rarr; 13 &rarr; 14 &rarr; 3 &rarr; 4
#### Đường đi số 5: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 10 &rarr; 11 &rarr; 15 &rarr; 16 &rarr; 20
## **3: Lập phương trình đường đi**
#### Route 1: array.length = 0
#### Route 2: array.length = 1
