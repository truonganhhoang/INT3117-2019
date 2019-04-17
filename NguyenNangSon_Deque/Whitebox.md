BÀI TẬP KIỂM THỬ
- Họ và tên: Nguyễn Năng Sơn
- MSV: 16022480
- Lớp: K61-CA-CLC2

Hàm đã chọn:
https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Data%20Structure/Queue%20Using%20Array.cpp
```
1. void Deque(){
2. 	if (front==rear)
3. 	{
4. 		cout<<"\nUnderflow";
5. 	}
6. 	else
7. 	{
8. 		cout<<"\n"<<queue[front++]<<" deleted";
9. 		for (int i = front; i < rear; i++)
10. 		{
11. 			queue[i-front]=queue[i];
12. 		}
13. 		rear=rear-front;
14. 		front=0;
15. 	}
16. }
```


Bước 1 : Lập đồ thị

![code2flow_gyZ9FW](https://user-images.githubusercontent.com/47601083/56302177-6e32f280-6163-11e9-9d93-edb89ac3abb9.png)

Bước 2 : Liệt kê các đường đi

Đường số 1: 1 -> 2 -> 3 -> 4 ->5

Đường số 2: 1 -> 2 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 15 -> 16



