BÁO CÁO TEST WHITEBOX ITERATIVE BINARY SEARCH
+)  Link Github: https://github.com/TheAlgorithms/Java/blob/master/Searches/IterativeBinarySearch.java

+)  Source code:
      public  <T extends Comparable<T>> int find(T[] array, T key) {
          int l, r, k, cmp;

          l = 0;                              //1
          r = array.length - 1;               //2

          while (l <= r) {                    //3
              k = (l + r) / 2;                //4
              cmp = key.compareTo(array[k]);  //5

              if (cmp == 0) {                 //6
                  return k;                   //7
              } else if (cmp < 0) {           //8
                  r = --k;                    //9
              } else {                        //11
                  l = ++k;                    //12
              }
          }

          return -1;                          //13
      }


+)  Liệt kê đường đi:
      Path 1: 1 - 2 - 3 - 13
      Path 2: 1 - 2 - 3 - 4 - 5 - 6 - 7
      Path 3: 1 - 2 - 3 - 4 - 5 - 6 - 8 - 9 - 3 - 4 - 5 - 6 - 7
      Path 4: 1 - 2 - 3 - 4 - 5 - 6 - 8 - 9 - 3 - 4 - 5 - 6 - 8 - 9 - 3 - 4 - 5 - 6 - 8 - 9 - 3 - 4 - 5 - 6 - 8 - 9 - 3 - 13
      Path 5: 1 - 2 - 3 - 4 - 5 - 6 - 8 - 9 - 3 - 4 - 5 - 6 - 8 - 11 - 12 - 3 - 4 - 5 - 6 - 8 - 9 - 3 - 4 - 5 - 6 - 8 - 11 
      - 12 - 3 - 13
      Path 6: 1 - 2 - 3 - 4 - 5 - 6 - 8 - 11 - 12 - 3 - 13

+)  Phương trình đường đi:
      Path 1: 3 = False
      Path 2: 3 = True & 6 = True
      Path 3: 3 = True & 6 = False & 8 = True & 3 = True & 6 = True
      Path 4: 3 = True & 6 = False & 8 = True & 3 = True & 6 = False & 8 = True & 3 = True & 6 = False & 8 = True & 3 = True
      & 6 = False & 8 = True & 3 = False
      Path 5: 3 = True & 6 = False & 8 = True & 3 = True & 6 = False & 8 = False & 11 = True & 3 = True & 6 = False & 8 = True
      & 3 = True & 6 = False & 8 = False & 11 = True & 3 = False
      Path 6: 3 = True & 6 = False & 8 = False & 11 = True & 3 = False
