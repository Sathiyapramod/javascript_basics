user = {
    "name": "alex",
    "status": True,
    "id": 101
}

print(user)
print(user["name"])

# print the keys alone
print(list(user.keys()))

# print the values alone
print(user.values())

# iteration process
for key in user.keys():
    print(key)
for value in user.values():
    print(value)
for key, value in user.items():
    print(key, "-", value)


user["address"] = "100, main road"

print(user)

del user["name"]
print(user)
