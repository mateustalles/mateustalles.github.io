from collections import Counter
from operator import mul

def is_prime_recursive(n, i = 2, is_prime = False):
    if n <= 1:
        is_prime = False
        return is_prime

    elif n == 2:
        is_prime = True
        return is_prime

    elif i == n:
        return is_prime

    elif n % i == 0:
        is_prime = False
        return is_prime

    else:
        i += 1
        return is_prime_recursive(n, i, is_prime=True)


def factors_generator(n, i = 2, factors = []):
    if n == 2:
        factors = [2]
        return factors

    elif i == n:
        return factors

    elif is_prime_recursive(i):
        factors.append(i)
        i += 1
        return factors_generator(n, i, factors)

    else:
        i += 1
        return factors_generator(n, i, factors)


def find_mmc(num1, num2, factors = None, factors_num1=[], factors_num2=[], index=0):
    if factors == None: factors = factors_generator(max(num1, num2))
    if num1 == 1 and num2 == 1:
        most_common = [*Counter(factors_num1).most_common(), *Counter(factors_num2).most_common()]
        most_common_sorted = sorted(most_common, key=lambda x: x[1], reverse=True)

        def filter_by_uniqueness(commons, iterated_items=[], unique_items=[], index=0):
            if commons[index][0] not in iterated_items:
                unique_items.append(commons[index])
            iterated_items.append(commons[index][0])
            if index >= len(commons) - 1:
                return unique_items
            index += 1
            return filter_by_uniqueness(commons, iterated_items, unique_items, index)

        unique_commons = filter_by_uniqueness(most_common_sorted)
        multipliers = [mul(common[0], common[1]) for common in unique_commons]
        mmc = 1
        for each in multipliers:
            mmc *= each
        return mmc

    elif num1 % factors[index] == 0:
        factors_num1.append(factors[index])
        num1 = num1 / factors[index]
        return find_mmc(num1, num2, factors, factors_num1, factors_num2, index)

    elif num2 % factors[index] == 0:
        factors_num2.append(factors[index])
        num2 = num2 / factors[index]
        return find_mmc(num1, num2, factors, factors_num1, factors_num2, index)

    else:
        index += 1
        return find_mmc(num1, num2, factors, factors_num1, factors_num2, index)


def find_mdc(num1, num2, factors=None, mdc_factors=[], index=0):
    if factors == None: factors = factors_generator(max(num1, num2))
    factorizations = 0
    if num1 == 1 and num2 == 1:
        mdc = 1
        for factor in mdc_factors:
            mdc *= factor
        return mdc
    if num1 % factors[index] == 0:
        num1 = num1 / factors[index]
        factorizations += 1
    if num2 % factors[index] == 0:
        num2 = num2 / factors[index]
        factorizations += 1
    if factorizations == 2:
        mdc_factors.append(factors[index])
        return find_mdc(num1, num2, factors, mdc_factors, index)
    if(factorizations == 0):
        index += 1
        return find_mdc(num1, num2, factors, mdc_factors, index)
    else: return find_mdc(num1, num2, factors, mdc_factors, index)


print(find_mmc(18, 60))

print(find_mdc(12, 20))
