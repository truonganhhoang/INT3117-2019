### **- Họ và tên: Hà Tuấn Phong**
### **- MSV: 16020263**
## **<u>Source code</u>**
#### https://github.com/TheAlgorithms/Java/blob/master/Dynamic%20Programming/Knapsack.java
```Java
1 private static int knapSack(int W, int wt[], int val[], int n)
2 {
3 	int i, w;
4 	int rv[][] = new int[n+1][W+1];    //rv means return value
5 	
6 	// Build table rv[][] in bottom up manner
7 	for (i = 0; i <= n; i++)
8 	{
9 		for (w = 0; w <= W; w++)
10		{
11			if (i==0 || w==0)
12				rv[i][w] = 0;
13			else if (wt[i-1] <= w)
14				rv[i][w] = Math.max(val[i-1] + rv[i-1][w-wt[i-1]], rv[i-1][w]);
15			else
16				rv[i][w] = rv[i-1][w];
17		}
18	}
19	
20	return rv[n][W];
21 }
```
## **<u>Flowchart</u>**
![](Knapsack.png)

## **<u>Paths</u>**
#### **Path 1:** 7
#### **Path 2:** 7 &rarr; 9 &rarr; 7
#### **Path 3:** 7 &rarr; 9 &rarr; 11 &rarr; 9 &rarr; 7
#### **Path 4:** 7 &rarr; 9 &rarr; 11 &rarr; 13 &rarr; 9 &rarr; 7
#### **Path 5:** 7 &rarr; 9 &rarr; 11 &rarr; 13 &rarr; 15 &rarr; 9 &rarr; 7

## **<u>Solve paths</u>**
## **<u>Test case and expected results</u>**
