n = int(input())

k = 0
current_value = 1

while current_value < n:
    current_value *= 2  
    k += 1              

print(k)