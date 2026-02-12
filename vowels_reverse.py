def vowels_reverse(word: str) -> str:
    if len(word) == 0:
        return "invalid input"
    else:
        # finding the vowels
        # finding the index of vowels
        vowels_char = []
        indices = []
        # checker for vowels
        vowels = "aeiouAEIOU"

        for i in range(len(word)):
            if word[i] in vowels:
                # append the index
                indices.append(i)
                # append the vowel
                vowels_char.append(word[i])

        # change the string to list
        new_word = []
        for x in word:
            new_word.append(x)
        # finding the length of indices
        l = len(indices)

        # traverse from first to last in indices array
        for j in range(0, l, +1):
            idx = indices[j]
            letter = vowels_char[l - j - 1]
            word[idx] = letter

        return "".join(word)


vowels_reverse("IceCreAm")
