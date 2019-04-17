Vũ Duy Mạnh - 16020047 - K61-ca-clc
<br/>
<br/>

Link: https://github.com/greenrobot/EventBus/blob/master/EventBus/src/org/greenrobot/eventbus/android/AndroidLogger.java
<br/>

Chọn hàm "mapLevel" dòng thứ 62

<br/>
<img src="vuduymanh.png"/>
<br/>
Có tổng cộng 5 đường đi <br/>

Đường đi 1 (xanh nước biển): Log.VERBOSE <br/>
 * Hệ phương trình
    * value < 800
    * value < 500
 * Giải : value = 400
 * Ca kiểm thử 
    * In: value = 400
    * Out: Log.VERBOSE
 
Đường đi 2 (xanh lá cây): Log.DEBUG <br/>
 * Hệ phương trình
    * value < 800
    * value >= 500
 * Giải : value = 600
 * Ca kiểm thử 
    * In: value = 600
    * Out: Log.DEBUG
    
Đường đi 3 (da cam): Log.INFO <br/>
 * Hệ phương trình
    * value >= 800
    * value < 900
 * Giải : value = 850
 * Ca kiểm thử 
    * In: value = 850
    * Out: Log.INFO
 
Đường đi 4 (nâu đen): Log.WARN <br/>
 * Hệ phương trình
    * value >= 800
    * value >= 900
    * value < 1000
 * Giải : value = 950
 * Ca kiểm thử 
    * In: value = 950
    * Out: Log.WARN
    
Đường đi 5 (vàng): Log.ERROR <br/>
 * Hệ phương trình
    * value >= 800
    * value >= 900
    * value >= 1000
 * Giải : value = 1050
 * Ca kiểm thử 
    * In: value = 1050
    * Out: Log.ERROR  
  
  
