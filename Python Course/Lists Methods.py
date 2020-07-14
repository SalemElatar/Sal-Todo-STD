# 
# ---------------------
# --- Lists ---
# ---------------------

y2jList = [0, "1", "Cena", "Morrison", 4, 5, "the Fiend", "the miz", "Jeff Hardy", "Edge"]

print(y2jList)
print(y2jList[0])
print(y2jList[3])
print(y2jList[-1])
print(y2jList[0:4])

#Replace Multi Items
y2jList[1] = 5
y2jList[-1] = "Cm Punk"

print(y2jList) #Edited List

#Edit Multi Items  ---- (Edit Not Replace)
y2jList[2:5] = ["John"]
y2jList[5:6] = []

print(y2jList) #Edited List


#--------------- Extend ----------------------------------

myFriends = ["Osama", "Ahmed", "Sayed"]
myOldFriends = ["Haytham", "Samah", "Ali"]
myFriends.extend(myOldFriends)
print(myFriends)


#--------------- Append ----------------------------------
myFriends.append(myOldFriends)

print(myFriends)
print(myFriends[6][2])


#--------------- Sort ----------------------------------
y = [500, -1, 50, -50, 30, -50, 4, 10, -10]
y.sort()
print(y)  #Sorted
y.sort(reverse=True) # Require on type of data So it cant sort a string in the list of numbers 
print(y) #sorted reverse

#--------------- Remove ----------------------------------
y.remove(-50)
print(y)


#--------------- Remove ----------------------------------
clearedList = [1, 2, 3, 4]

clearedList.clear()
print(clearedList)
# Or (if you Want to use index)
clearedList[0:] = []
print(clearedList)


#--------------- Copy ----------------------------------
c = [1, 2, 3, 4, 5]

b = c.copy() # Result would Chgange if you toggle this with line below
c.append(6)  # Result would Chgange if you toggle this with line Above

print(c)
print(b)


#--------------- Count ----------------------------------
d = [1, 2, 3, 4, 3, 9, 10, 1, 2, 1]
print(d.count(1))


#--------------- index ----------------------------------
e = ["Osama", "Ahmed", "Sayed", "Ramy", "Ahmed", "Ramy"]
print(e.index("Ramy"))


#--------------- insert ----------------------------------
f = [1, 2, 3, 4, 5, "A", "B"]
f.insert(0, "Test")
f.insert(-1, "Test")

print(f)


#--------------- pop ----------------------------------
g = [1, 2, 3, 4, 5, "A", "B"]
print(g.pop(-3))