# BÀI TẬP KIỂM THỬ HỘP TRẮNG
#### Họ và tên: Nguyễn Thị Linh
#### MSSV: 16022409

Repo: https://github.com/TheAlgorithms/Java/blob/master/Others/Armstrong.java

```
1 static boolean checkIfANumberIsAmstrongOrNot(int number) {
2		int remainder, sum = 0, temp = 0;
3		temp = number;
4		while (number > 0) {
5			remainder = number % 10;
6			sum = sum + (remainder * remainder * remainder);
7			number = number / 10;
8		}
9		if (sum == temp) {
10			return true;
11		} else {
12			return false;
13		}
14	}

```

#### Bước 1: Tạo đồ thị của hàm Armstrong (hàm kiểm tra xem 1 số có phải là số armstrong hay không. Số Armstrong là số mà bằng tổng số khối các chữ số của nó)

![](ArmstrongCFG.JPG)

#### Bước 2: Liệt kê các đường đi

1, 2 &rarr; 3 &rarr; 4 &rarr; 9 &rarr; 10 </br>
2, 2 &rarr; 3 &rarr; 4 &rarr; 9 &rarr; 11 </br>
3, 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 4 &rarr; 9 &rarr; 10 </br>
4, 2 &rarr; 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 4 &rarr; 9 &rarr; 11 </br>

#### Bước 3: Xây dựng biểu thức điều kiện đường đi và tính các giá trị kiểm thử thỏa mãn

### Đường đi 1:
-Để 4 &rarr; 9 thì 4 phải trả về giá trị false &rarr; number > 0 fasle &rarr; number <= 0 (1) </br>
- Để 9 &rarr; 10 thì 9 phải trả về giá trị true &rarr; sum = temp (2) </br>
- Mà temp = number && sum = 0 (3) </br>
(1) (2) (3) &rarr; number = 0 

### Đường đi 2:
- Để 4 &rarr; 9 thì 4 phải trả về giá trị false &rarr; number > 0 fasle &rarr; number <= 0 (1) </br>
- Để 9 &rarr; 11 thì 9 phải trả về giá trị false &rarr; sum != temp (2) </br>
- Mà temp = number && sum = 0 (3) </br>
(1) (2) (3) &rarr; number < 0

### Đường đi 3:
- Để 4 &rarr; 5 thì 4 phải trả về giá trị true &rarr; number > 0  </br>
- Dòng 5, 6, 7 chạy </br>
- Sau đó, tương tự đường đi 1 &rarr; (number/10) = 0 

### Đường đi 4:
- Để 4 &rarr; 5 thì 4 phải trả về giá trị true &rarr; number > 0 </br>
- Dòng 5, 6, 7 chạy </br>
- Sau đó, tương tự đường đi 2 &rarr; (number/10) < 0 

#### Bước 4: Tính giá trị mong đợi và tạo bộ kiểm thử hoàn chỉnh

### Đường đi 1:
- Input: 0
- Expected Output: True

### Đường đi 2:
- Input: -3
- Expected Output: False

### Đường đi 3:
- Input: 153
- Expected Output: True

### Đường đi 4:
- Input: 37
- Expected Output: False