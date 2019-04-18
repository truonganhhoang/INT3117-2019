# Bài tập kiểm thử dòng điều kiện

#### Họ tên: Bùi Đức Anh
#### MSSV: 16020300   
#### Lớp: K61-CA-CLC1

## **Hàm đã chọn:**

```sh
1    int shellSort(int arr[], int n) 
     { 
2        for (int gap = n/2; gap > 0; gap /= 2) 
         { 
3            for (int i = gap; i < n; i += 1) 
             { 
4            int temp = arr[i]; int j;             
5                 for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) 
6                    arr[j] = arr[j - gap];
7                    arr[j] = temp; 
            } 
         } 
8      return 0; 
     } 
```

## **Bước 1: Lập đồ thị**

![](ShellSort.png)
