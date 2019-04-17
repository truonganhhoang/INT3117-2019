# BÀI TẬP KIỂM THỬ HỘP TRẮNG
#### Họ và tên: Nguyễn Thị Linh
#### MSSV: 16022409

Repo: https://github.com/TheAlgorithms/Java/blob/master/Others/EulersFunction.java

```
static int getEuler(int n){
    int result = n;
        for (int i = 2; i * i <= n; i++) {
            if(n % i == 0) {
                while (n % i == 0) n /= i;
                result -= result / i;
            }
        }
        if (n > 1) result -= result / n;
        return result;
}        

```