"""
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Input : “aabb” , Output is -1
Input: “aabbc”, Output is 4 #Explanation: c is the first unique character, and it exists at index 4
Input: “a1b1c”, Output is 0

"""


def first_non_repeating(word: str) -> int:
    if len(word) == 0:
        return -1
    if len(word) == 1:
        return 0
    else:
        # declare an empty dictionary
        count = {}

        for i in range(0, len(word), +1):
            # print(word[i])
            if word[i] in count:
                count[word[i]] = count[word[i]] + 1
            else:
                count[word[i]] = 1
        # print(count)
        for key in count:
            if count[key] == 1:
                for i in range(len(word)):
                    if key == word[i]:
                        return i
        return -1


# print(first_non_repeating("aabb"))
# print(first_non_repeating("a1b1c"))
print(first_non_repeating("aabbc"))
