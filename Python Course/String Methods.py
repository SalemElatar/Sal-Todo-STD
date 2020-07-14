# 
# ---------------------
# -- Strings Methods --
# ---------------------

# strip() rstrip() lstrip()

a = "    I Love Python    "
print(a.strip())
print(a.rstrip())
print(a.lstrip())

a = "#####I Love Python####"
print(a.strip("#"))
print(a.rstrip("#"))
print(a.lstrip("#"))

a = "@#@#@#I Love Python@#@#@#"
print(a.strip("@#"))
print(a.rstrip("@#"))
print(a.lstrip("@#"))

# title()

b = "I Love 2d Graphics and 3g Technology and python"
print(b.title())

# capitalize()

b = "I Love 2d Graphics and 3g Technology and python"
print(b.capitalize())

# zfill

c, d, e, f = "1", "11", "111", "1111"

print(c)
print(d)
print(e)
print(f)

print(c.zfill(4))
print(d.zfill(4))
print(e.zfill(4))
print(f.zfill(4))

# upper()

g = "osama"

print(g.upper())

# lower()

h = "OSama"

print(h.lower())



# index(SubString, Start, End)

a = "I Love Python"
# print(a.index("P"))  # Index Number 7
# print(a.index("P", 0, 10))  # Index Number 7
# print(a.index("P", 0, 5))  # Through Error

# find(SubString, Start, End)

b = "I Love Python"
print(b.find("P"))  # Index Number 7
print(b.find("P", 0, 10))  # Index Number 7
print(b.find("P", 0, 5))  # -1

# rjust(Width, Fill Char) ljust(Width, Fill Char)

c = "Osama"
print(c.rjust(10))
print(c.rjust(10, "#"))

d = "Osama"
print(d.ljust(10))
print(d.ljust(10, "#"))

# splitlines()

e = """First Line
Second Line
Third Line"""

print(e.splitlines())

f = "First Line\nSecond Line\nThird Line"

print(f.splitlines())

# expandtabs()

g = "Hello\tWorld\tI\tLove\tPython"
print(g.expandtabs(2))

one = "I Love Python And 3G"
two = "I Love Python And 3g"
print(one.istitle())
print(two.istitle())

three = " "
four = ""
print(three.isspace())
print(four.isspace())

five = 'i love python'
six = 'I Love Python'
print(five.islower())
print(six.islower())

seven = "osama_elzero"
eight = "OsamaElzero100"
nine = "Osama--Elzero100"

print(seven.isidentifier())
print(eight.isidentifier())
print(nine.isidentifier())

x = "AaaaaBbbbbb"
y = "AaaaaBbbbbb111"
print(x.isalpha())
print(y.isalpha())

u = "AaaaaBbbbbb"
z = "AaaaaBbbbbb111"
print(u.isalnum())
print(z.isalnum())




# replace(Old Value, New Value, Count)

a = "Hello One Two Three One One"
print(a.replace("One", "1"))
print(a.replace("One", "1", 1))
print(a.replace("One", "1", 2))

# join(Iterable)

myList = ["Osama", "Mohamed", "Elsayed"]
print("-".join(myList))
print(" ".join(myList))
print(", ".join(myList))
print(type(", ".join(myList)))








# ---------------------
# -- Strings Methods --
# ---------------------

# split() rsplit()

a = "I Love Python and PHP and MySQL"
print(a.split())

b = "I-Love-Python-and-PHP-and-MySQL"
print(b.split("-"))

c = "I-Love-Python-and-PHP-and-MySQL"
print(c.split("-", 3))

d = "I-Love-Python-and-PHP-and-MySQL"
print(d.rsplit("-", 3))

# center()

e = "Osama"
print(e.center(9))  # Spaces
print(e.center(9, "#"))  # Hashes
print(e.center(15, "@"))  # @

# count()

f = "I Love Python and PHP Because PHP is Easy"
print(f.count("PHP"))  # 2 PHP Words
print(f.count("PHP", 0, 25))  # Only One PHP Word

# swapcase()

g = "I Love Python"
h = "i lOVE pYTHON"

print(g.swapcase())
print(h.swapcase())

# startswith()

i = "I Love Python"
print(i.startswith("I"))
print(i.startswith("S"))
print(i.startswith("P", 7, 12))

# endswith()

j = "I Love Python"
print(j.endswith("n"))
print(j.endswith("S"))
print(j.endswith("e", 2, 6))

