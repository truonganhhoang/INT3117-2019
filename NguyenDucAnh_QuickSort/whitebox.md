# Báo cáo whitebox

### Nguyễn Đức Anh - 16020196 - K61CACLC1

## Code quicksort

Link repo: https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/src/java/main/QuickSort.java
```
1        private int partition(int[] arr, int left, int right) {
2            int pivot = left;
3            int index = pivot + 1;
4            for (int i = index; i <= right; i++) {
5                if (arr[i] < arr[pivot]) {
6                    swap(arr, i, index);
7                    index++;
8                }
9            }
10           swap(arr, pivot, index - 1);
11           return index - 1;
12        }
```

## Đồ thị đường đi
![alt text](https://github.com/khaitun1998/INT3117-2019/blob/master/NguyenDucAnh_QuickSort/flowchart.png)

Coi vòng for sai hoặc chỉ chạy một lần đúng rồi thoát để thuận tiện.

## Liệt kê các đường đi

### Đường đi 1: 1 → 2 → 3 → 4 → 10 → 11
### Đường đi 2: 1 → 2 → 3 → 4 → 5 → 10 → 11
### Đường đi 3: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 10 → 11

## Lập phương trình đường đi

### Đường đi 1: index > right → swap(arr, pivot, index - 1) → return index - 1
### Đường đi 2: index <= right → arr[i] >= arr[pivot] → swap(arr, pivot, index - 1) → return index - 1
### Đường đi 3: index <= right → arr[i] < arr[pivot] → swap(arr, i, index) → return index -1
