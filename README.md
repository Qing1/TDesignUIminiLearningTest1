TreeSelect 树形选择

在pages/test1/test1中
在选择了三级列表后，再选择二级列表，之前的三级列表选中值，还在保存着
![image](https://github.com/user-attachments/assets/ffa234d5-43b7-4a81-ba0a-092c337eea9c)



本身 是想借助DropdownMenu 下拉菜单组件实现多级列表选择功能的

![image](https://github.com/user-attachments/assets/0a23ff51-7e39-4dcf-b4f4-e2dd7f7343ee)

实际使用时候 发现 TreeSelect 树形选择 值
在 多级列表 切换时候 之前的值 并不能适当的切换 
猜测可能 需要在 children为空的时候 把之前的选中值去掉 
![image](https://github.com/user-attachments/assets/56d2a6e4-66de-4c75-9734-de0f3c463e31)
