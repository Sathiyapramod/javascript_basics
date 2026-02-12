def is_prime_or_not(n: int) -> bool:
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    else:
        for i in range(2, n, +1):
            if n % i == 0:
                return False
        return True


print(is_prime_or_not(0))
print(is_prime_or_not(-1))
print(is_prime_or_not(2))
print(is_prime_or_not(9))
print(is_prime_or_not(7))
# even number
print(is_prime_or_not(22))
print(is_prime_or_not(49))
print(is_prime_or_not(23))
print(is_prime_or_not(67))
