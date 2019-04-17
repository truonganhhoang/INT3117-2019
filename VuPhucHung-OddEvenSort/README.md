# Bài tập kiểm thử dòng điều kiện

### Họ tên: Vũ Phúc Hưng 
### MSSV: 16020237
### Lớp: K61-CA-CLC1


## **Hàm đã chọn**:

```c++
bool isPossible(int mat[9][9],int i,int j,int no){
    for(int x=0;x<n;x++){
        if(mat[x][j]==no||mat[i][x]==no){
            return false;
        }
    }
    int sx = (i/3)*3;
    int sy = (j/3)*3;
    for(int x=sx;x<sx+3;x++){
        for(int y=sy;y<sy+3;y++){
            if(mat[x][y]==no){
                return false;
            }
        }
    }
    return true;
}
```

## **Bước 1: Lập đồ thị**

![](oddEvenSort.png)

## **Bước 2: Liệt kê các đường đi**


