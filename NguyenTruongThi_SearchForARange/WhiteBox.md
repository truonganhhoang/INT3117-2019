static int binary_search_start(int *a, int size, int target)
{
    int low = -1;
    int high = size;
    while (low + 1 < high) {
        int mid = low + (high - low) / 2;
        if (target > a[mid]) {
            low = mid;
        } else {
            high = mid;
        }
    }

    if (high == size || a[high] != target) {
        return -1;
    } else {
        return high;
    }
}
+)Liệt kê đường đi: 
-Path 1: 1 -> 2 -> 3 -> 4 -> 5 -> 14 -> 15 
-Path 2: 1 -> 2 -> 3 -> 4 -> 5 -> 14 -> 16 -> 17 
-Path 3: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 5 -> 14 -> 15 
-Path 4: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 5 -> 14 -> 16 -> 17 
-Path 5: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 9 -> 10 -> 5 -> 14 -> 15 
-Path 6: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 9 -> 10 -> 5 -> 14 -> 16 -> 17

+)Phương trình đường đi 
-Path 1: 5 == false & 14 == true 
-Path 2: 5 == false & 14 == false 
-Path 3: 5 == true & 7 == true & 14 == true 
-Path 4: 5 == true & 7 == true & 14 == false 
-Path 5: 5 == false & 7 == false & 14 == true 
-Path 6: 5 == false & 7 == false & 14 == false
