def double_char(str):
    result = ""
    for char in str:
        result += char * 2
    return result

def count_hi(str):
  return str.count("hi")

def cat_dog(str):
  return str.count("cat")==str.count("dog")

def count_code(s):
  count = 0
  for i in range(len(s) - 3):  
    if s[i] == 'c' and s[i+1] == 'o' and s[i+3] == 'e':  
      count += 1
  return count

def end_other(a, b):
    a, b = a.lower(), b.lower()  
    return a.endswith(b) or b.endswith(a)

def xyz_there(str):
  str = str.replace('.xyz', '')
  return 'xyz' in str
