def hello_name(name):
  return "Hello " + name+ "!"
hello_name("bob")

def make_abba(a, b):
  return a+b+b+a
make_abba("Hi", "Bye")

def make_out_word(out, word):
  return out[:2] + word + out[2:]

def extra_end(str):
  return str[-2:]*3

def first_two(str):
  return str[:2]

def first_half(str):
  return str[:len(str)//2]

def without_end(str):
  return str[1:-1]

def combo_string(a, b):
    if len(a) < len(b):
        short, long = a, b
    else:
        short, long = b, a
    return short + long + short

def non_start(a, b):
  return a[1:] + b[1:]

def left2(str):
  return str[2:]+str[:2]