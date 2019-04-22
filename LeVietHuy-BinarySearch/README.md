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
