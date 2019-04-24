# Bài tập kiểm thử dòng điều kiện

#### Họ tên: Đào Tuấn Linh
#### MSSV: 16020246
#### Lớp: K61-CA-CLC1

## **Hàm đã chọn:**

```sh
1.  int i, j; 
2.  for (i = 0; i < n-1; i++)     
3.    for (j = 0; j < n-i-1; j++)
4.      if (arr[j] > arr[j+1]) 
5.        swap(&arr[j], &arr[j+1]); 
```

## **Bước 1: Lập đồ thị**

![](https://github.com/khaitun1998/INT3117-2019/blob/master/DaoTuanLinh_BubbleSort/New%20Note.jpeg)

## **Bước 2: Liệt kê các đường đi**

### **Đường số 1**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5

### **Đường số 2**: 1 &rarr; 2 &rarr; 3 &rarr; 4

### **Đường số 3**: 1 &rarr; 2 &rarr; 3

### **Đường số 4**: 1 &rarr; 2


### **Đường số 5**: 1


## **Bước 3: Lập phương trình đường đi (Path-condition)**

### **Đường số 1**: i < n-1; j < n-i-1;  arr[j] > arr[j+1]
### **Đường số 2**: i < m-1; j < n-i-1; arr[j] < arr[j+1]
### **Đường số 3**: i < m-1; j > n-i-1;
### **Đường số 4**: n = 1;

```sh

```



