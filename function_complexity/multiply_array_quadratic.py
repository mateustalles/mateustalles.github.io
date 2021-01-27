import time


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0
    
    start = time.perf_counter()

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 + number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')

    end = time.perf_counter()
    print(f'elapsed time: {end - start}')
    return result

array1 = [1,2,3,4,5,6,7,8,9,10]
array2 = [11,12,13,14,15,16,17,18,19,20]

multiply_arrays(array1, array2)
