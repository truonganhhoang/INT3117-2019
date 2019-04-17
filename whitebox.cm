# **BÀI TẬP KIỂM THỬ**
### **- Họ và tên: Nguyễn Xuân Việt Cường**
### **- MSV: 16021620**
## **<u>Source code</u>**

```C++
static int mySqrt(int x)
{
    if (x == 0) {												//1
        return 0;												//2
    }															//3

    unsigned int left = 1;										//4
    unsigned int right = (unsigned int) x;						//5
    for (; ;) {													//6
        unsigned int mid = left + (right - left) / 2;			//7
        if (mid > x/mid) {										//8
            right = mid;										//9
        } else {												//10
            if (mid + 1 > x/(mid + 1)) {						//11
                return mid;										//12
            } else {											//13
                left = mid;										//14
            }													//15
        }														//16
    }															//17
}			
```
## **<u>Step 1: FlowChart</u>**

![](FlowChart.JPG)

## **<u>Step 2: Paths</u>**
#### **Path 1:** 1 &rarr; 2 
#### **Path 1:** 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 8 &rarr; 9 &rarr; 7
#### **Path 1:** 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 10 &rarr; 11 &rarr; 12
#### **Path 1:** 4 &rarr; 5 &rarr; 6 &rarr; 7 &rarr; 10 &rarr; 13 &rarr; 14 &rarr; 7

## **<u>Step 3: Path equation </u>**

#### **true: x==0 → sqrt(x) = 0**
#### **true: mid > x/mid → right = mid**
#### **true: mid + 1 > x/(mid+1) → sqrt(x) = mid**
#### **true: !(mid + 1 > x/(mid + 1)) → left = mid**

## **<u>Step 4: Solve</u>**
### **Example x=4**
#### **x==4 → x!=0**
#### **We have left = 1, right = 4**
#### **mid = left + (right - left) / 2 = 3**
#### **3 > 4/3  → right = 3**
#### **→ mid = left + (right - left) / 2 = 2**
#### **2 = 4/2 and (mid + 1) > x/(mid + 1)**
#### **→ sqrt(x) = mid = 2**





