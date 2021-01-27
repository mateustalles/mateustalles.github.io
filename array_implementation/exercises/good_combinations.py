from monitor_app import NumpyArray
import random
import numpy as np


class GoodMatches(NumpyArray):
    def _random_numbers_generator(self):
        for i in range(0, random.randint(1, 10)):
            self.data = np.append(self.data, random.randint(1, 10))
    
    def find_good_matches(self):
        self._random_numbers_generator()
        print("numbers: ", self.data)
        combinations = []
        index_memory = []
        for index, n in enumerate(self.data):
            previous_ref = [
                (ref, idx) for idx, ref in enumerate(index_memory) if ref[0] == n
            ]
            if(previous_ref):
                combinations.append((previous_ref[0][0][1], index))
                index_memory[previous_ref[0][1]] = (n, index)
            index_memory.append((n, index))
        print("combinações: ", combinations)
        return combinations

if __name__ == "__main__":
    matches = GoodMatches()
    matches.find_good_matches()
