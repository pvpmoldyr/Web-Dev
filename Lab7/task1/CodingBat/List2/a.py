def count_evens(nums):
  cnt = 0
  for x in nums:
    if x%2==0:
      cnt+=1
  return cnt

def big_diff(nums):
  maximum = max(nums)
  minimum = min(nums)
  return maximum - minimum

def centered_average(nums):
    nums.sort() 
    return sum(nums[1:-1]) // (len(nums) - 2)

def sum13(nums):
    total = 0
    i = 0
    
    while i < len(nums):
        if nums[i] == 13:
            i += 2  
        else:
            total += nums[i]
            i += 1
    
    return total

def sum67(nums):
    total = 0
    ignore = False  

    for num in nums:
        if num == 6:
            ignore = True  
        elif num == 7 and ignore:
            ignore = False 
        elif not ignore:
            total += num  

    return total

def has22(nums):
    for i in range(len(nums) - 1):  
        if nums[i] == 2 and nums[i + 1] == 2:
            return True  
    return False