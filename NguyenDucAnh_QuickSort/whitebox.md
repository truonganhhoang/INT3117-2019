#Báo cáo whitebox

##Code quicksort

Link repo: https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/src/java/main/QuickSort.java
```
private int partition(int[] arr, int left, int right) {
    //pivot
    int pivot = left;
    int index = pivot + 1;
    for (int i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}
```

##Đồ thị đường đi
[logo]: https://github.com/khaitun1998/INT3117-2019/blob/master/NguyenDucAnh_QuickSort/flowchart.png

##Liệt kê các đường đi
