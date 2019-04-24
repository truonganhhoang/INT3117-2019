Báo cáo test whitebox Code CocktailShakerSort ( hàm sort ) 
Link github: https://github.com/TheAlgorithms/Java/blob/master/Sorts/CocktailShakerSort.java

Code : 

public <T extends Comparable<T>> T[] sort(T[] array) {

        int length = array.length;          //1
        int left = 0;                       //2
        int right = length - 1;             //3
        int swappedLeft, swappedRight;      //4
        while (left < right) {              //5
            // front
            swappedRight = 0;               //6
            for (int i = left; i < right; i++) {                             //7
                if (SortUtils.less(array[i + 1], array[i])) {                //8
                    SortUtils.swap(array, i, i + 1);                         //9
                    swappedRight = i;                                        //10
                }
            }
            // back
            right = swappedRight;                                            //11
            swappedLeft = length - 1;                                        //12
            for (int j = right; j > left; j--) {                             //13
                if (SortUtils.less(array[j], array[j - 1])) {                //14
                    SortUtils.swap(array, j - 1, j);                         //15
                    swappedLeft = j;                                         //16
                }
            }
            left = swappedLeft;                                              //17
        }
        return array;                                                        //18
}

Liệt kê đường đi : 
Path 1 : 1 2 3 4 5 18
Path 2 : 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18  
Path 3 : 1 2 3 4 5 6 7 8 9 10 11 12 13 14 17 18
Path 4 : 1 2 3 4 5 6 7 8 11 12 13 14 15 16 17 18 
Path 5 : 1 2 3 4 5 6 7 8 11 12 13 14 17 18 

Phương trình cho mỗi đường đi 
Path 1 : 5 : False 
Path 2 : 5 : True
         8 : True
        14 : True
Path 3 : 5 : True
         8 : True
        14 : False
Path 4 : 5 : True
         8 : False
        14 : True
Path 5 : 5 : True
         8 : False
        14 : False
