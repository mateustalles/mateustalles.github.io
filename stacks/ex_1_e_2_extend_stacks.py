from stack import Stack

class Stack(Stack):
    def min_value(self):
        sorted_stack = self._data
        sorted_stack.sort()
        for i in sorted_stack:
            if isinstance(i, int):
                return i


class LimitStack(Stack):
    def __init__(self, value):
        super().__init__()
        self.max_size = value
    
    def push(self, value):
        if self.size() + 1> self.max_size:
            print(f'size: {self.size()}')
            print(f'maxsize: {self.max_size}')
            raise OverflowError
        self._data.append(value)



if __name__ == "__main__":
    content_stack = Stack()
    content_stack.push(1)
    content_stack.push(-2)
    content_stack.push(3)
    print(content_stack.min_value()) # saída: -2

    limit_stack = LimitStack(2)
    limit_stack.push(1)
    limit_stack.push(-2)
    try:
        limit_stack.push(3)
    except OverflowError:
        print("Não é possível adicionar outro item à pilha")
