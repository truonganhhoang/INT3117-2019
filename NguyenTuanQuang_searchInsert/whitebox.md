
### **- Họ và tên: Nguyễn Tuấn Quang**
### **- MSV: 16020273**
## **<u>Source code</u>**

#### https://github.com/begeekmyfriend/leetcode/blob/master/035_search_insert_position/insert_position.c?fbclid=IwAR3Y-aoCLVa27i8NbcfKUaZt0c2jvsmX7OJUt8wNZQwYBNMWkS-b-mmMPDU
```C++
1 static int searchInsert(int* nums, int numsSize, int target)
2 {
3     int low = -1;
4     int high = numsSize;
5     while (low + 1 < high) {
6         int mid = low + (high - low) / 2;
7         if (target > nums[mid]) {
8             low = mid;
9         } else {
10            high = mid;
11        }
12    }
13    return high;
14 }		
```
## **<u>Step 1: FlowChart</u>**

![](flowData.PNG)

## **<u>Step 2: Paths</u>**
#### **Path 1:** 3 &rarr; 4 &rarr; 5 &rarr; 13
#### **Path 2:** 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 13  
#### **Path 3:** 3 &rarr; 4 &rarr; 5 &rarr; 6 &rarr; 9 &rarr; 10 &rarr; 13


## **<u>Step 3: Path equation </u>**

### **Path 1**
#### **false: low + 1 < high → high <= low + 1 = 0 → high <= 0**

### **Path 2**
#### **true: low + 1 < high → high > 0**
#### **true: target > nums[mid] → high = mid**

### **Path 3**
#### **true: low + 1 < high → high > 0**
#### **false: target > nums[mid] → low = mid**

## **<u>Step 4: Solve </u>**
### **Example nums=[1,2,3], numsSize=3, target =2**
#### **low =-1 , high =3**
#### **low +1 =0 < high =3 -> true**
#### **mid = low + (high - low) / 2 = 1**
#### **2>a[1]=2 ? false -> high =1**
#### **low +1 =0 < high =1 -> true**
#### **int mid = low + (high - low) / 2 = 0**
#### **2>a[0]=1 ? true -> low =0**
#### **low +1 =1 < high =1 -> false**
#### **return high =1**


