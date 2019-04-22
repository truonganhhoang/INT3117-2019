 Bài tập kiểm thử dòng điều kiện

#### Họ tên: Lê Viết Huy
#### MSSV: 16020240  
#### Lớp: K61-CA-CLC1

## **Hàm đã chọn:**

```sh
1  private <T extends Comparable<T>> int search(T array[], T key, int left, int right){
    2    if (right < left) return -1; // this means that the key not found

        // find median
        int median = (left + right) >>> 1;
        int comp = key.compareTo(array[median]);

     3   if (comp < 0) {
            return search(array, key, left, median - 1);
        }

      4  if (comp > 0) {
            return search(array, key, median + 1, right);
        }

        return median;
    }
```
## **Bước 1: Code to Flowchart**

![](BinarySearchH.png)

## **Bước 2: Find list of roads **
#### Path 1: 1 &rarr; 2 &rarr; 5
#### Path 2: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5  

## **Step 3 : Path condition**
#### Path 1 : 0 <= n <= 1
#### Path 2 : n >= 2

## **Step 4 : Generate testcase**
#### Path 1 : arr[] = {}, n = 0 || arr[] = {1}, n = 1
#### Path 2 : arr[] = {12, 5, 7, 9}, n = 4 || arr[] = {4, 2}, n = 2


## **Step 5 : Expected output**
#### Path 1 : Return arr[] = {}
#### Path 2 : Return arr[] = {5, 7, 9, 12} || Return arr[] = {2, 4}
