# Bài tập kiểm thử dòng điều kiện

#### Họ tên: Dương Quang Khải
#### MSSV: 16020242
#### Lớp: K61-CA-CLC1

## **Hàm đã chọn:**

```sh
1    public static int romanToInt(String A) {
2        char prev = ' ';
3        int sum = 0;
4        int newPrev = 0;
5        for (int i = A.length() - 1; i >= 0; i--) {
6            char c = A.charAt(i);
7            if (prev != ' ') {
8                if(map.get(prev) > newPrev){
9                    newPrev = map.get(prev)
10                }
11                else{
12                    newPrev = newPrev
13                }
14            }
15            int currentNum = map.get(c);
16            if (currentNum >= newPrev) {
17                sum += currentNum;
18            } else {
19                sum -= currentNum;
20            }
21            prev = c;
22        }
23        return sum;
24    }
```

## **Bước 1: Lập đồ thị**

![](flowchart.png)

## **Bước 2: Liệt kê các đường đi**

### **Đường số 1**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 23

### **Đường số 2**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 9 &rarr; 15 &rarr; 16 &rarr; 21 &rarr; 23

### **Đường số 3**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 11 &rarr; 12 &rarr; 15 &rarr; 16 &rarr; 21 &rarr; 23

### **Đường số 4**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 15 &rarr; 16 &rarr; 21 &rarr; 23

### **Đường số 5**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 9 &rarr; 15 &rarr; 18 &rarr; 19 &rarr; &rarr; 21 &rarr; 23

### **Đường số 6**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 11 &rarr; 12 &rarr; 15 &rarr; 18 &rarr; 19 &rarr; 21 &rarr; 23

### **Đường số 7**: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 18 &rarr; 19 &rarr; 21 &rarr; 23 

## **Bước 3: Lập phương trình đường đi (Path-condition)**

### **Đường số 1**: 1 &rarr; 2 &rarr; 3 &rarr; 4

```sh

```



