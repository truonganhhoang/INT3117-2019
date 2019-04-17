# Bài tập kiểm thử dòng điều kiện

### Họ tên: Vũ Phúc Hưng 
### MSSV: 16020237
### Lớp: K61-CA-CLC1


## **Hàm đã chọn**:
## https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Backtracking/sudoku_solve.cpp

```c++
1 bool isPossible(int mat[9][9],int i,int j,int no){
2   for(int x=0;x<n;x++){
3        if(mat[x][j]==no||mat[i][x]==no){
4            return false;
5        }
6    }
7    int sx = (i/3)*3;
8    int sy = (j/3)*3;
9    for(int x=sx;x<sx+3;x++){
10        for(int y=sy;y<sy+3;y++){
11            if(mat[x][y]==no){
12                return false;
13            }
14        }
15    }
16    return true;
17 }
```

## **Bước 1: Lập đồ thị**

![](isPossible.png)

## **Bước 2: Liệt kê các đường đi**


