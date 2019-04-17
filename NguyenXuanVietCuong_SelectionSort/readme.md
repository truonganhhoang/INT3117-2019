# **BÀI TẬP KIỂM THỬ**
### **- Họ và tên: Nguyễn Xuân Việt Cường**
### **- MSV: 16020208**
### **- Lớp: K61-CA-CLC1**
## **<u>Hàm đã chọn</u>**
```java
1 public <T extends Comparable<T>> T sort(T arr) {
2        int n = arr.length;
3        int i = 0;
4        while(i < n-1)
5        {
6            int min = i;
7            int j = i+1;
8            while(j < n)
9            {
10                if (SortUtils.less(arr[j], arr[min])) {
11                    min = j;
12                }
13                j++;
14            }
15            if (min != i) {
16                SortUtils.swap(arr, i , min);
17            }
18            i++;
19        }
20        return arr;
21    }
```
## **<u>Bước 1: Lập đồ thị</u>**
![](flowData.png)
## **<u>Bước 2: Liệt kê các đường đi</u>**
#### **Đường đi số 1:** 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 20
#### **Đường đi số 2:** 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 10 &rarr; 15 &rarr; 20
#### **Đường đi số 3:** 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 10 &rarr; 11 &rarr; 15 &rarr; 20
#### **Đường đi số 4:** 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 10 &rarr; 15 &rarr; 16 &rarr; 20
#### **Đường đi số 5:** 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 10 &rarr; 11 &rarr; 15 &rarr; 16 &rarr; 20
## **<u>Bước 3: Lập phương trình đường đi</u>**
#### **Cho x0,x1,x2**
#### **n = 3**
#### **i = 0**
#### **true: i < n-1 <=> min = i ; j = i + 1**
#### **true: j < n**
#### **true: x[min] < x[j] <=> min = j**
#### **true: min # i: temp = x[i] ; x[i] = x[min]; x[min] = temp**
#### **Giá trị sau khi xếp x1= ; x2= ; x3 =**
## **<u>Bước 4: Giải phương trình</u>**
### **Với x0=2; x1=3; x2=1**
### **Do i = 0 < n-1 = 2 nên**
##### **min = 0**
##### **j = i + 1 = 1**
### **Do j = 1 < n = 3 ta có**
### **Vì x0 = x[min] = 2 < x1 = 3 nên**
##### **min = 1**
### **Vì min = 1 # i nên**
##### **min = 1**
##### **min = 1**
##### **min = 1**