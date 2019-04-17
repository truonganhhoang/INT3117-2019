# Bài tập kiểm thử dòng điều kiện

#### Họ tên: Bùi Đức Anh
#### MSSV: 16020300   
#### Lớp: K61-CA-CLC1

## **Hàm đã chọn:**

```sh
1    int shellSort(int arr[], int n) 
2    { 
3        for (int gap = n/2; gap > 0; gap /= 2) 
4        { 
5            for (int i = gap; i < n; i += 1) 
6            { 
7            int temp = arr[i]; 
8            int j;             
9                 for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) 
10                   arr[j] = arr[j - gap];
11                   arr[j] = temp; 
12           } 
13        } 
14     return 0; 
15   } 
```

## **Bước 1: Lập đồ thị**

![](ShellSort.png)
