---


---

<p>Họ và tên : Phạm Thanh Hùng<br>
Mã sinh viên : 16020236</p>
<p><strong>Hàm đã lựa chọn</strong>:</p>
<pre><code>1.    public static int gcd(int num1, int num2) {  	
2.
3.        if (num1 == 0)								
4.            return num2;							
5.
6.        while (num2 != 0) {							
7.            if (num1 &gt; num2)						
8.                num1 -= num2;						
9.            else									
10.                num2 -= num1;						
11.        }											
12.
13.        return num1;								
14.    }		
</code></pre>
<p><strong>Lập đồ thị</strong>:<br>
<img src="https://i.imgur.com/P6rmonE.jpg" alt="enter image description here"></p>
<p><strong>Liệt kê các đường đi</strong>:</p>
<p>Đường 1 : 1-3-4<br>
Đường 2 : 1-3-6-13<br>
Đường 3 : 1-3-6-7-8<br>
Đường 4 : 1-3-6-7-10</p>
<p><strong>Lập phương trình đường đi</strong>:<br>
<strong>Đường đi 1 :</strong><br>
int num1, num2<br>
num1=0<br>
num2<br>
<strong>Đường đi 2 :</strong><br>
int num1, num2<br>
num1!=0<br>
num2=0<br>
num1<br>
<strong>Đường đi 3 :</strong><br>
int num1, num2<br>
num1!=0<br>
num2!=0<br>
num1&gt;num2<br>
num1-=num2<br>
<strong>Đường đi 4 :</strong><br>
num1!=0<br>
num2!=0<br>
num1&lt;=num2<br>
num2-=num1</p>
<p><strong>Giải phương trình đường đi</strong><br>
Ví dụ : num1 = 6 ; num2= 8<br>
Ta chọn đường đi 4 : 1-3-6-7-10<br>
Mẫu chung nhỏ nhất của num1 và num2 là : 8- 6 =2</p>

