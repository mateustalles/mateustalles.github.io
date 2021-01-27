from array_example import Array

class Matrix(Array):

    def get(self, row, column):
        return self.data[line][column]

    def set(self, row, column, value):
        try:
            self.data[row].insert(column, value)
        except:
            self.data.insert(row, [value])
    
    def remove(self, row, column):
        return self.data[row].pop(column)


array = Matrix()

array.set(0, 0, "Marcos")
array.set(0, 1, 6)
array.set(0, 2, 9)

array.set(1, 0, "Patrícia")
array.set(1, 1, 9)
array.set(1, 2, 6)

print(array)

# remove o índice 2, da primeira linha
# valor: 9
array.remove(0, 2)

print(array)
