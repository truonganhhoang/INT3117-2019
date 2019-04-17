# Bài tập kiểm thử dòng điều kiện
**Họ Tên: Nguyễn Xuân Tùng**

**MSSV: 16020297**

**Lớp: K61-CACLC2**

## Hàm đã chọn:

    	public int find(int array[], int key) {
    		int start = 0, end = (array.length - 1);
    		while (start <= end && key >= array[start] && key <= array[end])
    		{
    			int pos = start + (((end-start) / (array[end]-array[start]))*(key - array[start]));
    			if (array[pos] == key)
    				return pos;
    			if (array[pos] < key)
    				start = pos + 1;
    			else
    				end = pos - 1;
    		}
    		return -1;
    	}

## Bước 1: Lập đồ thị

[![](https://raw.githubusercontent.com/tungxuan1998/INT3117-2019/master/NguyenXuanTung_InterpolationSearch/Interpolation%20Search.png)](https://github.com/tungxuan1998/INT3117-2019/blob/master/NguyenXuanTung_InterpolationSearch/Interpolation%20Search.png)

## Bước 2: Liệt kê các đường đi

## Bước 3: Lập phương trình đường đi

## Bước 4: Giải quyết phương trình
