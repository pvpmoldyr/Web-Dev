def string_times(str, n):
  return str*n

def front_times(str, n):
  return str[:3]*n

def string_bits(str):
  result = ""
  # Many ways to do this. This uses the standard loop of i on every char,
  # and inside the loop skips the odd index values.
  for i in range(len(str)):
    if i % 2 == 0:
      result = result + str[i]
  return result

def string_splosion(str):
  result = ""
  # On each iteration, add the substring of the chars 0..i
  for i in range(len(str)):
    result = result + str[:i+1]
  return result

def last2(str):
  if len(str) < 2:
    return 0

  last2 = str[len(str)-2:]
  count = 0
  
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      count = count + 1

  return count

def array_count9(nums):
  return nums.count(9)

def array_front9(nums):
  end = len(nums)
  if end > 4:
    end = 4
  
  for i in range(end):
    if nums[i] == 9:
      return True
  return False

def array123(nums):
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False

def string_match(a, b):
  # Figure which string is shorter.
  shorter = min(len(a), len(b))
  count = 0
  
  # Loop i over every substring starting spot.
  # Use length-1 here, so can use char str[i+1] in the loop
  for i in range(shorter-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      count = count + 1

  return count