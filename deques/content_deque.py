class Deque:
    FIRST_ELEMENT = 0

    def __init__(self, value=[], max_size=10):
        self._data = [*value]
        self._max_size = max_size

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"

    def __check_deck_length_push(self):
        if len(self._data) + 1 > self._max_size:
            print(f'size: {len(self._data)}')
            print(f'maxsize: {self._max_size}')
            raise Exception('Overflow')

    def __check_deck_length_pop(self):
        if len(self._data) - 1 < 0:
            print(f'size: {len(self._data)}')
            raise Exception('No data')

    def push_front(self, value):
        self.__check_deck_length_push()
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        self.__check_deck_length_push()
        self._data.append(value)

    def pop_front(self):
        self.__check_deck_length_pop()
        return self._data.pop(self.FIRST_ELEMENT)

    def pop_back(self):
        self.__check_deck_length_pop()
        return self._data.pop()

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self)-1]
        return None

    def clear(self):
        if(len(self._data > 0)):
            self._data.clear()

    def exists(self, value):
        if value in self._data:
            return True
        return False

    def peek(self, position, order=""):
        if not order or order == "front":
            return self._data[position]
        position = (position * -1) - 1
        return self._data[position]


if __name__ == "__main__":
    deque = Deque(11)
    elements_1 = [6, 7, 8, 9, 10]
    elements_2 = [1, 2, 3, 4, 5]

    for elem in elements_1:
        deque.push_front(elem)

    for elem in elements_2:
        deque.push_back(elem)

    print(deque)  # saída: Deque(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
    print(deque.__len__())  # saída: 10

    print(deque.pop_front())   # saída: 10, pois ele retorna o número retirado
    print(deque.pop_back())  # saída: 5, pois ele retorna o número retirado

    print(deque)  # saída: Deque(9, 8, 7, 6, 1, 2, 3, 4)
    print(deque.__len__())  # saída: 8

    print(deque.peek_front())  # saída: 9
    print(deque.peek_back())  # saída: 4

    print(deque._data[-1])  # igual a peek_back

    print(deque.peek(2, "desc"))
    print(deque.peek(1, "desc"))
    print(deque.peek(0, "desc"))
    print(deque.peek(-1, "desc"))
    print(deque.peek(-2, "desc"))

    try:
        deque.push_back(4)
        deque.push_back(4)
        deque.push_back(4)
        deque.push_back(4)
        deque.push_back(4)
    except Exception:
        print("Deck cheio")

    try:
        deque.pop_back()
        deque.pop_front()
        deque.pop_back()
        deque.pop_front()
        deque.pop_back()
        deque.pop_front()
        deque.pop_back()
        deque.pop_front()
        deque.pop_back()
        deque.pop_front()
        deque.pop_back()
        deque.pop_front()
        deque.pop_back()
        deque.pop_front()

    except Exception:
        print("Deque vazio")
