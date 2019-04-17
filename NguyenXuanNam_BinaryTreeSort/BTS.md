# Báo cáo test whitebox cho function [Binary Tree Sort](https://github.com/TheAlgorithms/Java/blob/master/Sorts/BinaryTreeSort.java)

## Họ và tên: Nguyễn Xuân Nam
## MSSV: 16022414
## Lớp: K61 - CA - CLC1

# Code Binary Tree Sort

Link repo: [Binary Tree Sort](https://github.com/TheAlgorithms/Java/blob/master/Sorts/BinaryTreeSort.java)

~~~java
void insert(Node<T> node) {
			if (less(node.value, value)){                 //1
				if (left != null) left.insert(node);				//2
				else left = node;														//3
			}																							//4
			else {																				//5
				if (right != null) right.insert(node);			//6
				else right = node;													//7
			}
		}
~~~


## Bước 1: Lập đồ thị

![alt](./btr.png)


## Bước 2: Liệt kê đường đi

### Đường đi số 1: 1 -> 2 -> 3
### Đường đi số 2: 1 -> 2 -> 4
### Đường đi số 3: 1 -> 6 -> 7
### Đường đi số 4: 1 -> 6 -> 6

## Bước 3: Phương trình đường đi cho mỗi đường

### Đường đi số 1: 1 -> 2 -> 3
#### less(node.value, value)
#### let != null
#### let.insert(node)
### Đường đi số 2: 1 -> 2 -> 4
#### less(node.value, value)
#### let != null
#### left = node
### Đường đi số 3: 1 -> 6 -> 7
#### less(node.value, value)
#### right != Null
#### right = node
### Đường đi số 4: 1 -> 6 -> 6
#### less(node.value, value)
#### right != Null
#### right != Null

## Bước 4: Giải phương trình

### Với x0 = 9; x1 = 5; x3 = 7
### Node.value = 9
### value = 5
### True: And left != Null
### Left.insert(node)
