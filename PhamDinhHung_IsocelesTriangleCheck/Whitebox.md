# Bài tập kiểm thử 
#### Họ tên: Phạm Đình Hùng
#### MSSV: 16020235
#### Lớp: K61-CA-CLC1

Source code: 
https://github.com/ryanjmurry/trianglechecker/blob/master/Triangles.cs

    1.  public bool Isoceles()
    2.  {
    3.  	if ((_side1 == _side2 || _side1 == _side3) && _side2 != _side3)
    4.  	{
    5.  		return true;
    6.      }
    7.      else if((_side2 == _side3 || _side2 == _side1) && _side3 != _side1)
    8.      {
    9.      	return true;
    10.     }
    11.     else if((_side2 == _side3 || _side3 == _side1) && _side2 != _side1)
    12.     {
    13.     	return true;
    14.     }
    15.     else
    16.     {
    17.     	return false;
    18.     }
    19.  }
  
**Bước 1: Lập đồ thị**:
<img src="https://i.imgur.com/dh8JY5r.jpg" alt="enter image description here">


**Bước 2: Liệt kê các đường đi**:


    - Đường 1 : 1-3-5  

    - Đường 2 : 1-3-7-9 

    - Đường 3 : 1-3-7-11-13

    - Đường 4 : 1-3-7-11-15


**Bước 3: Lập phương trình đường đi**:


    - Đường 1 : 1-3-5 : 

        (_side1 == _side2 || _side1 == _side3) && _side2 != _side3

    - Đường 2 : 1-3-7-9 :

        (_side2 == _side3 || _side2 == _side1) && _side3 != _side1

    - Đường 3 : 1-3-7-11-13

        (_side2 == _side3 || _side3 == _side1) && _side2 != _side1

    - Đường 4 : 1-3-7-11-15

        (_side1 == _side2 && _side1 == _side3) || (_side1 != _side2 && _side1 != _side3 && _side2 != _side3 )


**Bước 4: Giải phương trình đường đi và tạo bộ kiểm thử**


    - Đường 1 : 1-3-5  

        input: _side1 =5, _side2 =5, _side3 =4.

        output: true


    - Đường 2 : 1-3-7-9 

        input: _side1 =5, _side2 =8, _side3 =8.

        output: true


    - Đường 3 : 1-3-7-11-13

        input: _side1 =7, _side2 =5, _side3 =7.

        output: true


    - Đường 4 : 1-3-7-11-15

        input: _side1 =3, _side2 =4, _side3 =5.

        output: false
