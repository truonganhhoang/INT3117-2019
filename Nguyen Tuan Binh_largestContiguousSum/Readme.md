# Bài tập kiểm thử dòng điều kiện

#### Họ tên: Nguyễn Tuấn Bình
#### MSSV: 16020203
#### Lớp: K61-CA-CLC1

## **Hàm đã chọn:**

```java
1   	static int largestContiguousSum(int arr[]) {
2		int i,len=arr.length,cursum=0,maxsum=Integer.MIN_VALUE;
3		if(len==0)	//empty array
4		for(i=0;i<len;i++){
5			cursum+=arr[i];
6			if(cursum>maxsum){
7				maxsum=cursum;
8			}
9			if(cursum<=0){
10				cursum=0;
11			}
12		}
13		return maxsum;
14	}
```

## **Bước 1: Lập đồ thị**

![](FlowChart.JPG)

## **Bước 2: Liệt kê các đường đi**

## **<u>Bước 3: Lập phương trình đường đi (Path-condition)</u>**
