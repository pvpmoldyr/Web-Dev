a = int(input())
b = int(input())
for x in range(a, b+1):
    if(x**0.5)%1==0:
        print(x, end=" ")