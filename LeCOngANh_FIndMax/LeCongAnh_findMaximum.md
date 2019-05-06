Generate Unit Test for findMaximum Function
Tên: Lê Công Anh
Mssv: 16021248

source:https://github.com/mandliya/algorithms_and_data_structures/blob/master/sort_search_problems/findMaximum.cpp

int findMaximum(std::vector<int> & arr, int low, int high) {
	// subset has only one element
	if ( high == low ) {			//1
		return arr[low]; 	}	//2
	//subset has 2 elements
	if ( high - low == 1 ) {		//3
		return arr[high] > arr[low] ? arr[high] : arr[low];	//4
	}

	int mid = ( high + low )/2;			//5
	if ( arr[mid-1] > arr[mid] ) {			//6
		return findMaximum(arr, low, mid-1);	//7
	} else {
		return findMaximum(arr, mid+1, high);	//8
	}

}

1.FLOWCHART.PNG
2.Path
	2.1: 1->2
	2.2: 1->3->4
	2.3: 1->3->5->6->7
	2.4: 1->3->5->6->8
3.Lập phương trình đường đi
	Cho dãy: x1, x2, ..., xn;
	3.1 
		1.True => high=low
		2.Return arr[low]
	3.2
		1.false => high!=low
		2.True => (high - low)==1
		3.return arr[high] > arr[low] ? arr[high] : arr[low];
	3.3
		1.false => high!=low
		2.false => high-low != 1
		3.True =>return findMaximum(arr, low, mid-1);
	3.4	
		1.false => high!=low
		2.false => high-low != 1
		3.false => return findMaximum(arr, mid+1, high);
4.Giải phương trình đường đi
	4.1
		Cho dãy :2
		1.high = 0, low = 0 -> return arr[low]=2
	4.2
		cho dãy:2,3
		1.high = 1, low = 0 
		2.high - low ==1 ->return arr[high]=3
	4.3 vs 4.4
		cho dãy :3,1,2
		1.high = 2, low = 0
		2.high - low != 1
		3.mid = (high + low)/2
		4.arr[mid-1] > arr[mid]
		5.high =mid-1 == low -> return arr[low]=3 

