#include<stdio.h>
#include<math.h>
#include<conio.h>
#define MAX 4
int stack_arr[MAX];
int top=-1;
void push(int data)
{
	if(top==MAX-1)
	{
	printf("OVERFLOW");
	return;
	}
top=top+1;
stack_arr[top]=data;
}
int  pop()
{
int value;
if(top==-1)
{ 
printf("underflow");
}
value=stack_arr[top];
top=top-1;
return value;
}
void display()
{

for(int i=0;i<=top;i++)
{
printf("%d\n",stack_arr[i]);
}	
}

int main()
{
push(5);
push(6);
push(9);
push(11);
display();
pop();
pop();
display();
return 0;
}