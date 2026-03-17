import math

a = int(input())
cnt = 0

for i in range(1, int(a**0.5) + 1):
    if a % i == 0:
        if i * i == a:
            cnt += 1 
        else:
            cnt += 2 

print(cnt)