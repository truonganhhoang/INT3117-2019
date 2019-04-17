# Báo cáo test whitebox cho function Binary Search
___
### Họ và tên: Đỗ Xuân Anh
### MSSV: 16020192
### Lớp: K61-CA-CLC1
## Code Binary Search
___
Link repo github: [Binary Search](https://github.com/TheAlgorithms/Java/blob/master/Searches/BinarySearch.java)
```java
    private <T extends Comparable<T>> int BinarySearch(T array[], T key, int left, int right)
    {
        if (right < left)                                           //1
            return -1;                                              //2
        int median = (left + right) >>> 1;                          //3
        int comp = key.compareTo(array[median]);                    //4
        if (comp < 0) {                                             //5
            return BinarySearch(array, key, left, median - 1);      //6
        }                                                           //7
        if (comp > 0) {                                             //8
            return BinarySearch(array, key, median + 1, right);     //9
        }                                                           //10
        return median;                                              //11
    }
```
## Bước 1: Đồ thị đường đi
___
![](flow_chart.png)
## Bước 2: Liệt kê các đường đi
___
### Đường đi số 1: 1 &rarr; 2
### Đường đi số 2: 1 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6
### Đường đi số 3: 1 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 8 &rarr; 9
### Đường đi số 4: 1 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 8 &rarr; 11
## Bước 3: Lập phương trình đường đi
___
**Cho dãy: x1, x2, ..., xn;** (x[i] <= x[i+1])<br>
**Key = c; <br>**
### Đường đi số 1:
1. True &rarr; 1 <=> right < left
2. return -1 (Not found)
### Đường đi số 2:
1. False &rarr; 1 <=> right > left
2. True &rarr; 5 <=> key < array[median]
3. return BinarySearch(array, key, left, median-1)
### Đường đi số 3:
1. False &rarr; 1 <=> right > left
2. False &rarr; 5 <=> key >= array[median]
3. True &rarr; 8 <=> key > array[median]
4. return BinarySearch(array, key, median+1, right)
### Đường đi số 4:
1. False &rarr; 1 <=> right > left
2. False &rarr; 5 <=> key >= array[median]
3. False &rarr; 8 <=> key = array[median]
4. return median (Founded)
## Bước 4: Giải phương trình đường đi
___
### Đường đi số 1:
**Cho dãy: 2, 3, 4, 6, 7, 8, 9;**<br>
**Key = 5; <br>**
1. left=0, right=6 &rarr; median=3
2. array[median]=6 > key=5
3. left=0, right=2 &rarr; median=1
4. array[median]=3 < key=5
5. left=2, right=2 &rarr; median=2
6. array[median]=4 < key=5
7. right=2 < left=3 &rarr; return -1 (Not found)
### Đường đi số 2, 3 và 4:
**Cho dãy: 2, 3, 4, 5, 6, 7, 8, 9;**<br>
**Key = 5; <br>**
1. left=0, right=7 &rarr; median=4
2. array[median]=6 > key=5
3. left=0, right=3 &rarr; median=2
4. array[median]=4 < key=5
5. left=3, right=3 &rarr; median=3
6. array[median]=5 = key=5 &rarr; return 3 (Founded)
