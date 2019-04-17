# Báo cáo whitebox

### Nguyễn Đức Anh - 16020196 - K61CACLC1

## Code linearsort

Link repo: https://github.com/phishman3579/java-algorithms-implementation/blob/master/src/com/jwetherell/algorithms/search/LinearSearch.java
```
1    public class LinearSearch {
2        public static final int find(int value, int[] array) {
3            for (int i = 0; i < array.length; i++) {
4                int iValue = array[i];
5                if (value == iValue)
6                    return i;
7            }
8            return Integer.MAX_VALUE;
9        }
10    }
```

## Đồ thị đường đi
![alt text](https://github.com/khaitun1998/INT3117-2019/blob/master/NguyenDucAnh_QuickSort/flowchart.png)

Coi vòng for sai hoặc chỉ chạy một lần đúng rồi thoát để thuận tiện.

## Liệt kê các đường đi

### Đường đi 1: 1 → 2 → 3 → 8
### Đường đi 2: 1 → 2 → 3 → 4 → 5 → 6
### Đường đi 3: 1 → 2 → 3 → 4 → 5 → 8

## Lập phương trình đường đi

Dãy a[1], a[2],... a[n]. Tìm value index
### Đường đi 1: i >= array.length return Integer.MAX_VALUE
### Đường đi 2: i < array.length && value = array[i] return i
### Đường đi 3: i < array.length && value != array[i] return Integer.MAX_VALUE

## Giải phương trình đường đi

Dãy 1, 2, 3, 4, 5, value = 4
### Đường đi 1: i = 6 <=> i >= array.length return Integer.MAX_VALUE
### Đường đi 2: i = 3 && value = array[i] = 4 return 3
### Đường đi 3: i = 6 && value != array[i] return Integer.MAX_VALUE
