import numpy as np
import random


class NumpyArray:
    def __init__(self):
        self.data = np.array([], dtype=int)


class MonitorLogs(NumpyArray):
    def get(self):
        print(self.data)
        return self.data

    def _binary_array_constructor(self):
        for i in range(0, 8):
            n = random.randint(0, 1)
            self.data = np.append(self.data, n)

    def calc_system_stability(self):
        self._binary_array_constructor()
        # Primeira solução bizarraça usando indexes, lol:
        # low_index = 0
        # high_index = 0
        # stability_results = []
        # for index, i in enumerate(self.data):
        #     if i == 1 and index == 0:
        #         low_index = index
        #     if i == 1 and index != 0 and self.data[index - 1] != 1:
        #         low_index = index
        #         continue
        #     if i == 1 and index == 7:
        #         high_index = index
        #         stability_results.append(abs(high_index - low_index + 1))
        #     if i == 1:
        #         high_index = index
        #         continue
        #     if i == 0 and index != 0 and self.data[index - 1] == 1:
        #         high_index = index - 1
        #         stability_results.append(abs(high_index - low_index + 1))
        #         continue
        # print(max(stability_results))

        # Solução óbvia do gabarito:
        stability_results = 0
        current_time = 0
        for value in self.data:
            if value == 1:
                current_time += 1
            else:
                current_time = 0
            if current_time >= stability_results:
                stability_results = current_time
        print(stability_results)
        return stability_results


if __name__ == "__main__":
    my_monitor = MonitorLogs()
    my_monitor.calc_system_stability()
    my_monitor.get()
