# Bài tập kiểm thử dòng điều kiện

#### Họ tên: Nguyễn Tuấn Bình
#### MSSV: 16020203
#### Lớp: K61-CA-CLC1

## **Hàm đã chọn:**

```java
1	static int largestContiguousSum(int arr) {
2		int i,len=arr.length,cursum=0,maxsum=Integer.MIN_VALUE;
3		if(len==0)	//empty array
4			return 0;
5		for(i=0;i<len;i++){
6			cursum+=arr[i];
7			if(cursum>maxsum){
8				maxsum=cursum;}
9			if(cursum<=0){
10				cursum=0;}}
11		return maxsum;}
```

## **Bước 1: Lập đồ thị**

![](FlowChart.JPG)

## **Bước 2: Liệt kê các đường đi**
#### **Đường đi số 1:** 1 &rarr; 2 &rarr; 3 &rarr; 4
#### **Đường đi số 2:** 1 &rarr; 2 &rarr; 3 &rarr; 5 &rarr; 11
#### **Đường đi số 3:** 1 &rarr; 2 &rarr; 3 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 9 &rarr; 10 &rarr; 5
#### **Đường đi số 4:** 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 6 &rarr; 7 &rarr; 9 &rarr; 10 &rarr; 5
## **<u>Bước 3: Lập phương trình đường đi (Path-condition)</u>**
