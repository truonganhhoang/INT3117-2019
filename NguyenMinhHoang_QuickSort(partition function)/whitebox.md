<<<<<<< HEAD
Báo cáo test whitebox Code QuickSort ( hàm partition) Link github: https://github.com/TheAlgorithms/Java/blob/master/Sorts/QuickSort.java

Code:

private static <T extends Comparable> int partition(T[] array, int left, int right) { int mid = (left + right) / 2; //1 T pivot = array[mid]; //2

    while(left <= right) {                      //3
        while(less(array[left], pivot)){        //4
            ++left;                             //5
        }
        while(less(pivot, array[right])) {      //6
            --right;                            //7
        } 
        if (left <= right) {                    //8
            swap(array, left, right);           //9
            ++left;                             //10
            --right;                            //11
        }
    }
    return left;                                //12
}


liệt kê đường đi:
Path 1: 1 - 2 - 3 - 12
Path 2: 1 - 2 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 12
Path 3: 1 - 2 - 3 - 4 - 5 - 4 - 5 - 6 - 8 - 9 - 10 - 11 - 3 - 4 - 5 - 4 - 5 - 6 - 8 - 9 - 10 - 11 - 12
Path 4: 1 - 2 - 3 - 4 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 3 - 4 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 12
Path 5: 1 - 2 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 12
Path 6: 1 - 2 - 3 - 4 - 6 - 8 - 9 - 10 - 11 - 12

Phương trình cho mỗi đường đi
Path 1: 3 = false
Path 2: 3 = true
        4 = true
        6 = true
        8 = true
        
Path 3: 3 = true
        4 = true
        6 = false
        8 = true
        
Path 4: 3 = true
        4 = false
        6 = true
        8 = true
        
Path 5: 3 = true
        4 = true
        6 = true
        8 = false      
        
Path 6: 3 = true
        4 = false
        6 = false
        8 = true
=======
Báo cáo test whitebox 
Code QuickSort ( hàm partition)
Link github: https://github.com/TheAlgorithms/Java/blob/master/Sorts/QuickSort.java

Code:

private static <T extends Comparable<T>> int partition(T[] array, int left, int right) {
        int mid = (left + right) / 2;               //1
        T pivot = array[mid];                       //2

        while(left <= right) {                      //3
            while(less(array[left], pivot)){        //4
                ++left;                             //5
            }
            while(less(pivot, array[right])) {      //6
                --right;                            //7
            } 
            if (left <= right) {                    //8
                swap(array, left, right);           //9
                ++left;                             //10
                --right;                            //11
            }
        }
        return left;                                //12
    }
    
    
    liệt kê đường đi:
    Path 1: 1 - 2 - 3 - 12
    Path 2: 1 - 2 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 12
    Path 3: 1 - 2 - 3 - 4 - 5 - 4 - 5 - 6 - 8 - 9 - 10 - 11 - 3 - 4 - 5 - 4 - 5 - 6 - 8 - 9 - 10 - 11 - 12
    Path 4: 1 - 2 - 3 - 4 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 3 - 4 - 6 - 7 - 6 - 7 - 8 - 9 - 10 - 11 - 12
    Path 5: 1 - 2 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 3 - 4 - 5 - 4 - 5 - 6 - 7 - 6 - 7 - 8 - 12
    Path 6: 1 - 2 - 3 - 4 - 6 - 8 - 9 - 10 - 11 - 12
    
    Phương trình cho mỗi đường đi
    Path 1: 3 = false
    Path 2: 3 = true
            4 = true
            6 = true
            8 = true
            
    Path 3: 3 = true
            4 = true
            6 = false
            8 = true
            
    Path 4: 3 = true
            4 = false
            6 = true
            8 = true
            
    Path 5: 3 = true
            4 = true
            6 = true
            8 = false      
            
    Path 6: 3 = true
            4 = false
            6 = false
            8 = true
>>>>>>> fe95c053e2e6071da64a07f20cfd6076a97aada5
