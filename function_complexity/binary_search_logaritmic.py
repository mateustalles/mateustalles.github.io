data = [1, 2, 9, 8, 3, 4, 7, 6, 5, 10, 11, 12, 13, 14, 15]

def search_in_list(items):
    index_list = []
    steps = 0
    for item in items:
        steps += 1
        steps, index = binary_search_iterative(data, item)
        index_list.append((f'log(n): {steps}', f'index: {index}'))
    print(f'Iterações: {steps}')
    print(f'Indexes retornados: {index_list}')
    print(f'total de complexidade: n = {steps} * log(n): {[log for log, index in index_list]} para cada iteração')

def binary_search_iterative(array, element):
    ordered_array = sorted(array)
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print("Subarray in step {}: {}".format(step, str(ordered_array[start: end + 1])))
        step = step + 1
        mid = (start + end) // 2

        if element == ordered_array[mid]:
            return (step, mid)

        if element < ordered_array[mid]:
            end = mid - 1

        else:
            start = mid + 1

    return - 1


# print(binary_search_iterative(data, 5))

if __name__ == "__main__":
    search_in_list([1, 2, 6])
