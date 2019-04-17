# Bài tập kiểm thử dòng điều kiện
**Họ Tên: Nguyễn Xuân Tùng**

**MSSV: 16020297**

**Lớp: K61-CACLC2**

## Hàm đã chọn:

    1	public int find(int array[], int key) {
    2		int start = 0, end = (array.length - 1);
    3		while (start <= end && key >= array[start] && key <= array[end])
    4		{
    5			int pos = start + (((end-start) / (array[end]-array[start]))*(key - array[start]));
    6			if (array[pos] == key)
    7				return pos;
    8			if (array[pos] < key)
    9				start = pos + 1;
    10			else
    11				end = pos - 1;
    12		}
    13		return -1;
    14	}

## Bước 1: Lập đồ thị

[![](https://raw.githubusercontent.com/tungxuan1998/INT3117-2019/master/NguyenXuanTung_InterpolationSearch/Interpolation%20Search.png)](https://github.com/tungxuan1998/INT3117-2019/blob/master/NguyenXuanTung_InterpolationSearch/Interpolation%20Search.png)

## Bước 2: Liệt kê các đường đi

1: 1→2→3→13
2: 1→2→3→5→6→7
3: 1→2→3→5→6→8→9→3→13
4: 1→2→3→5→6→8→11→3→13
5: 1→2→3→5→6→8→9→3→5→6→7
6: 1→2→3→5→6→8→11→3→5→6→7

## Bước 3: Lập phương trình đường đi

## Bước 4: Giải quyết phương trình
